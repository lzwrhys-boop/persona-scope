const STORAGE_KEY = "personascope.history.v3";
const LANGUAGE_STORAGE_KEY = "personascope.language";
const DISCLAIMER = "本结果仅基于公开社交线索进行概率化沟通画像分析，不作为心理诊断、招聘录用、金融风控、医疗建议或重大决策依据。";
const translations = {
  zh: {
    languageToggleAria: "切换为英文",
    menuToggle: "菜单",
    navHome: "首页",
    navAnalyze: "开始分析",
    navVisual: "可视化报告",
    navSample: "示例报告",
    navTheory: "理论依据",
    navHistory: "历史记录",
    heroEyebrow: "SOCIAL SIGNALS · COMMUNICATION PROFILE",
    heroTitleLine1: "看懂一个人的",
    heroTitleLine2: "社交信号",
    heroDesc: "整理头像、签名与近期社交内容，生成结构化沟通画像，并沉淀为可视化分析报告。",
    heroPrimary: "开始分析",
    heroSecondary: "查看示例报告",
    previewKicker: "预览报告",
    previewTitle: "沟通画像预览",
    previewSummary: "公开表达中呈现出较强的边界意识、选择性暴露与理性沟通倾向。整体更偏向克制型表达风格，在建立信任时重视内容质量与表达分寸。",
    previewTraitsTitle: "核心特征",
    previewTagBoundary: "边界意识",
    previewTagExpression: "表达克制",
    previewTagExposure: "选择性暴露",
    previewTagObserve: "观察型沟通",
    previewDimensionsTitle: "核心维度",
    previewMetricWarmth: "表达温度",
    previewMetricBoundary: "边界清晰度",
    previewMetricOpenness: "沟通开放度",
    previewMetricPresentation: "自我呈现强度",
    previewFrameworkTitle: "分析框架",
    previewFrameworkBigFive: "五大人格模型（Big Five）",
    previewFrameworkLanguage: "语言心理线索",
    previewFrameworkPresentation: "自我呈现理论",
    previewFrameworkSocial: "社交表达线索分析",
    previewFooter: "基于公开社交线索生成，仅作为沟通风格参考，不构成诊断结论。",
    valuePersonaTitle: "外在人设",
    valuePersonaDesc: "识别对方在社交平台上想呈现的形象，区分真实人格与公开表达之间的距离。",
    valuePreferenceTitle: "沟通偏好",
    valuePreferenceDesc: "判断更适合直接沟通、情绪铺垫还是价值共鸣，让开场方式更自然。",
    valueRiskTitle: "相处雷区",
    valueRiskDesc: "提示容易引发防御、反感或误解的表达方式，减少沟通中的无效试探。",
    workflowEyebrow: "HOW IT WORKS",
    workflowTitle: "四步生成沟通画像",
    workflowStep1Label: "步骤 1",
    workflowStep1Title: "上传社交线索",
    workflowStep2Label: "步骤 2",
    workflowStep2Title: "选择分析框架",
    workflowStep3Label: "步骤 3",
    workflowStep3Title: "AI 生成画像",
    workflowStep4Label: "步骤 4",
    workflowStep4Title: "查看可视化报告",
    homeCompliance: "本工具仅基于公开社交线索进行概率化沟通画像分析，不作为心理诊断、招聘录用、金融风控、医疗建议或重大决策依据。",
    analyzeEyebrow: "START ANALYSIS",
    analyzeTitle: "开始分析",
    analyzeDesc: "上传或输入最近三条社交内容。你可以手动粘贴文案，也可以上传朋友圈、小红书、微博、LinkedIn 等社交媒体截图。图文结合会让分析更准确。",
    betterInputEyebrow: "BETTER INPUT",
    betterInputTitle: "为了获得更准确的画像，建议同时提供：",
    betterInputAvatar: "头像",
    betterInputBio: "个性签名",
    betterInputPosts: "最近三条文案",
    betterInputScreenshots: "朋友圈或社交媒体截图",
    nicknameLabel: "分析对象昵称",
    optionalLabel: "可选",
    optionalQuestionLabel: "选填",
    nicknamePlaceholder: "例如：某位朋友 / 客户 A / 自我画像",
    avatarLabel: "头像资料",
    removeAvatar: "删除当前头像",
    avatarUploadTitle: "点击或拖拽上传头像",
    avatarUploadDesc: "支持 jpg、jpeg、png、webp；仅在本地浏览器预览，可重新上传",
    signatureLabel: "个性签名",
    signaturePlaceholder: "输入公开可见的个性签名、简介或主页文案",
    post1Label: "社交文案 1",
    post1Placeholder: "如果你上传的是截图，也建议补充截图中的关键文字，方便生成更准确的沟通画像。",
    post2Label: "社交文案 2",
    post2Placeholder: "补充第二条社交文案或截图中的关键文字",
    post3Label: "社交文案 3",
    post3Placeholder: "补充第三条社交文案或截图中的关键文字",
    screenshotLabel: "朋友圈 / 社交截图",
    screenshotCount: "已上传 {count} / 6 张",
    screenshotUploadTitle: "点击或拖拽上传社交截图",
    screenshotUploadDesc: "最多 6 张；支持朋友圈、小红书、微博、LinkedIn 等截图；图片不会上传服务器",
    scenarioLabel: "分析场景",
    scenarioDating: "恋爱了解",
    scenarioClient: "客户沟通",
    scenarioWork: "同事协作",
    scenarioFriend: "朋友相处",
    scenarioSelf: "自我画像",
    questionLabel: "我最想知道的问题",
    questionPlaceholder: "例如：我该如何自然地开启话题？合作时需要注意什么？",
    generatePromptBtn: "开始 AI 分析",
    resetBtn: "清空当前内容",
    generatedPromptEyebrow: "DEBUG MODE",
    generatedPromptTitle: "开发者调试 Prompt",
    promptStatusEmpty: "填写左侧信息后开始分析；调试 Prompt 会在这里备用。",
    promptStatusReady: "分析已完成。调试 Prompt 已同步生成，可作为无 API 备用方案。",
    promptUsageNote: "当前为静态原型，主流程会先生成本地 mock 报告；下方 Prompt 仅作为无 API 备用调试材料。",
    promptOutputEmpty: "开始分析后，系统会在这里生成一段开发者调试 Prompt。",
    copyPromptBtn: "复制调试 Prompt",
    privacyInline: "当前网站不会读取或上传你的图片，所有图片仅在本地浏览器预览。",
    saveHistoryBtn: "保存到历史记录",
    visualEyebrow: "VISUAL REPORT",
    visualTitle: "可视化报告",
    visualDesc: "分析完成后，系统将在这里生成可视化沟通画像报告。",
    jsonPasteLabel: "手动导入报告数据",
    jsonHelper: "开发者调试模式：可导入结构化报告 JSON，系统会尽量自动识别兼容字段。",
    jsonPlaceholder: "可导入完整报告 JSON，例如包含 basicProfile、scores、bigFive、personaTags、communicationAdvice、riskPoints、approachStyle、evidenceChain、disclaimer 等字段。",
    renderReportBtn: "导入报告数据",
    fillExampleJsonBtn: "生成示例报告",
    clearJsonBtn: "清空内容",
    localDashboardEyebrow: "LOCAL DASHBOARD",
    localDashboardTitle: "API-ready 分析流程",
    localDashboardStep1: "上传头像、签名、文案与社交截图。",
    localDashboardStep2: "点击开始 AI 分析。",
    localDashboardStep3: "当前版本先使用本地 mock 数据生成报告。",
    localDashboardStep4: "未来可替换为安全 API 服务自动返回报告数据。",
    localDashboardPrivacy: "当前为静态原型，后续可接入安全 API 服务；报告记录仅保存在当前浏览器 localStorage。",
    waitingJsonEyebrow: "WAITING FOR REPORT",
    waitingJsonTitle: "等待生成可视化报告",
    waitingJsonDesc: "分析完成后，系统将在这里生成可视化沟通画像报告。也可以使用开发者调试模式手动导入报告数据。",
    chartBarTitle: "综合画像柱状图",
    chartRadarTitle: "Big Five 雷达图",
    tagCloudTitle: "人设标签云",
    communicationAdviceTitle: "沟通建议",
    riskPointsTitle: "相处雷区",
    approachStyleTitle: "适合接近方式",
    evidenceChainTitle: "证据链",
    confidenceLabel: "置信度",
    disclaimerTitle: "免责声明",
    emptyTags: "暂无标签",
    emptyAdvice: "暂无沟通建议",
    emptyRisks: "暂无相处雷区",
    emptyApproach: "暂无接近方式",
    emptyEvidenceTitle: "暂无证据链",
    emptyEvidenceDesc: "请检查 JSON 是否包含 evidenceChain。",
    emptySource: "未提供",
    emptyConclusion: "未提供结论",
    emptyEvidence: "未提供证据",
    sampleEyebrow: "SAMPLE REPORT",
    sampleTitle: "《PersonaScope 示例报告：公开社交线索沟通画像》",
    sampleDesc: "以下样例展示报告的结构与表达方式。当前静态原型会使用本地示例数据模拟分析结果。",
    sampleCard1Title: "一句话画像",
    sampleCard1Desc: "该对象更像是一个重视表达质感、强调自我节奏，同时希望被理解为独立而有审美判断的人。沟通时适合先建立共同语境，再进入具体话题。",
    sampleCard2Title: "外在人设判断",
    sampleCard2Desc: "头像与签名共同传递出“克制、清醒、有边界”的公开形象。对方可能不希望被过度热情地靠近，更愿意通过内容质量建立信任。",
    sampleCard3Title: "性格倾向推测",
    sampleCard3Desc: "从大五人格角度看，开放性可能偏中高，尽责性中等偏高，外向性不宜过度判断。该推测来自文案中的审美表达、计划感和有限自我暴露。",
    sampleCard4Title: "情绪表达方式",
    sampleCard4Desc: "情绪表达偏间接，常通过隐喻、自嘲或场景描述释放压力。与其直接追问“你怎么了”，不如用低压方式邀请对方补充。",
    sampleCard5Title: "沟通偏好",
    sampleCard5Desc: "更适合具体、真诚、可选择的沟通方式。对方可能更容易回应有观察、有边界、有信息量的开场，而不是泛泛寒暄。",
    sampleCard6Title: "相处雷区",
    sampleCard6Desc: "避免过快推进关系、连续追问隐私、用标签概括对方，或把公开动态当作对方完整人格的证据。",
    sampleCard7Title: "适合的接近方式",
    sampleCard7Desc: "可以从对方公开表达中的具体主题切入：“你最近提到的那个观点挺有意思，我很好奇你为什么会这样看。”",
    sampleCard8Title: "证据链",
    sampleCard8Desc: "证据来自头像风格、个性签名中的边界表达、第 1 条文案的目标感、第 2 条文案的情绪隐喻，以及第 3 条文案的自我调侃。",
    sampleCard9Title: "置信度",
    sampleCard9Desc: "中。原因是线索覆盖头像、签名与三条文本，但仍然属于公开自我呈现，无法代表完整人格与真实关系状态。",
    sampleCard10Title: "使用提醒",
    sampleCard10Desc: "报告只用于辅助理解和改善沟通，不应作为诊断、筛选、控制或重大决策依据。真实关系仍需要通过持续互动验证。",
    theoryEyebrow: "FRAMEWORK",
    theoryTitle: "理论依据",
    theoryDesc: "PersonaScope 不做诊断，只做辅助理解和沟通建议。它把公开线索整理为可讨论、可复核、概率化的分析框架。",
    theoryBigFiveTitle: "Big Five 大五人格",
    theoryBigFiveDesc: "用于描述开放性、尽责性、外向性、宜人性、情绪稳定性等人格倾向。PersonaScope 只使用它作为沟通倾向参考，不把任何结果当作人格定论。",
    theoryLanguageTitle: "语言心理学",
    theoryLanguageDesc: "语言中的情绪词、自我指代、关系词、行动词，可以反映表达方式、关系需求、控制感和自我关注程度。结论必须回到具体文本证据。",
    theorySocialTitle: "社交媒体自我呈现",
    theorySocialDesc: "头像、签名和动态不是完整人格，而是一个人想让外界看到的形象。公开表达更适合分析“呈现策略”，而不是判断真实本质。",
    theoryAvatarTitle: "头像视觉线索",
    theoryAvatarDesc: "头像只作为辅助线索，例如风格、距离感、色彩和场景氛围，不能单独判断一个人，更不能推断敏感属性或重大风险。",
    principleTitle: "边界原则",
    principleDesc: "PersonaScope 不做心理诊断、不判断敏感属性、不替代真实沟通，只帮助你把公开线索转化为更谨慎的沟通假设。",
    historyEyebrow: "LOCAL HISTORY",
    historyTitle: "历史记录",
    historyDesc: "最近生成并手动保存的记录会保存在当前浏览器 localStorage 中。",
    clearHistoryBtn: "清空全部记录",
    noHistoryEyebrow: "NO HISTORY",
    noHistoryTitle: "还没有保存任何记录",
    noHistoryDesc: "开始 AI 分析或生成可视化报告后，会在这里看到最近记录。",
    goAnalyzeBtn: "去开始分析",
    promptRecord: "调试 Prompt 记录",
    reportRecord: "可视化报告记录",
    unnamedObject: "未命名对象",
    unnamedReport: "未命名报告",
    unsetScenario: "未设置场景",
    emptyField: "未填写",
    postSummary: "文案摘要",
    uploadedAvatar: "已上传头像",
    yes: "是",
    no: "否",
    screenshotMeta: "社交截图",
    imageCountUnit: "张",
    viewPrompt: "查看调试 Prompt",
    collapsePrompt: "收起调试 Prompt",
    copyPrompt: "复制调试 Prompt",
    deleteRecord: "删除记录",
    viewReport: "查看报告",
    copyJson: "复制 JSON",
    totalScore: "综合分",
    bigFiveLabel: "Big Five",
    footerCompliance: "本工具仅基于公开社交线索进行概率化沟通画像分析，不作为心理诊断、招聘录用、金融风控、医疗建议或重大决策依据。"
  },
  en: {
    languageToggleAria: "Switch to Chinese",
    menuToggle: "Menu",
    navHome: "Home",
    navAnalyze: "Analyze",
    navVisual: "Visual Report",
    navSample: "Sample Report",
    navTheory: "Framework",
    navHistory: "History",
    heroEyebrow: "SOCIAL SIGNALS · COMMUNICATION PROFILE",
    heroTitleLine1: "Decode a Person’s",
    heroTitleLine2: "Social Signals",
    heroDesc: "Organize avatars, bios, and recent social posts into a structured communication profile and visual analysis report.",
    heroPrimary: "Start Analysis",
    heroSecondary: "View Sample Report",
    previewKicker: "PREVIEW REPORT",
    previewTitle: "Communication Profile Preview",
    previewSummary: "Public expressions suggest strong boundary awareness, selective disclosure, and rational communication tendencies, with trust built through quality and restraint.",
    previewTraitsTitle: "Key Traits",
    previewTagBoundary: "Boundary-Aware",
    previewTagExpression: "Controlled Expression",
    previewTagExposure: "Selective Exposure",
    previewTagObserve: "Observational Style",
    previewDimensionsTitle: "Core Dimensions",
    previewMetricWarmth: "Expression Warmth",
    previewMetricBoundary: "Boundary Clarity",
    previewMetricOpenness: "Communication Openness",
    previewMetricPresentation: "Self-Presentation Strength",
    previewFrameworkTitle: "Analysis Framework",
    previewFrameworkBigFive: "Big Five Model",
    previewFrameworkLanguage: "Linguistic Cues",
    previewFrameworkPresentation: "Self-Presentation",
    previewFrameworkSocial: "Social Expression Signals",
    previewFooter: "Generated from public social signals as a communication-style reference, not a diagnostic conclusion.",
    valuePersonaTitle: "Public Persona",
    valuePersonaDesc: "Identify the image someone presents in public social spaces and separate that presentation from the whole person.",
    valuePreferenceTitle: "Communication Preference",
    valuePreferenceDesc: "Estimate whether direct context, emotional pacing, or shared values will make the opening feel more natural.",
    valueRiskTitle: "Interaction Risks",
    valueRiskDesc: "Spot expressions that may trigger defensiveness, discomfort, or misunderstanding before the conversation drifts.",
    workflowEyebrow: "HOW IT WORKS",
    workflowTitle: "Build a Communication Profile in 4 Steps",
    workflowStep1Label: "Step 1",
    workflowStep1Title: "Upload Social Signals",
    workflowStep2Label: "Step 2",
    workflowStep2Title: "Select Frameworks",
    workflowStep3Label: "Step 3",
    workflowStep3Title: "Generate Profile",
    workflowStep4Label: "Step 4",
    workflowStep4Title: "View Visual Report",
    homeCompliance: "This tool only turns public social clues into probabilistic communication hypotheses. It is not psychological diagnosis, hiring advice, financial risk assessment, medical advice, or a basis for major decisions.",
    analyzeEyebrow: "START ANALYSIS",
    analyzeTitle: "Analyze",
    analyzeDesc: "Upload or enter three recent social posts. You can paste text manually or upload screenshots from Moments, Xiaohongshu, Weibo, LinkedIn, and similar platforms.",
    betterInputEyebrow: "BETTER INPUT",
    betterInputTitle: "For a more accurate profile, provide:",
    betterInputAvatar: "Avatar",
    betterInputBio: "Personal bio",
    betterInputPosts: "Three recent posts",
    betterInputScreenshots: "Social media screenshots",
    nicknameLabel: "Profile nickname",
    optionalLabel: "Optional",
    optionalQuestionLabel: "Optional",
    nicknamePlaceholder: "Example: a friend / client A / self profile",
    avatarLabel: "Avatar",
    removeAvatar: "Remove avatar",
    avatarUploadTitle: "Click or drag to upload avatar",
    avatarUploadDesc: "Supports jpg, jpeg, png, webp. Preview stays in your browser.",
    signatureLabel: "Personal Bio",
    signaturePlaceholder: "Enter a public bio, signature, or profile intro",
    post1Label: "Social Post 1",
    post1Placeholder: "If you upload screenshots, also paste key text to make the communication profile more accurate.",
    post2Label: "Social Post 2",
    post2Placeholder: "Add the second social post or key screenshot text",
    post3Label: "Social Post 3",
    post3Placeholder: "Add the third social post or key screenshot text",
    screenshotLabel: "Social Screenshots",
    screenshotCount: "{count} / 6 uploaded",
    screenshotUploadTitle: "Click or drag to upload social screenshots",
    screenshotUploadDesc: "Up to 6 images. Screenshots stay local and are never uploaded.",
    scenarioLabel: "Scenario",
    scenarioDating: "Dating",
    scenarioClient: "Client Communication",
    scenarioWork: "Work Collaboration",
    scenarioFriend: "Friendship",
    scenarioSelf: "Self Profile",
    questionLabel: "Main question",
    questionPlaceholder: "Example: How can I start a conversation naturally? What should I watch for when working together?",
    generatePromptBtn: "Start AI Analysis",
    resetBtn: "Clear Current Input",
    generatedPromptEyebrow: "DEBUG MODE",
    generatedPromptTitle: "Developer Debug Prompt",
    promptStatusEmpty: "Start analysis after filling the form. A debug prompt will remain here as a fallback.",
    promptStatusReady: "Analysis complete. A debug prompt was also generated as a no-API fallback.",
    promptUsageNote: "This static prototype currently generates a local mock report. The prompt below is only a fallback for developer debugging.",
    promptOutputEmpty: "After analysis starts, a developer debug prompt will appear here.",
    copyPromptBtn: "Copy Debug Prompt",
    privacyInline: "This site does not read or upload your images. Image previews stay in your browser.",
    saveHistoryBtn: "Save to History",
    visualEyebrow: "VISUAL REPORT",
    visualTitle: "Visual Report",
    visualDesc: "Once analysis is complete, the system will generate a visual communication profile report here.",
    jsonPasteLabel: "Import Report Data Manually",
    jsonHelper: "Developer debug mode: import structured report JSON and the system will try to recognize compatible fields.",
    jsonPlaceholder: "Import complete report JSON, such as fields including basicProfile, scores, bigFive, personaTags, communicationAdvice, riskPoints, approachStyle, evidenceChain, and disclaimer.",
    renderReportBtn: "Import Report Data",
    fillExampleJsonBtn: "Generate Sample Report",
    clearJsonBtn: "Clear Content",
    localDashboardEyebrow: "LOCAL DASHBOARD",
    localDashboardTitle: "API-ready Analysis Flow",
    localDashboardStep1: "Upload avatar, bio, posts, and social screenshots.",
    localDashboardStep2: "Click Start AI Analysis.",
    localDashboardStep3: "The current version generates a local mock report first.",
    localDashboardStep4: "A secure API service can replace the mock data later.",
    localDashboardPrivacy: "This is a static prototype that can later connect to a secure API service. Report records stay in localStorage.",
    waitingJsonEyebrow: "WAITING FOR REPORT",
    waitingJsonTitle: "Waiting for Visual Report",
    waitingJsonDesc: "Once analysis is complete, the system will generate a visual communication profile report here. Developer debug mode can also import report data manually.",
    chartBarTitle: "Profile Score Bar Chart",
    chartRadarTitle: "Big Five Radar Chart",
    tagCloudTitle: "Persona Tag Cloud",
    communicationAdviceTitle: "Communication Advice",
    riskPointsTitle: "Interaction Risks",
    approachStyleTitle: "Best Approach Style",
    evidenceChainTitle: "Evidence Chain",
    confidenceLabel: "Confidence",
    disclaimerTitle: "Disclaimer",
    emptyTags: "No tags yet",
    emptyAdvice: "No communication advice yet",
    emptyRisks: "No interaction risks yet",
    emptyApproach: "No approach style yet",
    emptyEvidenceTitle: "No evidence chain yet",
    emptyEvidenceDesc: "Check whether the JSON includes evidenceChain.",
    emptySource: "No source",
    emptyConclusion: "No conclusion",
    emptyEvidence: "No evidence",
    sampleEyebrow: "SAMPLE REPORT",
    sampleTitle: "PersonaScope Sample Report: Public Social Clue Communication Profile",
    sampleDesc: "This sample shows the structure and writing style of a report. The current static prototype simulates analysis with local sample data.",
    sampleCard1Title: "One-Sentence Profile",
    sampleCard1Desc: "This person appears to value expressive quality, personal rhythm, and being understood as independent with aesthetic judgment.",
    sampleCard2Title: "Public Persona",
    sampleCard2Desc: "The avatar and bio suggest a restrained, clear, and boundary-aware public image.",
    sampleCard3Title: "Personality Tendency",
    sampleCard3Desc: "From a Big Five lens, openness may be medium-high, conscientiousness medium-high, and extraversion should not be overread.",
    sampleCard4Title: "Emotional Expression",
    sampleCard4Desc: "Emotions are expressed indirectly through metaphor, self-deprecation, or scene descriptions.",
    sampleCard5Title: "Communication Preference",
    sampleCard5Desc: "Specific, sincere, and optional communication is more suitable than generic small talk.",
    sampleCard6Title: "Interaction Risks",
    sampleCard6Desc: "Avoid rushing intimacy, repeatedly probing privacy, labeling the person, or treating public posts as the whole personality.",
    sampleCard7Title: "Best Approach",
    sampleCard7Desc: "Start from a specific public topic: \"That point you mentioned recently was interesting. I'm curious how you came to see it that way.\"",
    sampleCard8Title: "Evidence Chain",
    sampleCard8Desc: "Evidence comes from avatar style, boundary language in the bio, goal orientation in post 1, emotional metaphor in post 2, and self-deprecation in post 3.",
    sampleCard9Title: "Confidence",
    sampleCard9Desc: "Medium. The sample covers avatar, bio, and three posts, but still reflects public self-presentation rather than the whole person.",
    sampleCard10Title: "Usage Reminder",
    sampleCard10Desc: "Use the report only to improve understanding and communication. It should not be used for diagnosis, screening, control, or major decisions.",
    theoryEyebrow: "FRAMEWORK",
    theoryTitle: "Framework",
    theoryDesc: "PersonaScope is not diagnostic. It organizes public clues into reviewable, probabilistic communication hypotheses.",
    theoryBigFiveTitle: "Big Five Personality Model",
    theoryBigFiveDesc: "Used to describe openness, conscientiousness, extraversion, agreeableness, and emotional stability as communication references.",
    theoryLanguageTitle: "Language Psychology",
    theoryLanguageDesc: "Emotion words, self-references, relationship words, and action words can reveal expression style, relational needs, and attention patterns.",
    theorySocialTitle: "Social Media Self-Presentation",
    theorySocialDesc: "Avatars, bios, and posts are not the whole person. They are public presentation strategies.",
    theoryAvatarTitle: "Avatar Visual Cues",
    theoryAvatarDesc: "Avatar style, distance, color, and scene mood can be auxiliary clues, but cannot support sensitive or absolute judgments.",
    principleTitle: "Boundary Principle",
    principleDesc: "PersonaScope does not diagnose, infer sensitive attributes, or replace real communication. It helps turn public clues into cautious hypotheses.",
    historyEyebrow: "LOCAL HISTORY",
    historyTitle: "History",
    historyDesc: "Recently generated and manually saved records are stored in this browser's localStorage.",
    clearHistoryBtn: "Clear All Records",
    noHistoryEyebrow: "NO HISTORY",
    noHistoryTitle: "No History Yet",
    noHistoryDesc: "After starting AI analysis or generating a visual report, recent records will appear here.",
    goAnalyzeBtn: "Start Analysis",
    promptRecord: "Debug Prompt Record",
    reportRecord: "Visual Report Record",
    unnamedObject: "Unnamed Profile",
    unnamedReport: "Untitled Report",
    unsetScenario: "No scenario set",
    emptyField: "Not filled",
    postSummary: "Post summary",
    uploadedAvatar: "Avatar uploaded",
    yes: "Yes",
    no: "No",
    screenshotMeta: "Screenshots",
    imageCountUnit: "images",
    viewPrompt: "View Debug Prompt",
    collapsePrompt: "Collapse Debug Prompt",
    copyPrompt: "Copy Debug Prompt",
    deleteRecord: "Delete",
    viewReport: "View Report",
    copyJson: "Copy JSON",
    totalScore: "Overall scores",
    bigFiveLabel: "Big Five",
    footerCompliance: "This tool only turns public social clues into probabilistic communication hypotheses. It is not psychological diagnosis, hiring advice, financial risk assessment, medical advice, or a basis for major decisions."
  }
};

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
const languageToggle = document.querySelector("#languageToggle");
const unicornBackground = document.querySelector("#unicornBackground");
const unicornScene = document.querySelector("#unicornScene");

const UNICORN_PROJECT_ID = "Yj3EFGnjZ1bEOuWjo6Ad";
const UNICORN_SDK_URL = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.11/dist/unicornStudio.umd.js";
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
let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) === "en" ? "en" : "zh";
let renderedReportData = null;

function t(key, replacements = {}) {
  const value = translations[currentLanguage]?.[key] ?? translations.zh[key] ?? key;
  return Object.entries(replacements).reduce((text, [name, replacement]) => text.replaceAll(`{${name}}`, replacement), value);
}

function getReportEmptyStateHtml() {
  return `
    <div class="empty-state">
      <p class="eyebrow" data-i18n="waitingJsonEyebrow">${t("waitingJsonEyebrow")}</p>
      <h3 data-i18n="waitingJsonTitle">${t("waitingJsonTitle")}</h3>
      <p data-i18n="waitingJsonDesc">${t("waitingJsonDesc")}</p>
    </div>
  `;
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage === "en" ? "en" : "zh-CN";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
  if (languageToggle) {
    languageToggle.dataset.currentLanguage = currentLanguage;
    languageToggle.setAttribute("aria-label", t("languageToggleAria"));
    languageToggle.setAttribute("aria-pressed", currentLanguage === "en" ? "true" : "false");
  }
  updateGeneratedState(generatedPrompt, generatedRecordDraft);
  renderScreenshotGrid();
  if (renderedReportData) {
    renderVisualReport(renderedReportData);
  } else {
    visualReportOutput.innerHTML = getReportEmptyStateHtml();
  }
  renderHistory();
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "zh" ? "en" : "zh";
  localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
  applyLanguage();
}

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
  const text = value || t("emptyField");
  return text.length > length ? `${text.slice(0, length)}...` : text;
}

function getSelectedScenario() {
  const selected = document.querySelector('input[name="scenario"]:checked');
  return selected ? selected.value : "恋爱了解";
}

function isSupportedImage(file) {
  return ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(file.type);
}

function collectAnalysisInput() {
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

function collectFormData() {
  return collectAnalysisInput();
}

function hasMeaningfulInput(data) {
  return Boolean(data.nickname || data.signature || data.posts.some(Boolean) || data.question || data.hasAvatar || data.screenshotCount);
}

function buildAnalysisPayload(input) {
  return {
    version: "personascope.api-ready.v1",
    locale: currentLanguage,
    input,
    frameworks: ["bigFive", "languagePsychology", "selfPresentation", "socialSignalAnalysis"],
    outputFormat: "visualReportJson",
    debugPrompt: buildPrompt(input),
  };
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
- 调试说明：本 Prompt 仅作为开发者调试或无 API 备用方案。当前静态原型不会上传图片，也不做 OCR。

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

function mockAnalysis(payload) {
  const reportData = JSON.parse(JSON.stringify(SAMPLE_REPORT_DATA));
  const input = payload.input || {};
  const displayName = input.nickname || translations.zh.unnamedObject;
  const filledPosts = (input.posts || []).filter(Boolean).length;
  const hasVisualClues = input.hasAvatar || input.screenshotCount > 0;

  reportData.basicProfile.oneSentence = `${displayName}呈现出审美敏感、边界清晰、重视表达质量的公开社交形象。`;
  reportData.basicProfile.personaSummary = `基于${input.scenario || "当前场景"}中的公开线索，TA 的表达更偏克制和有选择地暴露自我。当前静态原型使用本地 mock 数据生成报告，未来可替换为安全 API 返回的结构化分析结果。`;
  reportData.basicProfile.confidenceReason = `样例分析参考了${hasVisualClues ? "头像或社交截图、" : ""}个性签名和 ${filledPosts} 条社交文案；由于当前未接入真实模型 API，结果仅用于演示前端报告流程。`;
  reportData.evidenceChain = [
    {
      conclusion: "表达方式偏克制且重视边界",
      evidence: input.signature || "个性签名或简介可作为公开自我呈现线索。",
      source: "个性签名"
    },
    {
      conclusion: "沟通切入适合具体而低压",
      evidence: (input.posts || []).find(Boolean) || "近期文案将作为未来 API 分析的核心文本材料。",
      source: filledPosts ? "社交文案" : "社交线索"
    },
    {
      conclusion: "视觉资料适合作为辅助线索",
      evidence: hasVisualClues ? `已提供头像或 ${input.screenshotCount} 张社交截图。` : "未提供头像或社交截图，当前报告主要依据文本线索。",
      source: "头像/社交截图"
    }
  ];

  return normalizeReportData(reportData);
}

async function runAnalysis(payload) {
  // TODO: Replace mockAnalysis with secure backend API call.
  // Do not expose API keys in frontend code.
  return mockAnalysis(payload);
}

function updateGeneratedState(prompt, recordDraft) {
  generatedPrompt = prompt;
  generatedRecordDraft = recordDraft;
  promptOutput.textContent = prompt || t("promptOutputEmpty");
  copyPromptBtn.disabled = !prompt;
  saveHistoryBtn.disabled = !prompt;
  promptStatus.textContent = prompt ? t("promptStatusReady") : t("promptStatusEmpty");
}

async function handleSubmit(event) {
  event.preventDefault();
  const data = collectAnalysisInput();
  if (!hasMeaningfulInput(data)) {
    showToast("请至少填写一项公开线索");
    return;
  }

  const payload = buildAnalysisPayload(data);
  const prompt = payload.debugPrompt;
  updateGeneratedState(prompt, {
    id: createId(),
    type: "prompt",
    ...data,
    prompt,
    createdAt: new Date().toISOString(),
  });

  try {
    const reportData = await runAnalysis(payload);
    renderVisualReport(reportData);
    saveAnalysisHistory(reportData, JSON.stringify(reportData, null, 2));
    jsonError.textContent = "";
    document.querySelector("#visual-report").scrollIntoView({ behavior: "smooth" });
    showToast("AI 分析已完成，当前使用本地 mock 报告");
  } catch (error) {
    console.warn("分析流程失败。", error);
    showToast("分析失败，请稍后重试");
  }
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
  screenshotCount.textContent = t("screenshotCount", { count: socialScreenshots.length });
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
    showToast("请先开始 AI 分析");
    return;
  }
  const record = { ...generatedRecordDraft, id: createId(), createdAt: new Date().toISOString() };
  saveHistory([record, ...getHistory()].slice(0, 40));
  expandedHistoryId = record.id;
  renderHistory();
  showToast("调试 Prompt 已保存到历史记录");
}

function parseReportJson() {
  const rawInput = jsonInput.value.trim();
  if (!rawInput) throw new Error("请先导入报告 JSON 数据。");
  const rawJson = extractJsonCandidate(rawInput);
  try {
    return { data: JSON.parse(rawJson), rawJson };
  } catch (error) {
    console.warn("JSON 解析失败。", error);
    throw new Error("JSON 格式仍无法解析。请检查是否缺少逗号、引号或括号；也可以点击“生成示例报告”对照格式。");
  }
}

function extractJsonCandidate(rawInput) {
  const trimmedInput = rawInput.trim();
  const fencedMatch = trimmedInput.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const text = (fencedMatch ? fencedMatch[1] : trimmedInput).trim();
  if (text.startsWith("{") && text.endsWith("}")) return text;

  const start = text.indexOf("{");
  if (start === -1) {
    throw new Error("没有检测到 JSON 对象。请导入以 { 开头的 JSON，或直接点击“生成示例报告”查看格式。");
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
  renderedReportData = data;
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
          <span>${t("confidenceLabel")}：${escapeHtml(data.basicProfile.confidence)}</span>
          <p>${escapeHtml(data.basicProfile.confidenceReason)}</p>
        </div>
      </article>

      <article class="dashboard-card glass-card">
        <h3>${t("chartBarTitle")}</h3>
        ${renderBarChart(data.scores)}
      </article>

      <article class="dashboard-card glass-card">
        <h3>${t("chartRadarTitle")}</h3>
        ${renderRadarChart(data.bigFive)}
      </article>

      <article class="dashboard-card glass-card tag-card">
        <h3>${t("tagCloudTitle")}</h3>
        <div class="tag-cloud">
          ${(personaTags.length ? personaTags : [t("emptyTags")]).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        </div>
      </article>

      ${renderListCards(t("communicationAdviceTitle"), communicationAdvice, t("emptyAdvice"))}
      ${renderListCards(t("riskPointsTitle"), riskPoints, t("emptyRisks"))}
      ${renderListCards(t("approachStyleTitle"), approachStyle, t("emptyApproach"))}

      <article class="dashboard-card glass-card evidence-card">
        <h3>${t("evidenceChainTitle")}</h3>
        <div class="evidence-list">
          ${(evidenceChain.length ? evidenceChain : [{ conclusion: t("emptyEvidenceTitle"), evidence: t("emptyEvidenceDesc"), source: t("emptySource") }]).map((item) => `
            <div>
              <strong>${escapeHtml(item.conclusion || t("emptyConclusion"))}</strong>
              <p>${escapeHtml(item.evidence || t("emptyEvidence"))}</p>
              <span>${escapeHtml(item.source || t("emptySource"))}</span>
            </div>
          `).join("")}
        </div>
      </article>

      <article class="dashboard-card glass-card disclaimer-card">
        <h3>${t("disclaimerTitle")}</h3>
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

function saveAnalysisHistory(reportData, rawJson) {
  saveReportRecord(reportData, rawJson);
}

function handleRenderReport() {
  try {
    jsonError.textContent = "";
    const { data, rawJson } = parseReportJson();
    const normalizedData = normalizeReportData(data);
    renderVisualReport(normalizedData);
    saveAnalysisHistory(normalizedData, rawJson);
    showToast("报告数据已导入并保存");
  } catch (error) {
    jsonError.textContent = error.message;
    showToast("报告数据导入失败");
  }
}

function fillExampleJson() {
  const normalizedData = mockAnalysis(buildAnalysisPayload(collectAnalysisInput()));
  const rawJson = JSON.stringify(normalizedData, null, 2);
  jsonInput.value = rawJson;
  jsonError.textContent = "";
  renderVisualReport(normalizedData);
  saveAnalysisHistory(normalizedData, rawJson);
  showToast("示例报告已生成并保存");
}

function clearJsonReport() {
  jsonInput.value = "";
  jsonError.textContent = "";
  renderedReportData = null;
  visualReportOutput.innerHTML = getReportEmptyStateHtml();
}

function renderHistory() {
  const records = getHistory();
  if (!records.length) {
    historyList.innerHTML = `
      <div class="empty-state">
        <p class="eyebrow">${t("noHistoryEyebrow")}</p>
        <h3>${t("noHistoryTitle")}</h3>
        <p>${t("noHistoryDesc")}</p>
        <a class="button primary" href="#analyze">${t("goAnalyzeBtn")}</a>
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
          <span class="record-type">${t("promptRecord")}</span>
          <h3>${escapeHtml(record.nickname || t("unnamedObject"))}</h3>
          <time datetime="${escapeHtml(record.createdAt)}">${date.toLocaleString(currentLanguage === "en" ? "en-US" : "zh-CN")}</time>
        </div>
        <span class="scenario-tag">${escapeHtml(record.scenario || t("unsetScenario"))}</span>
      </div>
      <p>${escapeHtml(truncateText(record.signature))}</p>
      <ul class="history-meta">
        <li>${t("postSummary")}：${escapeHtml(truncateText((record.posts || []).filter(Boolean).join(" / "), 42))}</li>
        <li>${t("uploadedAvatar")}：${record.hasAvatar ? t("yes") : t("no")}</li>
        <li>${t("screenshotMeta")}：${Number(record.screenshotCount || 0)} ${t("imageCountUnit")}</li>
      </ul>
      <div class="history-actions">
        <button class="button small view-history" type="button" data-id="${escapeHtml(record.id)}">${isExpanded ? t("collapsePrompt") : t("viewPrompt")}</button>
        <button class="button small copy-history" type="button" data-id="${escapeHtml(record.id)}">${t("copyPrompt")}</button>
        <button class="button small danger delete-history" type="button" data-id="${escapeHtml(record.id)}">${t("deleteRecord")}</button>
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
          <span class="record-type">${t("reportRecord")}</span>
          <h3>${escapeHtml(record.oneSentence || t("unnamedReport"))}</h3>
          <time datetime="${escapeHtml(record.createdAt)}">${date.toLocaleString(currentLanguage === "en" ? "en-US" : "zh-CN")}</time>
        </div>
        <span class="scenario-tag">${t("confidenceLabel")}：${escapeHtml(record.confidence || "中")}</span>
      </div>
      <ul class="history-meta">
        <li>${t("totalScore")}：${Object.values(record.scores || {}).map(clampScore).join(" / ")}</li>
        <li>${t("bigFiveLabel")}：${Object.values(record.bigFive || {}).map(clampScore).join(" / ")}</li>
      </ul>
      <div class="history-actions">
        <button class="button small view-report-history" type="button" data-id="${escapeHtml(record.id)}">${t("viewReport")}</button>
        <button class="button small copy-json-history" type="button" data-id="${escapeHtml(record.id)}">${t("copyJson")}</button>
        <button class="button small danger delete-history" type="button" data-id="${escapeHtml(record.id)}">${t("deleteRecord")}</button>
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
if (languageToggle) languageToggle.addEventListener("click", toggleLanguage);

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
applyLanguage();
