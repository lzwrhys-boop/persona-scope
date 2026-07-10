const { buildFollowupMessages, buildModelMessages } = require("./prompt");
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

function getModelProvider() {
  return String(process.env.MODEL_PROVIDER || "openai-compatible").trim() || "openai-compatible";
}

function getModelRuntimeInfo(input) {
  const socialImagesCount = Array.isArray(input?.socialImages) ? Math.min(input.socialImages.length, 6) : 0;
  return {
    provider: getModelProvider(),
    modelName: String(process.env.MODEL_NAME || ""),
    mainImageReceived: Boolean(input?.mainImage),
    socialImagesCount,
    multimodalPayload: Boolean(input?.mainImage || socialImagesCount),
  };
}

function getChatCompletionsUrl() {
  const baseUrl = String(process.env.MODEL_BASE_URL || "").replace(/\/+$/, "");
  if (!baseUrl) return "";
  if (baseUrl.endsWith("/chat/completions")) return baseUrl;
  if (baseUrl.endsWith("/v1")) return `${baseUrl}/chat/completions`;
  return `${baseUrl}/v1/chat/completions`;
}

function hasImageInputs(input) {
  return Boolean(input?.mainImage || (Array.isArray(input?.socialImages) && input.socialImages.length));
}

function supportsVisionInput() {
  const provider = getModelProvider().toLowerCase();
  const model = String(process.env.MODEL_NAME || "").toLowerCase();
  if (provider === "qwen") return /(^|[-_.])vl([-_.]|$)|qwen-vl|omni|vision/i.test(model);
  return /(vision|vl|gpt-4o|gpt-4\.1|gemini|claude-3|qwen.*vl|omni)/i.test(model);
}

function buildUserContent(modelUser, input) {
  const userForText = {
    ...modelUser,
    mainImage: input.mainImage ? "[attached image]" : "",
    socialImages: Array.isArray(input.socialImages) ? input.socialImages.map((_, index) => `[attached social image ${index + 1}]`) : [],
  };
  const content = [
    {
      type: "text",
      text: JSON.stringify(userForText, null, 2),
    },
  ];
  if (input.mainImage) {
    content.push({
      type: "image_url",
      image_url: { url: input.mainImage },
    });
  }
  (Array.isArray(input.socialImages) ? input.socialImages.slice(0, 6) : []).forEach((image) => {
    content.push({
      type: "image_url",
      image_url: { url: image },
    });
  });
  return content;
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
  const imageInputsPresent = hasImageInputs(input);
  const visionEnabled = supportsVisionInput();
  if (imageInputsPresent && !visionEnabled) {
    throw new ModelClientError("MODEL_VISION_UNAVAILABLE", "当前模型未启用图片理解，请检查 MODEL_NAME 是否为支持视觉输入的模型");
  }
  const modelMessages = buildModelMessages({ ...input, imagesReadable: imageInputsPresent && visionEnabled }, options);
  const userContent = imageInputsPresent ? buildUserContent(modelMessages.user, input) : JSON.stringify(modelMessages.user, null, 2);
  const requestBody = {
    model: process.env.MODEL_NAME,
    temperature: 0.3,
    messages: [
      { role: "system", content: modelMessages.system },
      { role: "system", content: `Developer instructions:\n${modelMessages.developer}` },
      { role: "user", content: userContent },
    ],
  };
  if (getModelProvider().toLowerCase() !== "qwen") {
    requestBody.response_format = { type: "json_object" };
  }
  const response = await fetch(getChatCompletionsUrl(), {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.MODEL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  let responseJson = null;
  try {
    responseJson = await response.json();
  } catch (error) {
    throw new ModelClientError("MODEL_BAD_RESPONSE", "模型服务返回格式异常");
  }

  if (!response.ok) {
    const providerMessage = String(responseJson?.error?.message || responseJson?.message || "Unknown error");
    console.warn("Model provider error:", response.status, providerMessage);
    if (imageInputsPresent && /image_url|image url|vision|visual|multimodal|modal|unsupported|不支持|图片|图像/i.test(providerMessage)) {
      throw new ModelClientError("MODEL_VISION_UNAVAILABLE", "当前模型未启用图片理解，请检查 MODEL_NAME 是否为支持视觉输入的模型");
    }
    throw new ModelClientError("MODEL_REQUEST_FAILED", "模型服务请求失败，请稍后重试");
  }

  return {
    data: parseModelJson(extractModelText(responseJson)),
  };
}

async function requestTextJson(modelMessages) {
  const requestBody = {
    model: process.env.MODEL_NAME,
    temperature: 0.35,
    messages: [
      { role: "system", content: modelMessages.system },
      { role: "system", content: `Developer instructions:\n${modelMessages.developer}` },
      { role: "user", content: JSON.stringify(modelMessages.user, null, 2) },
    ],
  };
  if (getModelProvider().toLowerCase() !== "qwen") {
    requestBody.response_format = { type: "json_object" };
  }
  const response = await fetch(getChatCompletionsUrl(), {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.MODEL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  let responseJson = null;
  try {
    responseJson = await response.json();
  } catch (error) {
    throw new ModelClientError("MODEL_BAD_RESPONSE", "模型服务返回格式异常");
  }

  if (!response.ok) {
    const providerMessage = String(responseJson?.error?.message || responseJson?.message || "Unknown error");
    console.warn("Model provider error:", response.status, providerMessage);
    throw new ModelClientError("MODEL_REQUEST_FAILED", "模型服务请求失败，请稍后重试");
  }

  return parseModelJson(extractModelText(responseJson));
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

function createMockFollowup(input) {
  const latestReply = String(input.latestReply || "").trim();
  const isBusy = /忙|没空|改天|再说|later|busy/i.test(latestReply);
  const isShort = latestReply.length <= 6;
  return {
    recommendedReply: isBusy
      ? "没事，你先忙。我就先放这儿，等你有空再说也行"
      : isShort
        ? "哈哈，那我先当你是默认有点感兴趣了"
        : "你这么一说我反而更好奇了，方便展开一点吗",
    alternativeReplies: [
      {
        label: "轻松一点",
        text: isBusy ? "行，那你先忙，别被我打断节奏" : "哈哈这个回复我收到了，感觉还有后续",
      },
      {
        label: "暧昧一点",
        text: isBusy ? "好，那我乖一点，等你忙完再找你" : "你这样回，我会有点想继续聊下去",
      },
    ],
    whyThisWorks: "这句接法先顺着对方状态走，不施压，也给后续聊天留了空间。",
    avoidReply: {
      text: "你是不是不想理我？",
      reason: "这类表达容易显得太急、像查岗，也会增加对方压力。",
    },
  };
}

function normalizeFollowupResult(data) {
  const alternatives = Array.isArray(data?.alternativeReplies) ? data.alternativeReplies : [];
  return {
    recommendedReply: String(data?.recommendedReply || "").trim(),
    alternativeReplies: alternatives.slice(0, 2).map((item, index) => ({
      label: String(item?.label || (index === 0 ? "轻松一点" : "暧昧一点")).trim(),
      text: String(item?.text || "").trim(),
    })),
    whyThisWorks: String(data?.whyThisWorks || "").trim(),
    avoidReply: {
      text: String(data?.avoidReply?.text || "").trim(),
      reason: String(data?.avoidReply?.reason || "").trim(),
    },
  };
}

function validateFollowupResult(data) {
  return Boolean(
    data?.recommendedReply &&
    Array.isArray(data.alternativeReplies) &&
    data.alternativeReplies.length >= 2 &&
    data.alternativeReplies.every((item) => item.label && item.text) &&
    data.whyThisWorks &&
    data.avoidReply?.text &&
    data.avoidReply?.reason
  );
}

async function callFollowup(input) {
  if (shouldUseMockModel()) return { useMock: true, data: createMockFollowup(input) };
  const data = normalizeFollowupResult(await requestTextJson(buildFollowupMessages(input)));
  if (!validateFollowupResult(data)) {
    throw new ModelClientError("INVALID_FOLLOWUP_SCHEMA", "模型返回格式不符合继续接话结构，请稍后重试");
  }
  return { useMock: false, data };
}

module.exports = {
  ModelClientError,
  callFollowup,
  callModel,
  getModelRuntimeInfo,
  shouldUseMockModel,
};
