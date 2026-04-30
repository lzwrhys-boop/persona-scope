const STORAGE_KEY = "personascope.history.v3";
const DISCLAIMER = "本结果仅基于公开社交线索进行概率化沟通画像分析，不作为心理诊断、招聘录用、金融风控、医疗建议或重大决策依据。";

const form = document.querySelector("#personaForm");
const avatarInput = document.querySelector("#avatarInput");
const avatarPreview = document.querySelector("#avatarPreview");
const avatarDropZone = document.querySelector("#avatarDropZone");
const removeAvatarBtn = document.querySelector("#removeAvatarBtn");
const screenshotInput = document.querySelector("#screenshotInput");
const screenshotDropZone = document.querySelector("#screenshotDropZone");
const screenshotGrid = document.querySelector("#screenshotGrid");
const screenshotCount = document.querySelector("#screenshotCount");
const nicknameInput = document.querySelector("#nicknameInput");
const signatureInput = document.querySelector("#signatureInput");
const postInputs = Array.from(document.querySelectorAll(".post-input"));
const questionInput = document.querySelector("#questionInput");
const promptOutput = document.querySelector("#promptOutput");
const promptStatus = document.querySelector("#promptStatus");
const copyPromptBtn = document.querySelector("#copyPromptBtn");
const saveHistoryBtn = document.querySelector("#saveHistoryBtn");
const jsonInput = document.querySelector("#jsonInput");
const renderReportBtn = document.querySelector("#renderReportBtn");
const fillExampleJsonBtn = document.querySelector("#fillExampleJsonBtn");
const clearJsonBtn = document.querySelector("#clearJsonBtn");
const jsonError = document.querySelector("#jsonError");
const visualReportOutput = document.querySelector("#visualReportOutput");
const clearHistoryBtn = document.querySelector("#clearHistoryBtn");
const historyList = document.querySelector("#historyList");
const toast = document.querySelector("#toast");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#mainNav");
const navLinks = Array.from(document.querySelectorAll(".main-nav a"));
const unicornBackground = document.querySelector("#unicornBackground");
const unicornScene = document.querySelector("#unicornScene");

const UNICORN_PROJECT_ID = "Yj3EFGnjZ1bEOuWjo6Ad";
const UNICORN_SDK_URL = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.11/dist/unicornStudio.umd.js";
const REPORT_EMPTY_STATE_HTML = `
  <div class="empty-state">
    <p class="eyebrow">WAITING FOR JSON</p>
    <h3>等待生成可视化报告</h3>
    <p>粘贴 ChatGPT 返回的 JSON 后，点击“生成可视化报告”。如果 ChatGPT 带了 \`\`\`json 代码块或少量说明文字，系统会尝试自动提取中间的 JSON。</p>
  </div>
`;

const SAMPLE_REPORT_DATA = {
  basicProfile: {
    oneSentence: "该对象呈现出审美敏感、边界清晰、重视表达质量的公开社交形象。",
    personaSummary: "TA 的公开表达更偏克制和有选择地暴露自我，常通过具体场景、审美判断和轻微自嘲来建立辨识度。沟通时适合先从共同语境和具体内容切入，再逐步深入。",
    confidence: "中",
    confidenceReason: "样例包含头像风格、个性签名和三条社交文案，但仍只代表公开自我呈现，不能等同于完整人格。"
  },
  scores: {
    "表达温度": 78,
    "边界感": 84,
    "自我呈现强度": 88,
    "沟通开放度": 66,
    "情绪稳定线索": 72
  },
  bigFive: {
    "开放性": 86,
    "尽责性": 74,
    "外向性": 52,
    "宜人性": 68,
    "情绪稳定性": 70
  },
  personaTags: ["审美驱动", "克制表达", "边界清晰", "慢热观察型", "重视质感"],
  communicationAdvice: [
    "开场时引用对方公开内容中的具体细节，避免泛泛寒暄。",
    "给对方保留选择空间，例如用“如果你愿意的话”降低压力。",
    "沟通节奏宜稳定，不要用连续追问测试对方的回应热情。"
  ],
  riskPoints: [
    "不要把公开动态直接等同于真实人格或关系意愿。",
    "避免过快推进亲密感，或用标签化语言概括对方。",
    "不要围绕隐私、收入、健康、政治宗教等敏感属性做推断。"
  ],
  approachStyle: [
    "从作品、观点、地点或共同兴趣切入。",
    "用低压邀请代替高强度索取回应。",
    "先建立共同语境，再表达进一步了解的意图。"
  ],
  evidenceChain: [
    {
      conclusion: "边界感较强",
      evidence: "个性签名强调自我节奏，文案中较少直接索取情绪回应。",
      source: "个性签名/第1条文案"
    },
    {
      conclusion: "开放性偏高",
      evidence: "内容中出现审美判断、跨场景联想和对新体验的正向表达。",
      source: "第2条文案/社交截图"
    },
    {
      conclusion: "更适合具体而轻量的开场",
      evidence: "表达方式偏含蓄，直接追问可能增加防御感。",
      source: "第3条文案"
    }
  ],
  disclaimer: DISCLAIMER
};

let avatarDataUrl = "";
let socialScreenshots = [];
let generatedPrompt = "";
let generatedRecordDraft = null;
let expandedHistoryId = "";
let toastTimer = null;
let unicornSceneInstance = null;
let unicornSdkPromise = null;

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function shouldDisableUnicornBackground() {
  return window.matchMedia("(max-width: 760px)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function setUnicornFallback() {
  if (!unicornBackground) return;
  unicornBackground.classList.remove("is-loading");
  unicornBackground.classList.add("is-fallback");
}

function loadUnicornSdk() {
  if (window.UnicornStudio) return Promise.resolve(window.UnicornStudio);
  if (unicornSdkPromise) return unicornSdkPromise;

  unicornSdkPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${UNICORN_SDK_URL}"]`);
    const script = existingScript || document.createElement("script");
    const timeout = window.setTimeout(() => reject(new Error("Unicorn Studio SDK 加载超时")), 8000);

    script.addEventListener("load", () => {
      window.clearTimeout(timeout);
      resolve(window.UnicornStudio);
    }, { once: true });
    script.addEventListener("error", () => {
      window.clearTimeout(timeout);
      reject(new Error("Unicorn Studio SDK 加载失败"));
    }, { once: true });

    if (!existingScript) {
      script.src = UNICORN_SDK_URL;
      script.async = true;
      document.head.appendChild(script);
    }
  });

  return unicornSdkPromise;
}

async function UnicornBackground() {
  if (!unicornBackground || !unicornScene) return;
  if (shouldDisableUnicornBackground()) {
    unicornBackground.classList.add("is-disabled");
    return;
  }

  unicornBackground.classList.add("is-loading");
  try {
    const UnicornStudio = await loadUnicornSdk();
    if (!UnicornStudio) throw new Error("Unicorn Studio SDK 不可用");

    if (typeof UnicornStudio.addScene === "function") {
      unicornSceneInstance = await UnicornStudio.addScene({
        elementId: "unicornScene",
        projectId: UNICORN_PROJECT_ID,
        scale: 0.85,
        dpi: 1.15,
        fps: 30,
        lazyLoad: true,
        production: true,
      });
    } else if (typeof UnicornStudio.init === "function") {
      UnicornStudio.init();
    } else {
      throw new Error("Unicorn Studio SDK 初始化方法不可用");
    }

    unicornBackground.classList.remove("is-loading", "is-fallback");
    unicornBackground.classList.add("is-ready");
  } catch (error) {
    console.warn("Unicorn Studio 背景加载失败，已使用渐变背景兜底。", error);
    setUnicornFallback();
  }
}

function getHistory() {
  try {
    const records = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return Array.isArray(records) ? records : [];
  } catch (error) {
    console.warn("历史记录解析失败，已重置。", error);
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

function saveHistory(records) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createId() {
  if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function clampScore(value) {
  const normalizedValue = extractScoreNumber(value);
  const number = typeof normalizedValue === "string" ? Number(normalizedValue.replace("%", "").trim()) : Number(normalizedValue);
  if (Number.isNaN(number)) return 0;
  return Math.max(0, Math.min(100, Math.round(number)));
}

function truncateText(value, length = 64) {
  const text = value || "未填写";
  return text.length > length ? `${text.slice(0, length)}...` : text;
}

function getSelectedScenario() {
  const selected = document.querySelector('input[name="scenario"]:checked');
  return selected ? selected.value : "恋爱了解";
}

function isSupportedImage(file) {
  return ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(file.type);
}

function collectFormData() {
  return {
    nickname: nicknameInput.value.trim(),
    signature: signatureInput.value.trim(),
    posts: postInputs.map((input) => input.value.trim()),
    scenario: getSelectedScenario(),
    question: questionInput.value.trim(),
    hasAvatar: Boolean(avatarDataUrl),
    screenshotCount: socialScreenshots.length,
  };
}

function hasMeaningfulInput(data) {
  return Boolean(data.nickname || data.signature || data.posts.some(Boolean) || data.question || data.hasAvatar || data.screenshotCount);
}

function buildPrompt(data) {
  const displayName = data.nickname || "未命名对象";
  const normalizedSignature = data.signature || "未提供";
  const normalizedQuestion = data.question || "未提供，请根据分析场景自行给出最有价值的沟通建议。";
  const normalizedPosts = data.posts.map((post, index) => `${index + 1}. ${post || "未提供"}`).join("\n");
  const avatarMaterial = data.hasAvatar
    ? "【头像资料】用户已上传头像，请结合头像中的视觉自我呈现方式进行辅助分析，但不得仅凭长相做绝对判断。"
    : "【头像资料】用户未上传头像，请不要基于头像进行推测。";
  const screenshotMaterial = data.screenshotCount
    ? `【社交截图资料】用户已上传 ${data.screenshotCount} 张朋友圈/社交媒体截图，请结合截图中的文字、图片内容、排版风格、发布时间、表达情绪和自我呈现方式进行综合分析。`
    : "【社交截图资料】用户未上传社交截图，请主要基于签名与手动输入文案分析。";

  return `你是一名专业、谨慎、非诊断取向的中文沟通画像分析助手。请基于公开社交线索，为「${displayName}」生成概率化沟通画像。

重要：最终只输出严格 JSON。不要输出 Markdown，不要输出解释文字，不要使用代码块包裹 JSON。

用户输入资料：
- 分析对象昵称：${displayName}
- 分析场景：${data.scenario}
- ${avatarMaterial}
- ${screenshotMaterial}
- 请将本 Prompt 与已上传的头像/社交截图一并发送给 ChatGPT，才能完成图文综合分析。当前网站不调用 API，也不做 OCR。

个性签名：
${normalizedSignature}

最近三条社交文案 / 截图关键文字：
${normalizedPosts}

用户最想知道的问题：
${normalizedQuestion}

分析要求：
1. 使用 Big Five 大五人格作为人格倾向框架。
2. 使用语言心理学分析表达方式、情绪色彩、关系需求、控制感、自我关注程度。
3. 使用社交媒体自我呈现理论分析对方想展示的人设。
4. 使用头像视觉线索作为辅助，不做绝对判断。
5. 所有分数必须是 0-100 的概率化倾向分数，不是诊断结果。
6. 每个关键结论必须有证据链。
7. 禁止判断政治、宗教、健康、性取向、犯罪倾向、收入水平、是否忠诚、是否适合录用等敏感属性。
8. 不得输出操控、PUA、歧视、筛选或伤害他人的建议。

请严格输出以下 JSON 结构，字段名必须保持一致：
{
  "basicProfile": {
    "oneSentence": "",
    "personaSummary": "",
    "confidence": "高/中/低",
    "confidenceReason": ""
  },
  "scores": {
    "表达温度": 0,
    "边界感": 0,
    "自我呈现强度": 0,
    "沟通开放度": 0,
    "情绪稳定线索": 0
  },
  "bigFive": {
    "开放性": 0,
    "尽责性": 0,
    "外向性": 0,
    "宜人性": 0,
    "情绪稳定性": 0
  },
  "personaTags": [],
  "communicationAdvice": [],
  "riskPoints": [],
  "approachStyle": [],
  "evidenceChain": [
    {
      "conclusion": "",
      "evidence": "",
      "source": "头像/个性签名/第1条文案/第2条文案/第3条文案/社交截图"
    }
  ],
  "disclaimer": "${DISCLAIMER}"
}`;
}

function updateGeneratedState(prompt, recordDraft) {
  generatedPrompt = prompt;
  generatedRecordDraft = recordDraft;
  promptOutput.textContent = prompt || "填写左侧信息后，系统会在这里生成一段结构化 Prompt。";
  copyPromptBtn.disabled = !prompt;
  saveHistoryBtn.disabled = !prompt;
  promptStatus.textContent = prompt ? "Prompt 已生成。复制后连同头像和社交截图一起发给 ChatGPT，并要求其返回严格 JSON。" : "填写左侧信息后生成，复制到 ChatGPT 即可获得报告。";
}

function handleSubmit(event) {
  event.preventDefault();
  const data = collectFormData();
  if (!hasMeaningfulInput(data)) {
    showToast("请至少填写一项公开线索");
    return;
  }

  const prompt = buildPrompt(data);
  updateGeneratedState(prompt, {
    id: createId(),
    type: "prompt",
    ...data,
    prompt,
    createdAt: new Date().toISOString(),
  });
  showToast("严格 JSON 分析 Prompt 已生成");
}

function handleReset() {
  avatarDataUrl = "";
  socialScreenshots = [];
  avatarInput.value = "";
  screenshotInput.value = "";
  avatarPreview.innerHTML = "+";
  removeAvatarBtn.hidden = true;
  renderScreenshotGrid();
  const defaultScenario = document.querySelector('input[name="scenario"][value="恋爱了解"]');
  if (defaultScenario) defaultScenario.checked = true;
  updateGeneratedState("", null);
  showToast("当前内容已清空");
}

function setAvatarFile(file) {
  if (!file) {
    avatarDataUrl = "";
    avatarPreview.innerHTML = "+";
    removeAvatarBtn.hidden = true;
    return;
  }
  if (!isSupportedImage(file)) {
    showToast("请选择 jpg、jpeg、png 或 webp 图片");
    avatarInput.value = "";
    return;
  }
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    avatarDataUrl = String(reader.result || "");
    avatarPreview.innerHTML = `<img src="${avatarDataUrl}" alt="头像预览">`;
    removeAvatarBtn.hidden = false;
    showToast("头像已本地预览");
  });
  reader.readAsDataURL(file);
}

function removeAvatar() {
  avatarDataUrl = "";
  avatarInput.value = "";
  avatarPreview.innerHTML = "+";
  removeAvatarBtn.hidden = true;
  showToast("头像已删除");
}

function renderScreenshotGrid() {
  screenshotCount.textContent = `已上传 ${socialScreenshots.length} / 6 张`;
  screenshotGrid.innerHTML = socialScreenshots
    .map((item, index) => `
      <div class="screenshot-item">
        <img src="${item.dataUrl}" alt="社交截图 ${index + 1}">
        <button class="remove-shot" type="button" data-id="${item.id}" aria-label="删除第 ${index + 1} 张截图">×</button>
      </div>
    `)
    .join("");
}

function addScreenshotFiles(files) {
  const incomingFiles = Array.from(files || []);
  const availableSlots = 6 - socialScreenshots.length;
  if (!incomingFiles.length) return;
  if (!availableSlots) {
    showToast("最多只能上传 6 张社交截图");
    return;
  }
  const supportedFiles = incomingFiles.filter(isSupportedImage).slice(0, availableSlots);
  if (incomingFiles.some((file) => !isSupportedImage(file))) showToast("已跳过不支持的图片格式");
  if (incomingFiles.length > availableSlots) showToast(`最多 6 张，已添加前 ${availableSlots} 张`);
  supportedFiles.forEach((file) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      socialScreenshots.push({ id: createId(), name: file.name, dataUrl: String(reader.result || "") });
      renderScreenshotGrid();
    });
    reader.readAsDataURL(file);
  });
  screenshotInput.value = "";
}

function bindDropZone(dropZone, onFiles) {
  ["dragenter", "dragover"].forEach((eventName) => {
    dropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      dropZone.classList.add("drag-over");
    });
  });
  ["dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      dropZone.classList.remove("drag-over");
    });
  });
  dropZone.addEventListener("drop", (event) => onFiles(event.dataTransfer.files));
}

async function copyText(text) {
  if (!text) {
    showToast("没有可复制内容");
    return;
  }
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      throw new Error("Clipboard API unavailable");
    }
    showToast("已复制");
  } catch (error) {
    console.warn("剪贴板复制失败，使用降级方案。", error);
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showToast("已复制");
  }
}

function saveCurrentPrompt() {
  if (!generatedRecordDraft || !generatedPrompt) {
    showToast("请先生成 Prompt");
    return;
  }
  const record = { ...generatedRecordDraft, id: createId(), createdAt: new Date().toISOString() };
  saveHistory([record, ...getHistory()].slice(0, 40));
  expandedHistoryId = record.id;
  renderHistory();
  showToast("Prompt 已保存到历史记录");
}

function parseReportJson() {
  const rawInput = jsonInput.value.trim();
  if (!rawInput) throw new Error("请先粘贴 ChatGPT 返回的 JSON。");
  const rawJson = extractJsonCandidate(rawInput);
  try {
    return { data: JSON.parse(rawJson), rawJson };
  } catch (error) {
    console.warn("JSON 解析失败。", error);
    throw new Error("JSON 格式仍无法解析。请检查是否缺少逗号、引号或括号；也可以点击“填入示例 JSON”对照格式。");
  }
}

function extractJsonCandidate(rawInput) {
  const trimmedInput = rawInput.trim();
  const fencedMatch = trimmedInput.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const text = (fencedMatch ? fencedMatch[1] : trimmedInput).trim();
  if (text.startsWith("{") && text.endsWith("}")) return text;

  const start = text.indexOf("{");
  if (start === -1) {
    throw new Error("没有检测到 JSON 对象。请粘贴以 { 开头的 JSON，或直接点击“填入示例 JSON”查看格式。");
  }

  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = start; index < text.length; index += 1) {
    const char = text[index];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (char === "\\") {
      escaped = true;
      continue;
    }
    if (char === '"') {
      inString = !inString;
      continue;
    }
    if (inString) continue;
    if (char === "{") depth += 1;
    if (char === "}") depth -= 1;
    if (depth === 0) return text.slice(start, index + 1);
  }

  throw new Error("JSON 看起来没有完整闭合。请检查最后是否缺少 }。");
}

function normalizeReportData(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("JSON 内容不是有效对象。");
  const basicProfile = getFirstObject(data, ["basicProfile", "profile", "basic_profile", "summaryProfile", "基础画像", "基本画像"]);
  return {
    basicProfile: {
      oneSentence: coerceText(getFirstValue(basicProfile, ["oneSentence", "oneSentenceProfile", "one_sentence", "profile", "headline", "一句话画像", "一句话总结"]) || getFirstValue(data, ["oneSentence", "oneSentenceProfile", "one_sentence", "一句话画像", "一句话总结"]), ["text", "content", "summary", "value"]) || "未提供一句话画像",
      personaSummary: coerceText(getFirstValue(basicProfile, ["personaSummary", "persona_summary", "summary", "persona", "description", "人设总结", "画像总结"]) || getFirstValue(data, ["personaSummary", "persona_summary", "summary", "人设总结", "画像总结"]), ["text", "content", "summary", "value"]) || "未提供人设总结",
      confidence: coerceText(getFirstValue(basicProfile, ["confidence", "confidenceLevel", "confidence_level", "置信度"]) || getFirstValue(data, ["confidence", "置信度"]), ["level", "value", "text"]) || "中",
      confidenceReason: coerceText(getFirstValue(basicProfile, ["confidenceReason", "confidence_reason", "reason", "confidenceExplanation", "置信度说明", "置信度原因"]) || getFirstValue(data, ["confidenceReason", "confidence_reason", "置信度说明", "置信度原因"]), ["reason", "content", "text", "value"]) || "未提供置信度说明",
    },
    scores: normalizeScores(getFirstValue(data, ["scores", "score", "metrics", "profileScores", "综合评分", "画像分数"]), ["表达温度", "边界感", "自我呈现强度", "沟通开放度", "情绪稳定线索"]),
    bigFive: normalizeScores(getFirstValue(data, ["bigFive", "big_five", "big5", "personality", "personalityScores", "大五人格", "人格倾向"]), ["开放性", "尽责性", "外向性", "宜人性", "情绪稳定性"]),
    personaTags: normalizeStringArray(getFirstValue(data, ["personaTags", "tags", "persona_tags", "labels", "人设标签", "标签"]), ["tag", "name", "label", "value", "title", "text", "标签"]),
    communicationAdvice: normalizeStringArray(getFirstValue(data, ["communicationAdvice", "advice", "communication_advice", "suggestions", "沟通建议", "建议"]), ["advice", "content", "text", "value", "title", "建议"]),
    riskPoints: normalizeStringArray(getFirstValue(data, ["riskPoints", "risks", "risk_points", "redFlags", "相处雷区", "风险点", "雷区"]), ["risk", "point", "content", "text", "value", "title", "风险", "雷区"]),
    approachStyle: normalizeStringArray(getFirstValue(data, ["approachStyle", "approach", "approach_style", "approaches", "接近方式", "适合接近方式"]), ["style", "content", "text", "value", "title", "方式"]),
    evidenceChain: normalizeEvidenceChain(getFirstValue(data, ["evidenceChain", "evidence_chain", "evidence", "proofs", "证据链", "依据"])),
    disclaimer: coerceText(getFirstValue(data, ["disclaimer", "免责声明"]), ["text", "content", "value"]) || DISCLAIMER,
  };
}

function getFirstObject(source, keys) {
  const value = getFirstValue(source, keys);
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

function getFirstValue(source, keys) {
  if (!source || typeof source !== "object") return undefined;
  for (const key of keys) {
    if (source[key] !== undefined && source[key] !== null && source[key] !== "") return source[key];
  }
  const normalizedEntries = Object.entries(source).map(([key, value]) => [normalizeKey(key), value]);
  for (const key of keys) {
    const normalizedKey = normalizeKey(key);
    const entry = normalizedEntries.find(([sourceKey, value]) => sourceKey === normalizedKey && value !== undefined && value !== null && value !== "");
    if (entry) return entry[1];
  }
  return undefined;
}

function normalizeScores(source, keys) {
  return keys.reduce((result, key) => {
    result[key] = clampScore(findScoreValue(source, key));
    return result;
  }, {});
}

function findScoreValue(source, key) {
  if (!source || typeof source !== "object") return 0;
  const aliases = {
    表达温度: ["表达温度", "expressionWarmth", "warmth", "表达热度", "表达温暖度"],
    边界感: ["边界感", "boundary", "boundarySense", "边界清晰度", "边界意识"],
    自我呈现强度: ["自我呈现强度", "selfPresentation", "self_presentation", "personaStrength", "自我展示强度"],
    沟通开放度: ["沟通开放度", "communicationOpenness", "opennessCommunication", "openCommunication", "沟通开放性"],
    情绪稳定线索: ["情绪稳定线索", "emotionalStabilityClues", "emotionStability", "情绪稳定度", "情绪稳定"],
    开放性: ["开放性", "openness", "开放", "open"],
    尽责性: ["尽责性", "conscientiousness", "责任感", "责任心"],
    外向性: ["外向性", "extraversion", "extroversion", "外倾性"],
    宜人性: ["宜人性", "agreeableness", "亲和性"],
    情绪稳定性: ["情绪稳定性", "emotionalStability", "emotional_stability", "神经质反向", "稳定性"],
  };
  const directValue = getFirstValue(source, aliases[key] || [key]);
  if (directValue !== undefined) return directValue;
  if (Array.isArray(source)) {
    const matchedItem = source.find((item) => {
      if (!item || typeof item !== "object") return false;
      const itemLabel = coerceText(getFirstValue(item, ["label", "name", "metric", "dimension", "key", "维度", "名称"]), ["value", "text"]);
      return (aliases[key] || [key]).some((alias) => normalizeKey(alias) === normalizeKey(itemLabel));
    });
    return getFirstValue(matchedItem, ["score", "value", "分数", "得分"]) ?? 0;
  }
  const fuzzyEntry = Object.entries(source).find(([sourceKey]) => {
    const normalizedSourceKey = normalizeKey(sourceKey);
    return (aliases[key] || [key]).some((alias) => normalizedSourceKey.includes(normalizeKey(alias)));
  });
  return fuzzyEntry ? fuzzyEntry[1] : 0;
}

function normalizeStringArray(value, preferredKeys = ["tag", "name", "label", "text", "content", "value", "title", "advice", "risk", "point", "style"]) {
  if (value === undefined || value === null || value === "") return [];
  if (Array.isArray(value)) return value.map((item) => coerceText(item, preferredKeys)).filter(Boolean);
  if (typeof value === "string" || typeof value === "number") return [String(value)];
  if (typeof value === "object") {
    const directText = coerceText(getFirstValue(value, preferredKeys), preferredKeys);
    if (directText) return [directText];
    return Object.values(value).map((item) => coerceText(item, preferredKeys)).filter(Boolean);
  }
  return [];
}

function extractText(item, preferredKeys) {
  return coerceText(item, preferredKeys);
}

function normalizeKey(key) {
  return String(key ?? "").toLowerCase().replace(/[\s_\-·:：]/g, "");
}

function extractScoreNumber(value) {
  if (typeof value === "number" || typeof value === "string") return value;
  if (Array.isArray(value)) return extractScoreNumber(value[0]);
  if (!value || typeof value !== "object") return 0;
  const scoreValue = getFirstValue(value, ["score", "value", "分数", "得分", "percentage", "percent"]);
  if (scoreValue !== undefined) return extractScoreNumber(scoreValue);
  const primitiveValue = Object.values(value).find((item) => typeof item === "number" || (typeof item === "string" && /\d/.test(item)));
  return primitiveValue ?? 0;
}

function coerceText(value, preferredKeys = ["text", "content", "value", "summary", "description"]) {
  if (value === undefined || value === null || value === "") return "";
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) return value.map((item) => coerceText(item, preferredKeys)).filter(Boolean).join("；");
  if (typeof value !== "object") return "";

  const preferredValue = getFirstValue(value, preferredKeys);
  if (preferredValue !== undefined && preferredValue !== value) {
    const text = coerceText(preferredValue, preferredKeys);
    if (text) return text;
  }

  const textParts = Object.values(value)
    .map((item) => coerceText(item, preferredKeys))
    .filter(Boolean);
  if (textParts.length) return textParts.join("；");
  try {
    return JSON.stringify(value);
  } catch (error) {
    return "";
  }
}

function normalizeEvidenceChain(value) {
  if (!value) return [];
  const evidenceItems = Array.isArray(value) ? value : Object.values(value);
  return evidenceItems.map((item) => {
    if (typeof item === "string") {
      return { conclusion: item, evidence: "未提供具体证据", source: "未提供来源" };
    }
    if (!item || typeof item !== "object") {
      return { conclusion: "未提供结论", evidence: "未提供具体证据", source: "未提供来源" };
    }
    return {
      conclusion: coerceText(getFirstValue(item, ["conclusion", "insight", "finding", "title", "point", "结论"]), ["value", "text", "content"]) || "未提供结论",
      evidence: coerceText(getFirstValue(item, ["evidence", "reason", "proof", "content", "text", "description", "证据", "依据", "理由"]), ["value", "text", "content"]) || "未提供具体证据",
      source: coerceText(getFirstValue(item, ["source", "from", "origin", "来源"]), ["value", "text", "content"]) || "未提供来源",
    };
  });
}

function renderBarChart(scores) {
  return `
    <div class="bar-chart">
      ${Object.entries(scores).map(([label, value]) => `
        <div class="bar-row">
          <div class="bar-meta"><span>${escapeHtml(label)}</span><strong>${value}</strong></div>
          <div class="bar-track"><span style="width: ${value}%"></span></div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderRadarChart(bigFive) {
  const entries = Object.entries(bigFive);
  const center = 120;
  const maxRadius = 86;
  const points = entries.map(([, value], index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / entries.length;
    const radius = (value / 100) * maxRadius;
    return `${center + Math.cos(angle) * radius},${center + Math.sin(angle) * radius}`;
  }).join(" ");
  const axes = entries.map(([label, value], index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / entries.length;
    const x = center + Math.cos(angle) * maxRadius;
    const y = center + Math.sin(angle) * maxRadius;
    const tx = center + Math.cos(angle) * (maxRadius + 24);
    const ty = center + Math.sin(angle) * (maxRadius + 24);
    return `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" /><text x="${tx}" y="${ty}">${escapeHtml(label)} ${value}</text>`;
  }).join("");
  const rings = [0.25, 0.5, 0.75, 1].map((ratio) => {
    const ringPoints = entries.map(([,], index) => {
      const angle = -Math.PI / 2 + (Math.PI * 2 * index) / entries.length;
      const radius = maxRadius * ratio;
      return `${center + Math.cos(angle) * radius},${center + Math.sin(angle) * radius}`;
    }).join(" ");
    return `<polygon points="${ringPoints}" class="radar-ring" />`;
  }).join("");
  return `<svg class="radar-chart" viewBox="0 0 240 240" role="img" aria-label="Big Five 雷达图">${rings}<g class="radar-axis">${axes}</g><polygon class="radar-area" points="${points}" /></svg>`;
}

function renderListCards(title, items, emptyText) {
  const normalizedItems = normalizeStringArray(Array.isArray(items) ? items : []).length
    ? normalizeStringArray(items)
    : [emptyText];
  return `
    <article class="dashboard-card glass-card">
      <h3>${escapeHtml(title)}</h3>
      <div class="insight-list">
        ${normalizedItems.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
      </div>
    </article>
  `;
}

function renderVisualReport(data) {
  const personaTags = normalizeStringArray(Array.isArray(data.personaTags) ? data.personaTags : []);
  const communicationAdvice = normalizeStringArray(Array.isArray(data.communicationAdvice) ? data.communicationAdvice : []);
  const riskPoints = normalizeStringArray(Array.isArray(data.riskPoints) ? data.riskPoints : []);
  const approachStyle = normalizeStringArray(Array.isArray(data.approachStyle) ? data.approachStyle : []);
  const evidenceChain = normalizeEvidenceChain(Array.isArray(data.evidenceChain) ? data.evidenceChain : []);

  visualReportOutput.innerHTML = `
    <div class="dashboard-grid">
      <article class="summary-card glass-card">
        <p class="eyebrow">PROFILE SUMMARY</p>
        <h3>${escapeHtml(data.basicProfile.oneSentence)}</h3>
        <p>${escapeHtml(data.basicProfile.personaSummary)}</p>
        <div class="confidence-strip">
          <span>置信度：${escapeHtml(data.basicProfile.confidence)}</span>
          <p>${escapeHtml(data.basicProfile.confidenceReason)}</p>
        </div>
      </article>

      <article class="dashboard-card glass-card">
        <h3>综合画像柱状图</h3>
        ${renderBarChart(data.scores)}
      </article>

      <article class="dashboard-card glass-card">
        <h3>Big Five 雷达图</h3>
        ${renderRadarChart(data.bigFive)}
      </article>

      <article class="dashboard-card glass-card tag-card">
        <h3>人设标签云</h3>
        <div class="tag-cloud">
          ${(personaTags.length ? personaTags : ["暂无标签"]).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        </div>
      </article>

      ${renderListCards("沟通建议", communicationAdvice, "暂无沟通建议")}
      ${renderListCards("相处雷区", riskPoints, "暂无相处雷区")}
      ${renderListCards("适合接近方式", approachStyle, "暂无接近方式")}

      <article class="dashboard-card glass-card evidence-card">
        <h3>证据链</h3>
        <div class="evidence-list">
          ${(evidenceChain.length ? evidenceChain : [{ conclusion: "暂无证据链", evidence: "请检查 JSON 是否包含 evidenceChain。", source: "未提供" }]).map((item) => `
            <div>
              <strong>${escapeHtml(item.conclusion || "未提供结论")}</strong>
              <p>${escapeHtml(item.evidence || "未提供证据")}</p>
              <span>${escapeHtml(item.source || "未提供来源")}</span>
            </div>
          `).join("")}
        </div>
      </article>

      <article class="dashboard-card glass-card disclaimer-card">
        <h3>免责声明</h3>
        <p>${escapeHtml(data.disclaimer)}</p>
      </article>
    </div>
  `;
}

function saveReportRecord(data, rawJson) {
  const record = {
    id: createId(),
    type: "report",
    createdAt: new Date().toISOString(),
    oneSentence: data.basicProfile.oneSentence,
    confidence: data.basicProfile.confidence,
    scores: data.scores,
    bigFive: data.bigFive,
    rawJson,
    reportData: data,
  };
  saveHistory([record, ...getHistory()].slice(0, 40));
  renderHistory();
}

function handleRenderReport() {
  try {
    jsonError.textContent = "";
    const { data, rawJson } = parseReportJson();
    const normalizedData = normalizeReportData(data);
    renderVisualReport(normalizedData);
    saveReportRecord(normalizedData, rawJson);
    showToast("可视化报告已生成并保存");
  } catch (error) {
    jsonError.textContent = error.message;
    showToast("JSON 解析失败");
  }
}

function fillExampleJson() {
  jsonInput.value = JSON.stringify(SAMPLE_REPORT_DATA, null, 2);
  jsonError.textContent = "";
  showToast("示例 JSON 已填入，可直接生成报告");
  jsonInput.focus();
}

function clearJsonReport() {
  jsonInput.value = "";
  jsonError.textContent = "";
  visualReportOutput.innerHTML = REPORT_EMPTY_STATE_HTML;
}

function renderHistory() {
  const records = getHistory();
  if (!records.length) {
    historyList.innerHTML = `
      <div class="empty-state">
        <p class="eyebrow">NO HISTORY</p>
        <h3>还没有保存任何记录</h3>
        <p>保存 Prompt 或生成可视化报告后，会在这里看到最近记录。</p>
        <a class="button primary" href="#analyze">去开始分析</a>
      </div>
    `;
    return;
  }

  historyList.innerHTML = records.map((record) => {
    const date = new Date(record.createdAt);
    const type = record.type || "prompt";
    const isExpanded = expandedHistoryId === record.id;
    if (type === "report") return renderReportHistoryCard(record, date);
    return renderPromptHistoryCard(record, date, isExpanded);
  }).join("");
}

function renderPromptHistoryCard(record, date, isExpanded) {
  return `
    <article class="history-card">
      <div class="history-top">
        <div>
          <span class="record-type">Prompt 记录</span>
          <h3>${escapeHtml(record.nickname || "未命名对象")}</h3>
          <time datetime="${escapeHtml(record.createdAt)}">${date.toLocaleString("zh-CN")}</time>
        </div>
        <span class="scenario-tag">${escapeHtml(record.scenario || "未设置场景")}</span>
      </div>
      <p>${escapeHtml(truncateText(record.signature))}</p>
      <ul class="history-meta">
        <li>文案摘要：${escapeHtml(truncateText((record.posts || []).filter(Boolean).join(" / "), 42))}</li>
        <li>已上传头像：${record.hasAvatar ? "是" : "否"}</li>
        <li>社交截图：${Number(record.screenshotCount || 0)} 张</li>
      </ul>
      <div class="history-actions">
        <button class="button small view-history" type="button" data-id="${escapeHtml(record.id)}">${isExpanded ? "收起 Prompt" : "查看 Prompt"}</button>
        <button class="button small copy-history" type="button" data-id="${escapeHtml(record.id)}">复制 Prompt</button>
        <button class="button small danger delete-history" type="button" data-id="${escapeHtml(record.id)}">删除记录</button>
      </div>
      ${isExpanded ? `<pre class="history-prompt">${escapeHtml(record.prompt)}</pre>` : ""}
    </article>
  `;
}

function renderReportHistoryCard(record, date) {
  return `
    <article class="history-card report-history-card">
      <div class="history-top">
        <div>
          <span class="record-type">可视化报告记录</span>
          <h3>${escapeHtml(record.oneSentence || "未命名报告")}</h3>
          <time datetime="${escapeHtml(record.createdAt)}">${date.toLocaleString("zh-CN")}</time>
        </div>
        <span class="scenario-tag">置信度：${escapeHtml(record.confidence || "中")}</span>
      </div>
      <ul class="history-meta">
        <li>综合分：${Object.values(record.scores || {}).map(clampScore).join(" / ")}</li>
        <li>Big Five：${Object.values(record.bigFive || {}).map(clampScore).join(" / ")}</li>
      </ul>
      <div class="history-actions">
        <button class="button small view-report-history" type="button" data-id="${escapeHtml(record.id)}">查看报告</button>
        <button class="button small copy-json-history" type="button" data-id="${escapeHtml(record.id)}">复制 JSON</button>
        <button class="button small danger delete-history" type="button" data-id="${escapeHtml(record.id)}">删除记录</button>
      </div>
    </article>
  `;
}

function deleteHistoryRecord(id) {
  saveHistory(getHistory().filter((record) => record.id !== id));
  if (expandedHistoryId === id) expandedHistoryId = "";
  renderHistory();
  showToast("记录已删除");
}

function clearAllHistory() {
  if (!getHistory().length) {
    showToast("当前没有历史记录");
    return;
  }
  localStorage.removeItem(STORAGE_KEY);
  expandedHistoryId = "";
  renderHistory();
  showToast("全部历史记录已清空");
}

function handleHistoryClick(event) {
  const button = event.target.closest("button");
  if (!button) return;
  const id = button.dataset.id;
  const record = getHistory().find((item) => item.id === id);
  if (!record) return;

  if (button.classList.contains("view-history")) {
    expandedHistoryId = expandedHistoryId === id ? "" : id;
    renderHistory();
    return;
  }
  if (button.classList.contains("copy-history")) {
    copyText(record.prompt);
    return;
  }
  if (button.classList.contains("view-report-history")) {
    renderVisualReport(record.reportData || normalizeReportData(JSON.parse(record.rawJson)));
    document.querySelector("#visual-report").scrollIntoView({ behavior: "smooth" });
    return;
  }
  if (button.classList.contains("copy-json-history")) {
    copyText(record.rawJson);
    return;
  }
  if (button.classList.contains("delete-history")) {
    deleteHistoryRecord(id);
  }
}

function updateActiveNav() {
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const headerHeight = getHeaderHeight();
  let current = sections[0];
  for (const section of sections) {
    const anchor = getSectionScrollAnchor(section);
    if (anchor.getBoundingClientRect().top <= headerHeight + 72) current = section;
  }
  setActiveNav(current?.id);
}

function setActiveNav(sectionId) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", Boolean(sectionId) && link.getAttribute("href") === `#${sectionId}`);
  });
}

function getHeaderHeight() {
  return document.querySelector(".site-header")?.offsetHeight || 80;
}

function getSectionScrollAnchor(section) {
  if (!section || section.id === "home") return section;
  return section.querySelector(".section-heading") || section;
}

function scrollToSection(section, updateHash = true) {
  if (!section) return;
  const headerHeight = getHeaderHeight();
  const anchor = getSectionScrollAnchor(section);
  const extraOffset = section.id === "home" ? 8 : 24;
  const targetTop = Math.max(0, anchor.getBoundingClientRect().top + window.pageYOffset - headerHeight - extraOffset);
  window.scrollTo({ top: targetTop, behavior: "smooth" });
  if (updateHash && window.location.hash !== `#${section.id}`) {
    history.pushState(null, "", `#${section.id}`);
  }
  setActiveNav(section.id);
}

function handleNavClick(event) {
  const href = event.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;
  const section = document.querySelector(href);
  if (!section) return;

  event.preventDefault();
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  scrollToSection(section);
}

function alignInitialHash() {
  if (!window.location.hash) return;
  const section = document.querySelector(window.location.hash);
  if (!section) return;
  window.setTimeout(() => scrollToSection(section, false), 0);
}

form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", () => setTimeout(handleReset, 0));
avatarInput.addEventListener("change", () => setAvatarFile(avatarInput.files && avatarInput.files[0]));
screenshotInput.addEventListener("change", () => addScreenshotFiles(screenshotInput.files));
removeAvatarBtn.addEventListener("click", removeAvatar);
screenshotGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".remove-shot");
  if (!button) return;
  socialScreenshots = socialScreenshots.filter((item) => item.id !== button.dataset.id);
  renderScreenshotGrid();
  showToast("截图已删除");
});
bindDropZone(avatarDropZone, (files) => setAvatarFile(files && files[0]));
bindDropZone(screenshotDropZone, addScreenshotFiles);
copyPromptBtn.addEventListener("click", () => copyText(generatedPrompt));
saveHistoryBtn.addEventListener("click", saveCurrentPrompt);
renderReportBtn.addEventListener("click", handleRenderReport);
fillExampleJsonBtn.addEventListener("click", fillExampleJson);
clearJsonBtn.addEventListener("click", clearJsonReport);
clearHistoryBtn.addEventListener("click", clearAllHistory);
historyList.addEventListener("click", handleHistoryClick);

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.forEach((link) => {
  link.addEventListener("click", handleNavClick);
});
window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("load", () => {
  alignInitialHash();
  updateActiveNav();
});

UnicornBackground();
renderHistory();
