const { buildModelMessages } = require("./prompt");
const { normalizeReport, validateReport } = require("./schema");

class ModelClientError extends Error {
  constructor(code, message) {
    super(message);
    this.name = "ModelClientError";
    this.code = code;
  }
}

function shouldUseMockModel() {
  const explicitMock = String(process.env.MOCK_MODEL || "true").toLowerCase() !== "false";
  return explicitMock || !process.env.MODEL_API_KEY || !process.env.MODEL_BASE_URL || !process.env.MODEL_NAME;
}

function getChatCompletionsUrl() {
  const baseUrl = String(process.env.MODEL_BASE_URL || "").replace(/\/+$/, "");
  if (!baseUrl) return "";
  if (baseUrl.endsWith("/chat/completions")) return baseUrl;
  if (baseUrl.endsWith("/v1")) return `${baseUrl}/chat/completions`;
  return `${baseUrl}/v1/chat/completions`;
}

function extractJsonCandidate(text) {
  const raw = String(text || "").trim();
  const withoutFences = raw
    .replace(/```(?:json)?/gi, "")
    .replace(/```/g, "")
    .trim();
  const source = withoutFences;

  const start = source.indexOf("{");
  if (start === -1) {
    throw new ModelClientError("MODEL_INVALID_JSON", "模型没有返回有效 JSON");
  }

  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (char === "\\") {
      escaped = true;
      continue;
    }
    if (char === "\"") {
      inString = !inString;
      continue;
    }
    if (inString) continue;
    if (char === "{") depth += 1;
    if (char === "}") depth -= 1;
    if (depth === 0) return source.slice(start, index + 1);
  }

  throw new ModelClientError("MODEL_INVALID_JSON", "模型返回的 JSON 没有完整闭合");
}

function parseModelJson(text) {
  try {
    return JSON.parse(extractJsonCandidate(text));
  } catch (error) {
    if (error instanceof ModelClientError) throw error;
    throw new ModelClientError("MODEL_INVALID_JSON", "模型返回的 JSON 无法解析");
  }
}

function extractModelText(responseJson) {
  if (typeof responseJson?.output_text === "string") return responseJson.output_text;
  const content = responseJson?.choices?.[0]?.message?.content;
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content
      .map((item) => item?.text || item?.content || "")
      .filter(Boolean)
      .join("\n");
  }
  throw new ModelClientError("MODEL_EMPTY_RESPONSE", "模型没有返回可解析内容");
}

async function requestModel(input, options = {}) {
  const modelMessages = buildModelMessages(input, options);
  const response = await fetch(getChatCompletionsUrl(), {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.MODEL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.MODEL_NAME,
      temperature: 0.3,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: modelMessages.system },
        { role: "system", content: `Developer instructions:\n${modelMessages.developer}` },
        { role: "user", content: JSON.stringify(modelMessages.user, null, 2) },
      ],
    }),
  });

  let responseJson = null;
  try {
    responseJson = await response.json();
  } catch (error) {
    throw new ModelClientError("MODEL_BAD_RESPONSE", "模型服务返回格式异常");
  }

  if (!response.ok) {
    console.warn("Model provider error:", response.status, responseJson?.error?.message || responseJson?.message || "Unknown error");
    throw new ModelClientError("MODEL_REQUEST_FAILED", "模型服务请求失败，请稍后重试");
  }

  return {
    data: parseModelJson(extractModelText(responseJson)),
  };
}

async function callModel(input) {
  if (shouldUseMockModel()) return { useMock: true };

  let firstResult = await requestModel(input);
  let normalized = normalizeReport(firstResult.data);
  let validation = validateReport(normalized);
  if (validation.ok) return { useMock: false, data: normalized };

  console.warn("Model report validation failed, retrying once:", validation.errors);
  const secondResult = await requestModel(input, { repairErrors: validation.errors });
  normalized = normalizeReport(secondResult.data);
  validation = validateReport(normalized);
  if (validation.ok) return { useMock: false, data: normalized };

  console.warn("Model report validation failed after retry:", validation.errors);
  throw new ModelClientError("INVALID_REPORT_SCHEMA", "模型返回格式不符合报告结构，请稍后重试");
}

module.exports = {
  ModelClientError,
  callModel,
  shouldUseMockModel,
};
