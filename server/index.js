const express = require("express");
const { validateReport } = require("./schema");
const { checkSensitiveRequest } = require("./safety");
const { buildModelMessages } = require("./prompt");

const app = express();
const PORT = Number(process.env.PORT || 3000);
const MAX_TEXT_LENGTHS = {
  nickname: 120,
  signature: 1000,
  question: 1000,
  post: 2000,
};

app.use(express.json({ limit: "1mb" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN || "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();
  return next();
});

function safeText(value, maxLength) {
  if (value === undefined || value === null) return "";
  if (typeof value !== "string") throw new Error("字段类型错误");
  return value.trim().slice(0, maxLength);
}

function normalizeInput(body) {
  const source = body && typeof body === "object" && body.input ? body.input : body;
  if (!source || typeof source !== "object" || Array.isArray(source)) {
    throw new Error("请求体必须是对象");
  }

  const posts = Array.isArray(source.posts) ? source.posts : [];
  if (posts.length > 3) throw new Error("最多只能提交 3 条社交文案");

  const screenshotCount = Number(source.screenshotCount || 0);
  if (!Number.isFinite(screenshotCount) || screenshotCount < 0 || screenshotCount > 6) {
    throw new Error("截图数量必须在 0-6 之间");
  }

  const input = {
    nickname: safeText(source.nickname, MAX_TEXT_LENGTHS.nickname),
    signature: safeText(source.signature, MAX_TEXT_LENGTHS.signature),
    posts: posts.map((post) => safeText(post, MAX_TEXT_LENGTHS.post)),
    scenario: safeText(source.scenario || "恋爱了解", 80),
    question: safeText(source.question, MAX_TEXT_LENGTHS.question),
    hasAvatar: Boolean(source.hasAvatar),
    screenshotCount,
    locale: safeText(body.locale || source.locale || "zh", 10),
  };

  const hasMeaningfulInput = Boolean(
    input.nickname ||
    input.signature ||
    input.posts.some(Boolean) ||
    input.question ||
    input.hasAvatar ||
    input.screenshotCount
  );
  if (!hasMeaningfulInput) throw new Error("请至少提交一项公开社交线索");

  return input;
}

function createMockReport(input) {
  const filledPosts = input.posts.filter(Boolean).length;
  const hasVisualClues = input.hasAvatar || input.screenshotCount > 0;
  const displayName = input.nickname || "未命名对象";

  return {
    basicProfile: {
      oneSentence: `${displayName}在公开社交线索中呈现出表达克制、边界清晰、重视内容质量的沟通风格。`,
      personaSummary: `基于${input.scenario || "当前场景"}中的公开线索，TA 的表达更偏克制和有选择地暴露自我。当前后端仍为 mock API，未来可替换为真实大模型分析结果。`,
      confidence: "中",
      confidenceReason: `样例分析参考了${hasVisualClues ? "头像或社交截图、" : ""}个性签名和 ${filledPosts} 条社交文案；当前未调用真实模型。`,
    },
    scores: {
      "表达温度": 78,
      "边界清晰度": 84,
      "自我暴露程度": 58,
      "沟通开放度": 66,
      "关系导向": 72,
    },
    bigFive: {
      "开放性倾向": 86,
      "尽责性倾向": 74,
      "外向性倾向": 52,
      "宜人性倾向": 68,
      "情绪稳定性倾向": 70,
    },
    personaTags: ["公开人设：克制清醒", "选择性暴露", "边界意识", "质感优先"],
    avatarVisualCues: hasVisualClues ? ["已提供视觉线索，未来可用于辅助分析公开自我呈现。"] : ["未提供头像或截图，当前主要依据文本线索。"],
    communicationAdvice: ["适合从公开内容中的具体细节切入。", "沟通节奏宜低压、具体、可选择。", "避免过快推进关系或连续追问隐私。"],
    riskPoints: ["不要把公开动态等同于完整人格。", "不要基于少量线索做敏感属性或重大判断。"],
    approachStyle: ["先建立共同语境，再逐步展开话题。", "使用具体观察代替标签化评价。"],
    evidenceChain: [
      {
        conclusion: "表达方式偏克制且重视边界",
        evidence: input.signature || "个性签名或简介可作为公开自我呈现线索。",
        source: "个性签名",
      },
      {
        conclusion: "沟通切入适合具体而低压",
        evidence: input.posts.find(Boolean) || "近期文案将作为未来模型分析的重要文本材料。",
        source: filledPosts ? "社交文案" : "社交线索",
      },
    ],
    disclaimer: "PersonaScope 仅基于用户提供的公开社交线索生成沟通画像，用于辅助理解表达风格与互动方式，不构成医学诊断、人格定论、关系判断或重大决策依据。",
  };
}

app.post("/api/analyze", (req, res) => {
  try {
    const input = normalizeInput(req.body);
    const safety = checkSensitiveRequest(input);
    if (!safety.ok) {
      return res.status(400).json({
        ok: false,
        code: "SENSITIVE_REQUEST",
        message: safety.message,
      });
    }

    // Future hook: pass these messages to a model provider from the server only.
    buildModelMessages(input);

    const report = createMockReport(input);
    const validation = validateReport(report);
    if (!validation.ok) {
      return res.status(500).json({
        ok: false,
        code: "INVALID_REPORT_SCHEMA",
        message: "报告结构校验失败",
      });
    }

    return res.json({ ok: true, data: report });
  } catch (error) {
    console.warn("Analyze request failed:", error.message);
    return res.status(400).json({
      ok: false,
      code: "BAD_REQUEST",
      message: error.message || "请求参数无效",
    });
  }
});

app.use((req, res) => {
  res.status(404).json({ ok: false, code: "NOT_FOUND", message: "接口不存在" });
});

app.listen(PORT, () => {
  console.log(`PersonaScope mock API listening on http://localhost:${PORT}`);
});
