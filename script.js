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

let avatarDataUrl = "";
let socialScreenshots = [];
let generatedPrompt = "";
let generatedRecordDraft = null;
let expandedHistoryId = "";
let toastTimer = null;

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
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
  const number = typeof value === "string" ? Number(value.replace("%", "").trim()) : Number(value);
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
  const rawJson = jsonInput.value.trim();
  if (!rawJson) throw new Error("请先粘贴 ChatGPT 返回的 JSON。");
  if (!rawJson.startsWith("{") || !rawJson.endsWith("}")) {
    throw new Error("这里不能粘贴普通文字报告。请粘贴 ChatGPT 返回的严格 JSON。JSON 应该以 { 开头，以 } 结尾。如果 ChatGPT 输出了 ```json 代码块，请只复制中间的 JSON 内容。");
  }
  try {
    return { data: JSON.parse(rawJson), rawJson };
  } catch (error) {
    throw new Error("这里不能粘贴普通文字报告。请粘贴 ChatGPT 返回的严格 JSON。JSON 应该以 { 开头，以 } 结尾。如果 ChatGPT 输出了 ```json 代码块，请只复制中间的 JSON 内容。");
  }
}

function normalizeReportData(data) {
  if (!data || typeof data !== "object") throw new Error("JSON 内容不是有效对象。");
  const basicProfile = getFirstObject(data, ["basicProfile", "profile", "basic_profile", "summaryProfile"]);
  return {
    basicProfile: {
      oneSentence: getFirstValue(basicProfile, ["oneSentence", "oneSentenceProfile", "one_sentence", "profile", "headline"]) || getFirstValue(data, ["oneSentence", "oneSentenceProfile", "one_sentence"]) || "未提供一句话画像",
      personaSummary: getFirstValue(basicProfile, ["personaSummary", "persona_summary", "summary", "persona", "description"]) || getFirstValue(data, ["personaSummary", "persona_summary", "summary"]) || "未提供人设总结",
      confidence: getFirstValue(basicProfile, ["confidence", "confidenceLevel", "confidence_level"]) || getFirstValue(data, ["confidence"]) || "中",
      confidenceReason: getFirstValue(basicProfile, ["confidenceReason", "confidence_reason", "reason", "confidenceExplanation"]) || getFirstValue(data, ["confidenceReason", "confidence_reason"]) || "未提供置信度说明",
    },
    scores: normalizeScores(getFirstObject(data, ["scores", "score", "metrics", "profileScores"]), ["表达温度", "边界感", "自我呈现强度", "沟通开放度", "情绪稳定线索"]),
    bigFive: normalizeScores(getFirstObject(data, ["bigFive", "big_five", "big5", "personality", "personalityScores"]), ["开放性", "尽责性", "外向性", "宜人性", "情绪稳定性"]),
    personaTags: normalizeStringArray(getFirstValue(data, ["personaTags", "tags", "persona_tags", "labels"]), ["tag", "name", "label", "value", "title", "text"]),
    communicationAdvice: normalizeStringArray(getFirstValue(data, ["communicationAdvice", "advice", "communication_advice", "suggestions"]), ["advice", "content", "text", "value", "title"]),
    riskPoints: normalizeStringArray(getFirstValue(data, ["riskPoints", "risks", "risk_points", "redFlags"]), ["risk", "point", "content", "text", "value", "title"]),
    approachStyle: normalizeStringArray(getFirstValue(data, ["approachStyle", "approach", "approach_style", "approaches"]), ["style", "content", "text", "value", "title"]),
    evidenceChain: normalizeEvidenceChain(getFirstValue(data, ["evidenceChain", "evidence_chain", "evidence", "proofs"])),
    disclaimer: data.disclaimer || DISCLAIMER,
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
    表达温度: ["表达温度", "expressionWarmth", "warmth", "表达热度"],
    边界感: ["边界感", "boundary", "boundarySense", "边界清晰度"],
    自我呈现强度: ["自我呈现强度", "selfPresentation", "self_presentation", "personaStrength"],
    沟通开放度: ["沟通开放度", "communicationOpenness", "opennessCommunication", "openCommunication"],
    情绪稳定线索: ["情绪稳定线索", "emotionalStabilityClues", "emotionStability", "情绪稳定度"],
    开放性: ["开放性", "openness", "开放"],
    尽责性: ["尽责性", "conscientiousness", "责任感"],
    外向性: ["外向性", "extraversion", "extroversion"],
    宜人性: ["宜人性", "agreeableness"],
    情绪稳定性: ["情绪稳定性", "emotionalStability", "emotional_stability"],
  };
  return getFirstValue(source, aliases[key] || [key]) ?? 0;
}

function normalizeStringArray(value, preferredKeys = ["tag", "name", "label", "text", "content", "value", "title", "advice", "risk", "point", "style"]) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => extractText(item, preferredKeys)).filter(Boolean);
}

function extractText(item, preferredKeys) {
  if (typeof item === "string" || typeof item === "number") return String(item);
  if (!item || typeof item !== "object") return "";
  for (const key of preferredKeys) {
    if (item[key] !== undefined && item[key] !== null && item[key] !== "") {
      const value = item[key];
      if (typeof value === "string" || typeof value === "number") return String(value);
      if (typeof value === "object") return extractText(value, preferredKeys);
    }
  }
  const fallback = Object.values(item).find((value) => typeof value === "string" || typeof value === "number");
  return fallback === undefined ? "" : String(fallback);
}

function normalizeEvidenceChain(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (typeof item === "string") {
      return { conclusion: item, evidence: "未提供具体证据", source: "未提供来源" };
    }
    if (!item || typeof item !== "object") {
      return { conclusion: "未提供结论", evidence: "未提供具体证据", source: "未提供来源" };
    }
    return {
      conclusion: extractText({ value: getFirstValue(item, ["conclusion", "insight", "finding", "title", "point"]) }, ["value"]) || "未提供结论",
      evidence: extractText({ value: getFirstValue(item, ["evidence", "reason", "proof", "content", "text", "description"]) }, ["value"]) || "未提供具体证据",
      source: extractText({ value: getFirstValue(item, ["source", "from", "origin", "来源"]) }, ["value"]) || "未提供来源",
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

function clearJsonReport() {
  jsonInput.value = "";
  jsonError.textContent = "";
  visualReportOutput.innerHTML = `
    <div class="empty-state">
      <p class="eyebrow">WAITING FOR JSON</p>
      <h3>等待生成可视化报告</h3>
      <p>粘贴 ChatGPT 返回的严格 JSON 后，点击“生成可视化报告”。</p>
    </div>
  `;
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
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 130) current = section;
  }
  navLinks.forEach((link) => {
    link.classList.toggle("active", Boolean(current) && link.getAttribute("href") === `#${current.id}`);
  });
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
clearJsonBtn.addEventListener("click", clearJsonReport);
clearHistoryBtn.addEventListener("click", clearAllHistory);
historyList.addEventListener("click", handleHistoryClick);

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("load", updateActiveNav);

renderHistory();
