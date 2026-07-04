const REPORT_JSON_TEMPLATE = {
  basicProfile: {
    oneSentence: "一句话画像，非空字符串",
    personaSummary: "画像摘要，非空字符串",
    confidence: "高/中/低",
    confidenceReason: "置信度原因，非空字符串",
  },
  scores: {
    "表达温度": 0,
    "边界清晰度": 0,
    "自我暴露程度": 0,
    "沟通开放度": 0,
    "关系导向": 0,
  },
  bigFive: {
    "开放性倾向": 0,
    "尽责性倾向": 0,
    "外向性倾向": 0,
    "宜人性倾向": 0,
    "情绪稳定性倾向": 0,
  },
  personaTags: ["至少 1 条字符串"],
  avatarVisualCues: ["至少 1 条字符串"],
  communicationAdvice: ["至少 1 条字符串"],
  riskPoints: ["至少 1 条字符串"],
  approachStyle: ["至少 1 条字符串"],
  evidenceChain: [
    {
      conclusion: "结论，非空字符串",
      evidence: "证据，非空字符串",
      source: "来源，非空字符串",
    },
  ],
  disclaimer: "非空免责声明字符串",
};

function buildModelMessages(input, options = {}) {
  const repairErrors = Array.isArray(options.repairErrors) ? options.repairErrors : [];
  return {
    system: [
      "你是 PersonaScope 的沟通画像分析服务。",
      "你只能基于用户提供的公开社交线索生成非诊断、概率化的沟通风格参考。",
      "禁止推断政治、宗教、健康诊断、性取向、犯罪倾向、收入、人品道德、招聘录用等敏感或重大属性。",
      "你只能返回一个合法 JSON 对象。不要返回 Markdown。不要返回 ```json 代码块。不要返回解释文字。",
    ].join("\n"),
    developer: [
      "输出必须是严格 JSON，字段必须完整符合下面的 JSON 模板。",
      "必须包含 basicProfile、scores、bigFive、personaTags、avatarVisualCues、communicationAdvice、riskPoints、approachStyle、evidenceChain、disclaimer。",
      "basicProfile 必须包含 oneSentence、personaSummary、confidence、confidenceReason，且 confidence 只能是 高/中/低。",
      "scores 必须包含：表达温度、边界清晰度、自我暴露程度、沟通开放度、关系导向。",
      "bigFive 必须包含：开放性倾向、尽责性倾向、外向性倾向、宜人性倾向、情绪稳定性倾向。",
      "scores 和 bigFive 的所有分数必须是 0-100 的数字，不要加百分号，不要用字符串。",
      "personaTags、avatarVisualCues、communicationAdvice、riskPoints、approachStyle 必须是字符串数组，每个数组至少 1 条。",
      "evidenceChain 必须是数组，至少 1 条，每条必须包含 conclusion、evidence、source。",
      "disclaimer 必须是非空字符串。",
      "每个关键结论必须能回到用户提供的公开线索。",
      "JSON 模板如下：",
      JSON.stringify(REPORT_JSON_TEMPLATE, null, 2),
      repairErrors.length ? `上一次输出未通过校验，请修复这些问题：${repairErrors.join("；")}` : "",
    ].join("\n"),
    user: {
      nickname: input.nickname || "",
      signature: input.signature || "",
      posts: Array.isArray(input.posts) ? input.posts : [],
      scenario: input.scenario || "",
      question: input.question || "",
      hasAvatar: Boolean(input.hasAvatar),
      screenshotCount: Number(input.screenshotCount || 0),
      locale: input.locale || "zh",
    },
  };
}

module.exports = {
  buildModelMessages,
};
