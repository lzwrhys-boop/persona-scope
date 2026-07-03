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
  validateReport,
};
