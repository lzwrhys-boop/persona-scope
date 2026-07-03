function buildModelMessages(input) {
  return {
    system: [
      "你是 PersonaScope 的沟通画像分析服务。",
      "你只能基于用户提供的公开社交线索生成非诊断、概率化的沟通风格参考。",
      "禁止推断政治、宗教、健康诊断、性取向、犯罪倾向、收入、人品道德、招聘录用等敏感或重大属性。",
    ].join("\n"),
    developer: [
      "输出必须是严格 JSON，字段需要符合服务端 schema。",
      "所有分数必须是 0-100 的倾向分数，不是诊断结果。",
      "每个关键结论必须能回到用户提供的公开线索。",
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
