const SENSITIVE_PATTERNS = [
  { label: "政治倾向", pattern: /政治|党派|立场|意识形态|投票|支持哪个党|反政府/i },
  { label: "宗教信仰", pattern: /宗教|信仰|佛教|基督|伊斯兰|穆斯林|天主教|无神论/i },
  { label: "健康或心理诊断", pattern: /抑郁|焦虑症|精神病|人格障碍|诊断|健康状况|病史|心理疾病/i },
  { label: "性取向或亲密身份", pattern: /性取向|同性恋|异性恋|双性恋|LGBT|跨性别/i },
  { label: "犯罪倾向", pattern: /犯罪|违法|会不会犯法|暴力倾向|危险分子|吸毒|诈骗/i },
  { label: "收入或资产", pattern: /收入|工资|资产|有钱|贫穷|负债|消费能力|身家/i },
  { label: "人品道德定性", pattern: /人品|道德|坏人|渣男|渣女|忠诚|背叛|是否靠谱|是不是好人/i },
  { label: "招聘录用判断", pattern: /适合录用|能不能招聘|是否录用|岗位胜任|工作能力|绩效/i },
  { label: "敏感身份推断", pattern: /民族|种族|国籍|户籍|身份证|家庭出身/i },
];

function joinInputText(input = {}) {
  return [
    input.nickname,
    input.signature,
    Array.isArray(input.posts) ? input.posts.join("\n") : "",
    input.scenario,
    input.question,
  ].filter(Boolean).join("\n");
}

function checkSensitiveRequest(input) {
  const text = joinInputText(input);
  const matched = SENSITIVE_PATTERNS.find((item) => item.pattern.test(text));
  if (!matched) return { ok: true };

  return {
    ok: false,
    category: matched.label,
    message: `这个问题涉及${matched.label}等敏感判断。PersonaScope 只能基于公开线索提供沟通风格参考，不能推断或评判敏感属性、健康诊断、人品道德、收入、犯罪倾向或招聘录用结论。`,
  };
}

module.exports = {
  checkSensitiveRequest,
};
