const STORAGE_KEY = "personascope.history.v1";

const form = document.querySelector("#personaForm");
const avatarInput = document.querySelector("#avatarInput");
const avatarPreview = document.querySelector("#avatarPreview");
const nicknameInput = document.querySelector("#nicknameInput");
const signatureInput = document.querySelector("#signatureInput");
const postInputs = Array.from(document.querySelectorAll(".post-input"));
const promptOutput = document.querySelector("#promptOutput");
const copyPromptBtn = document.querySelector("#copyPromptBtn");
const historyList = document.querySelector("#historyList");
const clearHistoryBtn = document.querySelector("#clearHistoryBtn");
const toast = document.querySelector("#toast");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#mainNav");
const navLinks = Array.from(document.querySelectorAll(".main-nav a"));

let avatarDataUrl = "";
let toastTimer = null;

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
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
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildPrompt({ nickname, signature, posts }) {
  const displayName = nickname || "未命名对象";
  const normalizedSignature = signature || "未提供";
  const normalizedPosts = posts.map((post, index) => `${index + 1}. ${post || "未提供"}`).join("\n");

  return `你是一名擅长社交文本分析、沟通策略与关系心理学解释的中文分析助手。

请基于以下公开社交线索，为「${displayName}」生成一份谨慎、非诊断、可复核的人际沟通画像报告。

重要约束：
1. 只能基于公开线索提出假设，不能把推测包装成事实。
2. 不进行医学诊断、人格定型、隐私侵犯或操控性建议。
3. 请用中文输出，语气专业、克制、有洞察力。
4. 每个判断都要说明来自哪些文本线索。
5. 最后给出适合与对方沟通的开场白、互动节奏和需要避免的表达。

公开线索：
【个性签名】
${normalizedSignature}

【最近三条社交媒体文案】
${normalizedPosts}

请按以下结构输出：
一、沟通画像摘要
二、公开形象与自我呈现
三、情绪表达方式与压力线索
四、关系边界与互动偏好
五、适合的沟通策略
六、可直接使用的开场白示例
七、需要避免的表达方式
八、不确定性与误判风险提醒`;
}

function renderHistory() {
  const records = getHistory();

  if (!records.length) {
    historyList.innerHTML = '<p class="empty-state">暂无历史记录。完成一次 Prompt 生成后会自动保存。</p>';
    return;
  }

  historyList.innerHTML = records
    .map((record) => {
      const date = new Date(record.createdAt);
      const safeName = escapeHtml(record.nickname || "未命名对象");
      const safeSignature = escapeHtml(record.signature || "未填写个性签名");
      const filledPosts = record.posts.filter(Boolean).length;

      return `
        <article class="history-card">
          <div class="history-top">
            <div>
              <h3>${safeName}</h3>
              <time datetime="${record.createdAt}">${date.toLocaleString("zh-CN")}</time>
            </div>
            <button class="button small copy-history" type="button" data-id="${record.id}">复制 Prompt</button>
          </div>
          <p>${safeSignature}</p>
          <ul class="history-meta">
            <li>${filledPosts}/3 条文案</li>
            <li>本地保存</li>
            <li>无 API 调用</li>
          </ul>
        </article>
      `;
    })
    .join("");
}

async function copyText(text) {
  if (!text || text.startsWith("填写左侧信息")) {
    showToast("请先生成 Prompt");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    showToast("Prompt 已复制");
  } catch (error) {
    console.warn("剪贴板复制失败，尝试降级方案。", error);
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showToast("Prompt 已复制");
  }
}

function collectFormData() {
  return {
    nickname: nicknameInput.value.trim(),
    signature: signatureInput.value.trim(),
    posts: postInputs.map((input) => input.value.trim()),
  };
}

function addHistory(record) {
  const records = getHistory();
  const nextRecords = [record, ...records].slice(0, 20);
  saveHistory(nextRecords);
  renderHistory();
}

function handleSubmit(event) {
  event.preventDefault();
  const data = collectFormData();
  const hasMeaningfulInput = data.nickname || data.signature || data.posts.some(Boolean);

  if (!hasMeaningfulInput) {
    showToast("请至少填写一项公开线索");
    return;
  }

  const prompt = buildPrompt(data);
  const record = {
    id: window.crypto?.randomUUID ? window.crypto.randomUUID() : String(Date.now()),
    ...data,
    prompt,
    avatarDataUrl,
    createdAt: new Date().toISOString(),
  };

  promptOutput.textContent = prompt;
  addHistory(record);
  showToast("Prompt 已生成并保存到本地历史");
}

function handleReset() {
  avatarDataUrl = "";
  avatarPreview.innerHTML = "+";
  promptOutput.textContent = "填写左侧信息后，系统会在这里生成一段结构化 Prompt。";
}

function handleAvatarChange() {
  const file = avatarInput.files?.[0];

  if (!file) {
    avatarDataUrl = "";
    avatarPreview.innerHTML = "+";
    return;
  }

  if (!file.type.startsWith("image/")) {
    showToast("请选择图片文件");
    avatarInput.value = "";
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    avatarDataUrl = String(reader.result || "");
    avatarPreview.innerHTML = `<img src="${avatarDataUrl}" alt="头像预览">`;
  });
  reader.readAsDataURL(file);
}

function updateActiveNav() {
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  let current = sections[0];

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 120) {
      current = section;
    }
  }

  navLinks.forEach((link) => {
    link.classList.toggle("active", current && link.getAttribute("href") === `#${current.id}`);
  });
}

form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", () => {
  setTimeout(handleReset, 0);
});

avatarInput.addEventListener("change", handleAvatarChange);

copyPromptBtn.addEventListener("click", () => {
  copyText(promptOutput.textContent);
});

historyList.addEventListener("click", (event) => {
  const button = event.target.closest(".copy-history");
  if (!button) return;

  const record = getHistory().find((item) => item.id === button.dataset.id);
  if (record) {
    copyText(record.prompt);
  }
});

clearHistoryBtn.addEventListener("click", () => {
  if (!getHistory().length) {
    showToast("当前没有历史记录");
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  renderHistory();
  showToast("历史记录已清空");
});

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
