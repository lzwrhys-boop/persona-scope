require("dotenv").config();

const cors = require("cors");
const crypto = require("crypto");
const express = require("express");
const { validateReport } = require("./schema");
const { checkSensitiveRequest } = require("./safety");
const { ModelClientError, callModel, shouldUseMockModel } = require("./modelClient");

const app = express();
const PORT = Number(process.env.PORT || 3000);
const MAX_TEXT_LENGTHS = {
  nickname: 120,
  signature: 1000,
  question: 1000,
  post: 2000,
};

function getAllowedOrigins() {
  return String(process.env.ALLOWED_ORIGIN || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function isLocalOrigin(origin) {
  return /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin);
}

app.use(cors({
  origin(origin, callback) {
    if (!origin) return callback(null, true);
    if (isLocalOrigin(origin) || getAllowedOrigins().includes(origin)) return callback(null, true);
    return callback(null, false);
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json({ limit: "1mb" }));

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

function getLoginSecret() {
  return String(process.env.APP_LOGIN_SECRET || "").trim();
}

function signLoginPayload(payload) {
  const secret = getLoginSecret();
  if (!secret) throw new Error("APP_LOGIN_SECRET 未配置");
  return crypto.createHmac("sha256", secret).update(payload).digest("base64url");
}

function createLoginToken() {
  const expiresAt = Date.now() + 1000 * 60 * 60 * 24 * 14;
  const nonce = crypto.randomBytes(12).toString("base64url");
  const payload = Buffer.from(JSON.stringify({ exp: expiresAt, nonce }), "utf8").toString("base64url");
  const signature = signLoginPayload(payload);
  return `${payload}.${signature}`;
}

function verifyLoginToken(token) {
  if (!token || typeof token !== "string" || !token.includes(".")) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = signLoginPayload(payload);
  const expectedBuffer = Buffer.from(expected);
  const signatureBuffer = Buffer.from(signature);
  if (expectedBuffer.length !== signatureBuffer.length || !crypto.timingSafeEqual(expectedBuffer, signatureBuffer)) return false;

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return Number.isFinite(data.exp) && data.exp > Date.now();
  } catch (error) {
    return false;
  }
}

function requireLogin(req, res, next) {
  try {
    const header = String(req.headers.authorization || "");
    const match = header.match(/^Bearer\s+(.+)$/i);
    if (!match || !verifyLoginToken(match[1])) {
      return res.status(401).json({ ok: false, error: "登录已失效，请重新输入访问码" });
    }
    return next();
  } catch (error) {
    console.warn("Auth check failed:", error.message);
    return res.status(401).json({ ok: false, error: "登录已失效，请重新输入访问码" });
  }
}

app.post("/api/login", (req, res) => {
  try {
    const expectedCode = String(process.env.APP_ACCESS_CODE || "").trim();
    const accessCode = safeText(req.body?.accessCode, 200);
    if (!expectedCode || !getLoginSecret()) {
      return res.status(503).json({ ok: false, error: "登录服务暂未配置" });
    }
    if (accessCode !== expectedCode) {
      return res.status(401).json({ ok: false, error: "访问码不正确" });
    }
    return res.json({ ok: true, token: createLoginToken() });
  } catch (error) {
    console.warn("Login request failed:", error.message);
    return res.status(400).json({ ok: false, error: "请求参数无效" });
  }
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
  if (posts.length > 3) throw new Error("最多只能提交 3 条补充文案");

  const screenshotCount = Number(source.screenshotCount || 0);
  if (!Number.isFinite(screenshotCount) || screenshotCount < 0 || screenshotCount > 6) {
    throw new Error("截图数量必须在 0-6 之间");
  }

  const input = {
    nickname: safeText(source.nickname, MAX_TEXT_LENGTHS.nickname),
    signature: safeText(source.signature, MAX_TEXT_LENGTHS.signature),
    posts: posts.map((post) => safeText(post, MAX_TEXT_LENGTHS.post)),
    scenario: safeText(source.scenario || "亲密关系", 80),
    selectedGoal: safeText(source.selectedGoal, 80),
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
  if (!hasMeaningfulInput) throw new Error("请至少上传照片或填写一个问题");

  return input;
}

function createMockReport(input) {
  const filledPosts = input.posts.filter(Boolean).length;
  const hasVisualClues = input.hasAvatar || input.screenshotCount > 0;
  const displayName = input.nickname || "这张照片";
  const goalText = input.selectedGoal || "自然开场";
  const sceneMetricLabels = {
    客户沟通: ["信任建立路径", "风险敏感度", "价值沟通偏好", "决策理性倾向", "推进节奏", "关系维护偏好"],
    职场协作: ["可信呈现感", "责任边界感", "协作开放度", "反馈接受方式", "沟通直接度", "压力下表达"],
    亲密关系: ["关系稳定表达", "投入表达方式", "回应主动性", "情绪表达度", "边界清晰度", "亲密推进节奏"],
    朋友社交: ["破冰难度", "话题开放度", "幽默接受度", "距离感", "相处节奏", "情绪松弛度"],
    自我呈现: ["第一印象一致性", "专业感呈现", "亲和力呈现", "表达记忆点", "边界感", "社交可接近度"],
  };
  const sceneMetrics = (sceneMetricLabels[input.scenario] || sceneMetricLabels["亲密关系"]).map((label, index) => ({
    label,
    score: [72, 64, 76, 68, 70, 66][index],
    basis: "基于公开呈现与补充问题的沟通参考。",
    suggestion: "建议先用低压、具体、可选择的表达观察回应。",
  }));

  return {
    scenario: input.scenario,
    selectedGoal: input.selectedGoal,
    basicProfile: {
      oneSentence: `${displayName}在“${input.scenario || "当前场景"}”里，当前更适合围绕“${goalText}”做低压、具体、可选择的开场。`,
      personaSummary: `基于${input.scenario || "当前场景"}中的照片上传状态、沟通目标和补充信息，报告会把第一印象转化为更容易执行的沟通建议。当前 mock API 不读取照片内容，因此不会描述具体表情、姿态或镜头细节。`,
      confidence: "中",
      confidenceReason: `样例分析参考了${hasVisualClues ? "照片或补充图片上传状态、" : ""}可选问题和 ${filledPosts} 条高级补充文字；由于 mock 模式不读取图片内容，结论仅用于演示流程。`,
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
    personaTags: ["低压开场更稳妥", "适合具体观察", "建议保留选择空间", "仅供沟通参考"],
    avatarVisualCues: hasVisualClues ? ["已提供照片或补充图片上传状态；当前 mock 不读取图片内容。"] : ["未提供照片内容，当前主要依据问题和补充文字。"],
    communicationAdvice: ["可以先从轻量、具体的问题切入，例如“我看到这个点挺有意思，可以多聊一点吗？”", "沟通节奏宜低压、具体、可选择。", "如果对方回应简短，先停在轻话题，不急着推进。"],
    riskPoints: ["不要把单张照片或一次表达当成重大判断依据。", "不要基于少量线索做敏感属性或重大判断。"],
    approachStyle: ["第一句先低压开场，再根据回应延展。", "使用具体观察代替标签化评价。"],
    sceneMetrics,
    evidenceChain: [
      {
        conclusion: `当前更适合围绕“${goalText}”用低压方式开场`,
        evidence: input.question || `用户选择了“${input.scenario || "当前场景"} / ${goalText}”，因此先给出对应目标下的低压建议。`,
        source: "用户问题",
      },
      {
        conclusion: "沟通切入适合具体而低压",
        evidence: input.posts.find(Boolean) || "当前没有补充文案，建议会更保守。",
        source: filledPosts ? "高级补充文案" : "输入完整度",
      },
    ],
    disclaimer: "PersonaScope 仅基于用户提供的视觉呈现与补充信息生成沟通画像，用于辅助理解第一印象与沟通风格倾向，仅供沟通参考。",
  };
}

app.post("/api/analyze", requireLogin, async (req, res) => {
  try {
    console.log("POST /api/analyze received", new Date().toISOString());
    const input = normalizeInput(req.body);
    const safety = checkSensitiveRequest(input);
    if (!safety.ok) {
      return res.status(400).json({
        ok: false,
        code: "SENSITIVE_REQUEST",
        message: safety.message,
      });
    }

    const modelResult = await callModel(input);
    const report = modelResult.useMock ? createMockReport(input) : modelResult.data;
    const validation = validateReport(report);
    if (!validation.ok) {
      console.warn("Report schema validation failed:", validation.errors);
      return res.status(502).json({
        ok: false,
        code: "INVALID_REPORT_SCHEMA",
        message: "模型返回格式不符合报告结构，请稍后重试",
      });
    }

    return res.json({ ok: true, data: report, meta: { mockModel: modelResult.useMock } });
  } catch (error) {
    console.warn("Analyze request failed:", error.message);
    if (error instanceof ModelClientError) {
      return res.status(502).json({
        ok: false,
        code: error.code,
        message: error.message,
      });
    }
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
  console.log(`PersonaScope API listening on port ${PORT}`);
});
