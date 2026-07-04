const REQUIRED_SCORE_KEYS = ["表达温度", "边界清晰度", "自我暴露程度", "沟通开放度", "关系导向"];
const REQUIRED_BIG_FIVE_KEYS = ["开放性倾向", "尽责性倾向", "外向性倾向", "宜人性倾向", "情绪稳定性倾向"];

function isObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isScoreMap(value, keys) {
  if (!isObject(value)) return false;
  return keys.every((key) => Number.isFinite(value[key]) && value[key] >= 0 && value[key] <= 100);
}

function normalizeKey(key) {
  return String(key || "").toLowerCase().replace(/[\s_\-·:：]/g, "");
}

function getFirstValue(source, keys) {
  if (!isObject(source)) return undefined;
  for (const key of keys) {
    if (source[key] !== undefined && source[key] !== null && source[key] !== "") return source[key];
  }
  const entries = Object.entries(source).map(([key, value]) => [normalizeKey(key), value]);
  for (const key of keys) {
    const normalized = normalizeKey(key);
    const entry = entries.find(([entryKey, value]) => entryKey === normalized && value !== undefined && value !== null && value !== "");
    if (entry) return entry[1];
  }
  return undefined;
}

function coerceText(value) {
  if (value === undefined || value === null || value === "") return "";
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return String(value).trim();
  if (Array.isArray(value)) return value.map(coerceText).filter(Boolean).join("；");
  if (isObject(value)) {
    const direct = getFirstValue(value, ["text", "content", "summary", "description", "value", "title"]);
    if (direct !== undefined && direct !== value) return coerceText(direct);
  }
  return "";
}

function clampScore(value) {
  if (isObject(value)) value = getFirstValue(value, ["score", "value", "分数", "得分", "percentage", "percent"]);
  if (typeof value === "string") value = value.replace("%", "").trim();
  const number = Number(value);
  if (!Number.isFinite(number)) return undefined;
  return Math.max(0, Math.min(100, Math.round(number)));
}

function normalizeStringArray(value, fallback) {
  let items = [];
  if (Array.isArray(value)) {
    items = value.map(coerceText).filter(Boolean);
  } else if (typeof value === "string" || typeof value === "number") {
    items = [String(value).trim()].filter(Boolean);
  } else if (isObject(value)) {
    items = Object.values(value).map(coerceText).filter(Boolean);
  }
  return items.length ? items : [fallback];
}

function normalizeScores(source, keys, aliases) {
  if (!isObject(source) && !Array.isArray(source)) return {};
  return keys.reduce((result, key) => {
    let value = getFirstValue(source, aliases[key] || [key]);
    if (value === undefined && Array.isArray(source)) {
      const matched = source.find((item) => {
        const label = coerceText(getFirstValue(item, ["label", "name", "key", "dimension", "维度", "名称"]));
        return (aliases[key] || [key]).some((alias) => normalizeKey(alias) === normalizeKey(label));
      });
      value = getFirstValue(matched, ["score", "value", "分数", "得分"]);
    }
    const score = clampScore(value);
    if (score !== undefined) result[key] = score;
    return result;
  }, {});
}

function normalizeEvidenceChain(value) {
  const fallback = [{ conclusion: "线索有限", evidence: "模型未提供完整证据链。", source: "公开社交线索" }];
  const items = Array.isArray(value) ? value : isObject(value) ? Object.values(value) : [];
  const normalized = items.map((item) => {
    if (typeof item === "string") return { conclusion: item, evidence: "模型未提供具体证据。", source: "公开社交线索" };
    if (!isObject(item)) return null;
    return {
      conclusion: coerceText(getFirstValue(item, ["conclusion", "insight", "finding", "title", "point", "结论"])),
      evidence: coerceText(getFirstValue(item, ["evidence", "reason", "proof", "content", "text", "description", "证据", "依据", "理由"])),
      source: coerceText(getFirstValue(item, ["source", "from", "origin", "来源"])),
    };
  }).filter((item) => item && item.conclusion && item.evidence && item.source);
  return normalized.length ? normalized : fallback;
}

function normalizeReport(data) {
  if (!isObject(data)) return data;
  const basic = getFirstValue(data, ["basicProfile", "profile", "basic_profile", "summaryProfile", "基础画像", "基本画像", "画像摘要"]);
  const basicSource = isObject(basic) ? basic : data;
  const scoresSource = getFirstValue(data, ["scores", "score", "metrics", "profileScores", "communicationStyle", "沟通风格维度", "综合评分", "画像分数"]);
  const bigFiveSource = getFirstValue(data, ["bigFive", "big_five", "big5", "personality", "personalityScores", "bigFiveTendencyReference", "大五人格", "人格倾向"]);
  const scoreAliases = {
    表达温度: ["表达温度", "expressionWarmth", "warmth"],
    边界清晰度: ["边界清晰度", "边界感", "boundary", "boundaryClarity"],
    自我暴露程度: ["自我暴露程度", "selfDisclosure", "self_disclosure", "自我呈现强度"],
    沟通开放度: ["沟通开放度", "communicationOpenness", "opennessCommunication"],
    关系导向: ["关系导向", "relationalOrientation", "relationshipOrientation"],
    开放性倾向: ["开放性倾向", "开放性", "openness"],
    尽责性倾向: ["尽责性倾向", "尽责性", "conscientiousness"],
    外向性倾向: ["外向性倾向", "外向性", "extraversion", "extroversion"],
    宜人性倾向: ["宜人性倾向", "宜人性", "agreeableness"],
    情绪稳定性倾向: ["情绪稳定性倾向", "情绪稳定性", "emotionalStability", "emotional_stability"],
  };

  const confidenceValue = coerceText(getFirstValue(basicSource, ["confidence", "confidenceLevel", "confidence_level", "置信度"]));
  const confidenceMap = { high: "高", medium: "中", mid: "中", low: "低", 高: "高", 中: "中", 低: "低" };

  return {
    ...data,
    basicProfile: {
      oneSentence: coerceText(getFirstValue(basicSource, ["oneSentence", "oneSentenceProfile", "headline", "summary", "一句话画像", "一句话总结"])),
      personaSummary: coerceText(getFirstValue(basicSource, ["personaSummary", "persona_summary", "profileSummary", "description", "summary", "人设总结", "画像总结"])),
      confidence: confidenceMap[normalizeKey(confidenceValue)] || confidenceValue,
      confidenceReason: coerceText(getFirstValue(basicSource, ["confidenceReason", "confidence_reason", "reason", "confidenceExplanation", "置信度说明", "置信度原因"])),
    },
    scores: normalizeScores(scoresSource, REQUIRED_SCORE_KEYS, scoreAliases),
    bigFive: normalizeScores(bigFiveSource, REQUIRED_BIG_FIVE_KEYS, scoreAliases),
    personaTags: normalizeStringArray(getFirstValue(data, ["personaTags", "tags", "persona_tags", "labels", "人设标签", "标签"]), "线索有限"),
    avatarVisualCues: normalizeStringArray(getFirstValue(data, ["avatarVisualCues", "avatar_visual_cues", "visualCues", "avatarCues", "头像视觉线索", "视觉线索"]), "未提供或无法确认头像视觉线索。"),
    communicationAdvice: normalizeStringArray(getFirstValue(data, ["communicationAdvice", "advice", "communication_advice", "suggestions", "沟通建议", "建议"]), "建议以具体、低压、尊重边界的方式沟通。"),
    riskPoints: normalizeStringArray(getFirstValue(data, ["riskPoints", "risks", "risk_points", "redFlags", "相处雷区", "风险点", "雷区"]), "避免基于少量公开线索做绝对判断。"),
    approachStyle: normalizeStringArray(getFirstValue(data, ["approachStyle", "approach", "approach_style", "approaches", "接近方式", "适合接近方式"]), "先从公开内容中的具体细节自然切入。"),
    evidenceChain: normalizeEvidenceChain(getFirstValue(data, ["evidenceChain", "evidence_chain", "evidence", "proofs", "证据链", "依据"])),
    disclaimer: coerceText(getFirstValue(data, ["disclaimer", "免责声明", "使用提醒", "安全声明"])),
  };
}

function validateReport(data) {
  const errors = [];

  if (!isObject(data)) {
    return { ok: false, errors: ["报告数据必须是对象"] };
  }

  if (!isObject(data.basicProfile)) {
    errors.push("缺少 basicProfile 对象");
  } else {
    ["oneSentence", "personaSummary", "confidence", "confidenceReason"].forEach((key) => {
      if (!isString(data.basicProfile[key])) errors.push(`basicProfile.${key} 必须是非空字符串`);
    });
    if (!["高", "中", "低"].includes(data.basicProfile.confidence)) {
      errors.push("basicProfile.confidence 必须是 高/中/低");
    }
  }

  if (!isScoreMap(data.scores, REQUIRED_SCORE_KEYS)) errors.push("scores 缺少必要维度或分数不是 0-100 数字");
  if (!isScoreMap(data.bigFive, REQUIRED_BIG_FIVE_KEYS)) errors.push("bigFive 缺少必要维度或分数不是 0-100 数字");

  ["personaTags", "avatarVisualCues", "communicationAdvice", "riskPoints", "approachStyle"].forEach((key) => {
    if (!isStringArray(data[key])) errors.push(`${key} 必须是字符串数组`);
  });

  if (!Array.isArray(data.evidenceChain)) {
    errors.push("evidenceChain 必须是数组");
  } else {
    data.evidenceChain.forEach((item, index) => {
      if (!isObject(item)) {
        errors.push(`evidenceChain[${index}] 必须是对象`);
        return;
      }
      ["conclusion", "evidence", "source"].forEach((key) => {
        if (!isString(item[key])) errors.push(`evidenceChain[${index}].${key} 必须是非空字符串`);
      });
    });
  }

  if (!isString(data.disclaimer)) errors.push("disclaimer 必须是非空字符串");

  return { ok: errors.length === 0, errors };
}

module.exports = {
  REQUIRED_SCORE_KEYS,
  REQUIRED_BIG_FIVE_KEYS,
  normalizeReport,
  validateReport,
};
