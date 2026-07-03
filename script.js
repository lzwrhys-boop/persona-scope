const STORAGE_KEY = "personascope.history.v3";
const LANGUAGE_STORAGE_KEY = "personascope.language";
const DISCLAIMER = "PersonaScope 仅基于用户提供的公开社交线索生成沟通画像，用于辅助理解表达风格与互动方式，不构成医学诊断、人格定论、关系判断或重大决策依据。";
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
    heroDesc: "基于公开社交线索，生成可解释、可复核的沟通画像与可视化分析报告。",
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
    previewFrameworkBigFive: "Big Five 倾向参考",
    previewFrameworkLanguage: "语言线索分析",
    previewFrameworkPresentation: "自我呈现理论",
    previewFrameworkAvatar: "头像视觉线索",
    previewFrameworkSocial: "综合沟通策略",
    previewFooter: "基于用户提供的公开线索生成，仅作为沟通风格参考，不构成诊断或人格定论。",
    valuePersonaTitle: "外在人设",
    valuePersonaDesc: "识别对方在社交平台上想呈现的公开形象，区分自我呈现与完整人格之间的边界。",
    valuePreferenceTitle: "沟通偏好",
    valuePreferenceDesc: "基于公开线索推测更适合直接沟通、情绪铺垫还是价值共鸣，让开场方式更自然。",
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
    homeCompliance: "PersonaScope 仅基于用户提供的公开社交线索生成沟通画像，用于辅助理解表达风格与互动方式，不构成医学诊断、人格定论、关系判断或重大决策依据。",
    analyzeEyebrow: "START ANALYSIS",
    analyzeTitle: "开始分析",
    analyzeDesc: "上传或输入公开社交线索，系统将基于语言线索、自我呈现与视觉线索生成沟通画像。",
    nicknameLabel: "分析对象昵称",
    optionalLabel: "可选",
    optionalQuestionLabel: "选填",
    nicknamePlaceholder: "例如：某位朋友 / 客户 A / 自我画像",
    avatarLabel: "头像视觉线索",
    removeAvatar: "删除当前头像",
    avatarUploadTitle: "点击或拖拽上传头像",
    avatarUploadDesc: "支持 jpg、jpeg、png、webp；仅作视觉自我呈现辅助线索，本地预览",
    signatureLabel: "个性签名",
    signaturePlaceholder: "输入公开可见的个性签名、简介或主页文案",
    post1Label: "社交文案 1",
    post1Placeholder: "如果你上传的是截图，也建议补充截图中的关键文字，方便生成更准确的沟通画像。",
    post2Label: "社交文案 2",
    post2Placeholder: "补充第二条社交文案或截图中的关键文字",
    post3Label: "社交文案 3",
    post3Placeholder: "补充第三条社交文案或截图中的关键文字",
    screenshotLabel: "社交截图 / 公开视觉线索",
    screenshotCount: "已上传 {count} / 6 张",
    screenshotUploadTitle: "点击或拖拽上传社交截图",
    screenshotUploadDesc: "最多 6 张；支持朋友圈、小红书、微博、LinkedIn 等截图；用于公开文本与视觉线索分析",
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
    analysisPreviewEyebrow: "ANALYSIS PREVIEW",
    analysisPreviewTitle: "分析结果预览",
    analysisWaitingTitle: "等待开始分析",
    analysisWaitingCueLanguage: "语言线索分析",
    analysisWaitingCuePresentation: "自我呈现识别",
    analysisWaitingCueStrategy: "沟通策略生成",
    analysisSummaryTitle: "沟通画像摘要",
    analysisDimensionsTitle: "核心维度",
    analysisTagsTitle: "关键标签",
    analysisAdviceTitle: "初步建议",
    viewVisualReportBtn: "查看可视化报告",
    generatedPromptEyebrow: "DEVELOPER DEBUG",
    generatedPromptTitle: "开发者调试 Prompt",
    promptStatusEmpty: "填写左侧公开社交线索后，系统将在这里生成沟通画像摘要、核心维度与可视化结果。",
    promptStatusReady: "分析已完成。你可以查看右侧摘要，或进入完整可视化报告。",
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
    jsonPlaceholder: "可导入完整报告 JSON，例如包含 basicProfile、scores、bigFive、personaTags、avatarVisualCues、communicationAdvice、riskPoints、approachStyle、evidenceChain、disclaimer 等字段。",
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
    chartBarTitle: "沟通风格维度图",
    chartRadarTitle: "Big Five 倾向参考雷达图",
    tagCloudTitle: "自我呈现标签云",
    avatarVisualCuesTitle: "头像视觉线索",
    communicationAdviceTitle: "综合沟通建议",
    riskPointsTitle: "相处雷区",
    approachStyleTitle: "适合接近方式与沟通节奏",
    evidenceChainTitle: "证据链",
    confidenceLabel: "置信度",
    disclaimerTitle: "免责声明",
    emptyTags: "暂无标签",
    emptyVisualCues: "暂无头像视觉线索",
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
    sampleCard3Title: "Big Five 倾向参考",
    sampleCard3Desc: "从公开表达线索看，开放性倾向可能偏中高，尽责性倾向中等偏高，外向性不宜过度判断。该参考来自文案中的审美表达、计划感和有限自我暴露。",
    sampleCard4Title: "情绪表达方式",
    sampleCard4Desc: "情绪表达偏间接，常通过隐喻、自嘲或场景描述释放压力。与其直接追问“你怎么了”，不如用低压方式邀请对方补充。",
    sampleCard5Title: "沟通偏好",
    sampleCard5Desc: "更适合具体、真诚、可选择的沟通方式。对方可能更容易回应有观察、有边界、有信息量的开场，而不是泛泛寒暄。",
    sampleCard6Title: "相处雷区",
    sampleCard6Desc: "避免过快推进关系、连续追问隐私、用标签概括对方，或把公开动态当作对方完整人格、能力或关系意愿的证据。",
    sampleCard7Title: "适合的接近方式",
    sampleCard7Desc: "可以从对方公开表达中的具体主题切入：“你最近提到的那个观点挺有意思，我很好奇你为什么会这样看。”",
    sampleCard8Title: "证据链",
    sampleCard8Desc: "证据来自头像风格、个性签名中的边界表达、第 1 条文案的目标感、第 2 条文案的情绪隐喻，以及第 3 条文案的自我调侃。",
    sampleCard9Title: "置信度",
    sampleCard9Desc: "中。原因是线索覆盖头像、签名与三条文本，但仍然属于公开自我呈现，无法代表完整人格或关系判断。",
    sampleCard10Title: "使用提醒",
    sampleCard10Desc: "报告只用于辅助理解表达风格和改善沟通，不应作为诊断、筛选、控制、关系判断或重大决策依据。真实互动仍需要持续验证。",
    theoryEyebrow: "FRAMEWORK",
    theoryTitle: "理论依据",
    theoryDesc: "PersonaScope 采用公开社交线索沟通画像模型：语言线索分析 → 自我呈现理论 → Big Five 倾向参考 → 头像视觉线索 → 综合沟通策略。",
    theoryLanguageTitle: "语言线索分析：从表达方式识别沟通风格",
    theoryLanguageDesc: "通过情绪词、自我指代、关系词、行动词、判断词与表达抽象度，观察公开文本中呈现出的沟通风格、情绪显性度、自我暴露程度与关系导向。",
    theorySocialTitle: "自我呈现：识别 TA 想被如何看见",
    theorySocialDesc: "社交媒体内容并不等同于完整人格，而是公开场域中的形象管理。系统会观察头像、签名、文案与配图中呈现出的展示策略、边界意识、选择性暴露与公开人设。",
    theoryBigFiveTitle: "Big Five：公开表达中的人格倾向参考",
    theoryBigFiveDesc: "Big Five 仅作为公开表达中的倾向参考，用于辅助观察开放性、尽责性、外向性、宜人性与情绪稳定性相关线索。它不是正式人格测评，也不构成人格定论。",
    theoryAvatarTitle: "头像视觉线索：公开形象与视觉距离感",
    theoryAvatarDesc: "头像仅用于观察视觉自我呈现，例如真人/非真人、距离感、色彩冷暖、精修程度、专业感与亲和感。头像不能单独用于判断人格、能力、人品或关系倾向。",
    theoryStrategyTitle: "综合沟通策略：从分析到可执行建议",
    theoryStrategyDesc: "系统会综合语言线索、自我呈现、人格倾向参考与视觉线索，输出更适合的开场方式、沟通节奏、相处雷区与互动建议。建议仅用于提升沟通理解，不用于操控他人。",
    principleTitle: "边界原则",
    principleDesc: "PersonaScope 仅基于用户提供的公开社交线索生成沟通画像，用于辅助理解表达风格与互动方式，不构成医学诊断、人格定论、关系判断或重大决策依据。",
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
    bigFiveLabel: "Big Five 倾向参考",
    footerCompliance: "PersonaScope 仅基于用户提供的公开社交线索生成沟通画像，用于辅助理解表达风格与互动方式，不构成医学诊断、人格定论、关系判断或重大决策依据。"
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
    heroDesc: "Generate an explainable communication profile and visual report from public social signals.",
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
    previewFrameworkBigFive: "Big Five Tendency Reference",
    previewFrameworkLanguage: "Linguistic Cues",
    previewFrameworkPresentation: "Self-Presentation",
    previewFrameworkAvatar: "Avatar Visual Cues",
    previewFrameworkSocial: "Communication Strategy",
    previewFooter: "Generated from user-provided public signals only. Not diagnosis or definitive personality judgment.",
    valuePersonaTitle: "Public Persona",
    valuePersonaDesc: "Identify the image someone presents in public social spaces while keeping clear boundaries between presentation and the whole person.",
    valuePreferenceTitle: "Communication Preference",
    valuePreferenceDesc: "Use public clues to estimate whether direct context, emotional pacing, or shared values will make the opening feel more natural.",
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
    homeCompliance: "PersonaScope generates communication profiles only from user-provided public social signals. It supports understanding expression style and interaction patterns, and does not constitute medical diagnosis, definitive personality judgment, relationship judgment, or a basis for major decisions.",
    analyzeEyebrow: "START ANALYSIS",
    analyzeTitle: "Analyze",
    analyzeDesc: "Upload or enter public social signals. PersonaScope will generate a communication profile based on linguistic cues, self-presentation, and visual cues.",
    nicknameLabel: "Profile nickname",
    optionalLabel: "Optional",
    optionalQuestionLabel: "Optional",
    nicknamePlaceholder: "Example: a friend / client A / self profile",
    avatarLabel: "Avatar Visual Cues",
    removeAvatar: "Remove avatar",
    avatarUploadTitle: "Click or drag to upload avatar",
    avatarUploadDesc: "Supports jpg, jpeg, png, webp. Used only as visual self-presentation cues and previewed locally.",
    signatureLabel: "Personal Bio",
    signaturePlaceholder: "Enter a public bio, signature, or profile intro",
    post1Label: "Social Post 1",
    post1Placeholder: "If you upload screenshots, also paste key text to make the communication profile more accurate.",
    post2Label: "Social Post 2",
    post2Placeholder: "Add the second social post or key screenshot text",
    post3Label: "Social Post 3",
    post3Placeholder: "Add the third social post or key screenshot text",
    screenshotLabel: "Social Screenshots / Public Visual Cues",
    screenshotCount: "{count} / 6 uploaded",
    screenshotUploadTitle: "Click or drag to upload social screenshots",
    screenshotUploadDesc: "Up to 6 images. Used for public text and visual cue analysis; screenshots stay local.",
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
    analysisPreviewEyebrow: "ANALYSIS PREVIEW",
    analysisPreviewTitle: "Analysis Preview",
    analysisWaitingTitle: "Waiting for Analysis",
    analysisWaitingCueLanguage: "Linguistic Cues",
    analysisWaitingCuePresentation: "Self-Presentation",
    analysisWaitingCueStrategy: "Communication Strategy",
    analysisSummaryTitle: "Communication Profile Summary",
    analysisDimensionsTitle: "Key Dimensions",
    analysisTagsTitle: "Key Tags",
    analysisAdviceTitle: "Initial Guidance",
    viewVisualReportBtn: "View Visual Report",
    generatedPromptEyebrow: "DEVELOPER DEBUG",
    generatedPromptTitle: "Developer Debug Prompt",
    promptStatusEmpty: "After you provide public social signals on the left, PersonaScope will generate a communication profile summary, key dimensions, and visual results here.",
    promptStatusReady: "Analysis complete. You can review the summary here or open the full visual report.",
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
    jsonPlaceholder: "Import complete report JSON, such as fields including basicProfile, scores, bigFive, personaTags, avatarVisualCues, communicationAdvice, riskPoints, approachStyle, evidenceChain, and disclaimer.",
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
    chartBarTitle: "Communication Style Dimensions",
    chartRadarTitle: "Big Five Tendency Reference Radar",
    tagCloudTitle: "Self-Presentation Tag Cloud",
    avatarVisualCuesTitle: "Avatar Visual Cues",
    communicationAdviceTitle: "Integrated Communication Guidance",
    riskPointsTitle: "Interaction Risks",
    approachStyleTitle: "Suitable Opening and Communication Rhythm",
    evidenceChainTitle: "Evidence Chain",
    confidenceLabel: "Confidence",
    disclaimerTitle: "Disclaimer",
    emptyTags: "No tags yet",
    emptyVisualCues: "No avatar visual cues yet",
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
    sampleCard3Title: "Big Five Tendency Reference",
    sampleCard3Desc: "From public expression cues, openness tendency may be medium-high, conscientiousness tendency medium-high, and extraversion should not be overread.",
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
    sampleCard10Desc: "Use the report only to understand expression style and improve communication. It should not be used for diagnosis, screening, control, relationship judgment, or major decisions.",
    theoryEyebrow: "FRAMEWORK",
    theoryTitle: "Framework",
    theoryDesc: "PersonaScope uses a public social signal communication-profile model: linguistic cues → self-presentation → Big Five tendency reference → avatar visual cues → communication strategy.",
    theoryLanguageTitle: "Linguistic Cues: Inferring Communication Style from Expression Patterns",
    theoryLanguageDesc: "Analyzes emotional words, self-references, relational terms, action verbs, judgment words, and abstraction level to infer communication style, emotional visibility, self-disclosure, and relational orientation from public text.",
    theorySocialTitle: "Self-Presentation: Understanding How a Person Wants to Be Seen",
    theorySocialDesc: "Social media content is not equivalent to the whole person; it is a form of public impression management. The system observes avatar, bio, posts, and visual choices to identify presentation strategy, boundary awareness, selective exposure, and public persona.",
    theoryBigFiveTitle: "Big Five: Personality Tendency Reference in Public Expression",
    theoryBigFiveDesc: "Big Five is used only as a tendency reference in public expression, helping observe cues related to openness, conscientiousness, extraversion, agreeableness, and emotional stability. It is not a formal personality assessment or a definitive personality judgment.",
    theoryAvatarTitle: "Avatar Visual Cues: Public Image and Visual Distance",
    theoryAvatarDesc: "Avatar analysis is limited to visual self-presentation cues, such as human/non-human representation, visual distance, color tone, editing style, professionalism, and approachability. It cannot be used alone to judge personality, ability, morality, or relationship tendencies.",
    theoryStrategyTitle: "Communication Strategy: From Analysis to Actionable Guidance",
    theoryStrategyDesc: "The system combines linguistic cues, self-presentation, Big Five tendency references, and avatar visual cues to suggest suitable openings, communication rhythm, interaction risks, and engagement strategies. Recommendations are for better understanding, not manipulation.",
    principleTitle: "Boundary Principle",
    principleDesc: "PersonaScope generates communication profiles only from user-provided public social signals. It is intended to support understanding of expression style and interaction patterns, and does not constitute medical diagnosis, definitive personality judgment, relationship judgment, or a basis for major decisions.",
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
    bigFiveLabel: "Big Five Tendency Reference",
    footerCompliance: "PersonaScope generates communication profiles only from user-provided public social signals. It supports understanding expression style and interaction patterns, and does not constitute medical diagnosis, definitive personality judgment, relationship judgment, or a basis for major decisions."
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
const analysisPreview = document.querySelector("#analysisPreview");
const debugPromptPanel = document.querySelector(".debug-prompt-panel");
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
const MOCK_MODE = true;
const API_ENDPOINT = "https://your-api-domain.com/api/analyze";
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const MAX_TOTAL_IMAGE_BYTES = 20 * 1024 * 1024;
const MAX_SCREENSHOT_COUNT = 6;
const MAX_HISTORY_RECORDS = 20;
const MAX_HISTORY_RAW_JSON_LENGTH = 12000;
const MAX_HISTORY_PROMPT_LENGTH = 12000;
const SAMPLE_REPORT_DATA = {
  basicProfile: {
    oneSentence: "该对象在公开社交线索中呈现出表达克制、边界清晰、重视内容质量的沟通风格。",
    personaSummary: "TA 的公开表达更偏克制和有选择地暴露自我，常通过具体场景、审美判断和轻微自嘲建立公开形象。沟通时适合先从共同语境和具体内容切入，再逐步深入。",
    confidence: "中",
    confidenceReason: "样例包含头像视觉线索、个性签名和三条社交文案，但仍只代表公开自我呈现，不能等同于完整人格或关系判断。"
  },
  scores: {
    "表达温度": 78,
    "边界清晰度": 84,
    "自我暴露程度": 58,
    "沟通开放度": 66,
    "关系导向": 72
  },
  bigFive: {
    "开放性倾向": 86,
    "尽责性倾向": 74,
    "外向性倾向": 52,
    "宜人性倾向": 68,
    "情绪稳定性倾向": 70
  },
  personaTags: ["公开人设：克制清醒", "选择性暴露", "边界意识", "展示策略：质感优先"],
  avatarVisualCues: [
    "视觉距离感：中等偏高，倾向保持分寸。",
    "专业感线索：画面风格较克制，信息密度适中。",
    "亲和感线索：不强烈外放，更适合低压互动。",
    "审美控制感：色彩和构图呈现一定筛选感。"
  ],
  communicationAdvice: [
    "适合开场方式：引用对方公开内容中的具体细节，避免泛泛寒暄。",
    "合适沟通节奏：先建立共同语境，再逐步增加话题深度。",
    "建议话术方向：给对方保留选择空间，例如用“如果你愿意的话”降低压力。"
  ],
  riskPoints: [
    "相处雷区：不要把公开动态直接等同于完整人格或关系意愿。",
    "避免过快推进亲密感，或用标签化语言概括对方。",
    "不要围绕隐私、收入、健康、政治宗教等敏感属性做推断。"
  ],
  approachStyle: [
    "适合接近方式：从作品、观点、地点或共同兴趣切入。",
    "沟通节奏：用低压邀请代替高强度索取回应。",
    "互动建议：先确认对方愿意延展话题，再表达进一步了解的意图。"
  ],
  evidenceChain: [
    {
      conclusion: "边界感较强",
      evidence: "个性签名强调自我节奏，文案中较少直接索取情绪回应。",
      source: "来自签名/来自文案"
    },
    {
      conclusion: "开放性倾向参考偏高",
      evidence: "内容中出现审美判断、跨场景联想和对新体验的正向表达。",
      source: "来自文案/来自截图文字"
    },
    {
      conclusion: "更适合具体而轻量的开场",
      evidence: "表达方式偏含蓄，直接追问可能增加防御感。",
      source: "来自文案"
    },
    {
      conclusion: "视觉呈现更偏克制",
      evidence: "头像风格与截图排版显示出较强的筛选感和视觉距离。",
      source: "来自头像视觉/来自截图"
    }
  ],
  disclaimer: DISCLAIMER
};

let avatarDataUrl = "";
let avatarFileSize = 0;
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

function getAnalysisWaitingHtml() {
  return `
    <div class="analysis-waiting">
      <span class="analysis-scan-line" aria-hidden="true"></span>
      <h4>${t("analysisWaitingTitle")}</h4>
      <div class="analysis-cue-list">
        <span>${t("analysisWaitingCueLanguage")}</span>
        <span>${t("analysisWaitingCuePresentation")}</span>
        <span>${t("analysisWaitingCueStrategy")}</span>
      </div>
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
  updateDebugPromptVisibility();
  updateGeneratedState(generatedPrompt, generatedRecordDraft);
  renderScreenshotGrid();
  if (renderedReportData) {
    renderVisualReport(renderedReportData);
    renderAnalysisPreview(renderedReportData);
  } else {
    visualReportOutput.innerHTML = getReportEmptyStateHtml();
    analysisPreview.innerHTML = getAnalysisWaitingHtml();
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
  try {
    const compactRecords = records.map(compactHistoryRecord).slice(0, MAX_HISTORY_RECORDS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(compactRecords));
    return true;
  } catch (error) {
    console.warn("历史记录保存失败。", error);
    showToast("历史记录空间不足，本次结果未保存");
    return false;
  }
}

function updateDebugPromptVisibility() {
  if (!debugPromptPanel) return;
  debugPromptPanel.hidden = !MOCK_MODE;
}

function compactHistoryRecord(record) {
  if (!record || typeof record !== "object") return record;
  if (record.type === "report") return compactReportRecord(record);
  return compactPromptRecord(record);
}

function compactPromptRecord(record) {
  const prompt = String(record.prompt || "");
  return {
    id: record.id,
    type: "prompt",
    createdAt: record.createdAt,
    nickname: truncateText(record.nickname || "", 120),
    signature: truncateText(record.signature || "", 240),
    posts: Array.isArray(record.posts) ? record.posts.map((post) => truncateText(post || "", 240)) : [],
    scenario: record.scenario,
    question: truncateText(record.question || "", 240),
    hasAvatar: Boolean(record.hasAvatar),
    screenshotCount: Number(record.screenshotCount || 0),
    prompt: prompt.length > MAX_HISTORY_PROMPT_LENGTH ? `${prompt.slice(0, MAX_HISTORY_PROMPT_LENGTH)}\n\n[内容过长，已截断]` : prompt,
  };
}

function compactReportData(data) {
  return {
    basicProfile: data.basicProfile,
    scores: data.scores,
    bigFive: data.bigFive,
    personaTags: normalizeStringArray(data.personaTags).slice(0, 12),
    avatarVisualCues: normalizeStringArray(data.avatarVisualCues).slice(0, 8),
    communicationAdvice: normalizeStringArray(data.communicationAdvice).slice(0, 8),
    riskPoints: normalizeStringArray(data.riskPoints).slice(0, 8),
    approachStyle: normalizeStringArray(data.approachStyle).slice(0, 8),
    evidenceChain: normalizeEvidenceChain(data.evidenceChain).slice(0, 8),
    disclaimer: data.disclaimer,
  };
}

function compactReportRecord(record) {
  const reportData = record.reportData ? compactReportData(record.reportData) : null;
  const fallbackJson = reportData ? JSON.stringify(reportData, null, 2) : "";
  const rawJson = String(record.rawJson || fallbackJson);
  return {
    id: record.id,
    type: "report",
    createdAt: record.createdAt,
    oneSentence: truncateText(record.oneSentence || reportData?.basicProfile?.oneSentence || "", 180),
    confidence: record.confidence || reportData?.basicProfile?.confidence,
    scores: record.scores || reportData?.scores,
    bigFive: record.bigFive || reportData?.bigFive,
    rawJson: rawJson.length > MAX_HISTORY_RAW_JSON_LENGTH ? fallbackJson : rawJson,
    reportData,
  };
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
  if (!file) return false;
  return ["jpg", "jpeg", "png", "webp"].includes(getFileExtension(file.name)) || ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(file.type);
}

function getFileExtension(name) {
  return String(name || "").split(".").pop().toLowerCase();
}

function getCurrentImageBytes() {
  return avatarFileSize + socialScreenshots.reduce((total, item) => total + Number(item.size || 0), 0);
}

function formatMb(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
}

async function readImageSignature(file) {
  const bytes = new Uint8Array(await file.slice(0, 16).arrayBuffer());
  const ascii = Array.from(bytes).map((byte) => String.fromCharCode(byte)).join("");
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "jpeg";
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47 && bytes[4] === 0x0d && bytes[5] === 0x0a && bytes[6] === 0x1a && bytes[7] === 0x0a) return "png";
  if (ascii.startsWith("RIFF") && ascii.slice(8, 12) === "WEBP") return "webp";
  return "";
}

function isFileTypeConsistent(file, signature) {
  const extension = getFileExtension(file.name);
  const normalizedType = file.type === "image/jpg" ? "image/jpeg" : file.type;
  const signatureTypes = {
    jpeg: ["jpg", "jpeg", "image/jpeg"],
    png: ["png", "image/png"],
    webp: ["webp", "image/webp"],
  };
  const allowed = signatureTypes[signature] || [];
  const extensionOk = !extension || allowed.includes(extension);
  const mimeOk = !normalizedType || allowed.includes(normalizedType);
  return extensionOk && mimeOk;
}

function validateImageBudget(file, replacingBytes = 0) {
  if (!file) return "请选择图片文件";
  if (!file.size) return "图片文件为空或已损坏";
  if (file.size > MAX_IMAGE_BYTES) return `单张图片不能超过 ${formatMb(MAX_IMAGE_BYTES)}`;
  const totalBytes = getCurrentImageBytes() - replacingBytes + file.size;
  if (totalBytes > MAX_TOTAL_IMAGE_BYTES) return `图片总大小不能超过 ${formatMb(MAX_TOTAL_IMAGE_BYTES)}`;
  return "";
}

function verifyImageDecodes(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);
    const cleanup = () => URL.revokeObjectURL(objectUrl);
    image.onload = () => {
      cleanup();
      if (!image.naturalWidth || !image.naturalHeight) {
        reject(new Error("图片无法识别尺寸"));
        return;
      }
      resolve({ width: image.naturalWidth, height: image.naturalHeight });
    };
    image.onerror = () => {
      cleanup();
      reject(new Error("图片解码失败"));
    };
    image.src = objectUrl;
  });
}

async function validateImageFile(file, options = {}) {
  const budgetError = validateImageBudget(file, options.replacingBytes || 0);
  if (budgetError) return { ok: false, message: budgetError };
  if (!isSupportedImage(file)) {
    return { ok: false, message: "请选择 jpg、jpeg、png 或 webp 图片" };
  }
  try {
    const signature = await readImageSignature(file);
    if (!signature) return { ok: false, message: "图片格式无法识别，可能是损坏或伪装文件" };
    if (!isFileTypeConsistent(file, signature)) return { ok: false, message: "图片扩展名、类型和内容不一致" };
    await verifyImageDecodes(file);
    return { ok: true };
  } catch (error) {
    console.warn("图片校验失败。", error);
    return { ok: false, message: "图片读取失败，请换一张未损坏的图片" };
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result || "")));
    reader.addEventListener("error", () => reject(new Error("图片读取失败")));
    reader.addEventListener("abort", () => reject(new Error("图片读取已取消")));
    reader.readAsDataURL(file);
  });
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
    frameworks: ["linguisticCues", "selfPresentation", "bigFiveTendencyReference", "avatarVisualCues", "communicationStrategy"],
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
1. 优先使用语言线索分析表达方式、情绪显性度、自我暴露程度、关系导向与行动导向。
2. 使用自我呈现理论分析公开场域中的展示策略、边界意识、选择性暴露与公开人设。
3. Big Five 仅作为公开表达中的倾向参考，不得写成正式人格测评或人格定论。
4. 头像视觉线索只能作为辅助，用于观察视觉距离感、亲和感、专业感、审美控制感和公开形象稳定性。
5. 综合输出适合开场方式、沟通节奏、相处雷区、互动建议和置信度说明。
6. 所有分数必须是 0-100 的概率化倾向分数，不是诊断结果。
7. 每个关键结论必须回到用户提供的头像、签名、社交文案或截图等公开线索。
8. 禁止判断政治、宗教、健康、性取向、犯罪倾向、收入水平、是否忠诚、是否适合录用、能力、人品等敏感或重大属性。
9. 不得输出操控、PUA、歧视、筛选或伤害他人的建议。

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
    "边界清晰度": 0,
    "自我暴露程度": 0,
    "沟通开放度": 0,
    "关系导向": 0
  },
  "bigFive": {
    "开放性倾向": 0,
    "尽责性倾向": 0,
    "外向性倾向": 0,
    "宜人性倾向": 0,
    "情绪稳定性倾向": 0
  },
  "personaTags": [],
  "avatarVisualCues": [],
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
      source: "来自头像视觉/来自截图"
    }
  ];

  return normalizeReportData(reportData);
}

async function runAnalysis(payload) {
  if (MOCK_MODE) return mockAnalysis(payload);

  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      locale: payload.locale,
      input: payload.input,
      frameworks: payload.frameworks,
      outputFormat: payload.outputFormat,
    }),
  });

  let result = null;
  try {
    result = await response.json();
  } catch (error) {
    throw new Error("API 返回格式不是有效 JSON");
  }

  if (!response.ok || !result?.ok) {
    throw new Error(result?.message || "分析 API 请求失败");
  }

  return normalizeReportData(result.data);
}

function updateGeneratedState(prompt, recordDraft) {
  generatedPrompt = prompt;
  generatedRecordDraft = recordDraft;
  promptOutput.textContent = prompt || t("promptOutputEmpty");
  copyPromptBtn.disabled = !prompt;
  saveHistoryBtn.disabled = !prompt;
  promptStatus.textContent = prompt ? t("promptStatusReady") : t("promptStatusEmpty");
}

function renderAnalysisPreview(data) {
  const dimensions = Object.entries(data.scores || {}).slice(0, 4);
  const tags = normalizeStringArray(data.personaTags || []).slice(0, 4);
  const advice = normalizeStringArray(data.communicationAdvice || data.approachStyle || []).slice(0, 3);

  analysisPreview.innerHTML = `
    <div class="analysis-preview-result">
      <section>
        <span>${t("analysisSummaryTitle")}</span>
        <p>${escapeHtml(data.basicProfile.oneSentence)}</p>
      </section>
      <section>
        <span>${t("analysisDimensionsTitle")}</span>
        <div class="mini-dimension-list">
          ${dimensions.map(([label, value]) => `
            <div>
              <small>${escapeHtml(label)}</small>
              <strong>${value}%</strong>
            </div>
          `).join("")}
        </div>
      </section>
      <section>
        <span>${t("analysisTagsTitle")}</span>
        <div class="mini-tag-list">
          ${(tags.length ? tags : [t("emptyTags")]).map((tag) => `<em>${escapeHtml(tag)}</em>`).join("")}
        </div>
      </section>
      <section>
        <span>${t("analysisAdviceTitle")}</span>
        <div class="mini-advice-list">
          ${(advice.length ? advice : [t("emptyAdvice")]).map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
        </div>
      </section>
      <a class="button ghost" href="#visual-report">${t("viewVisualReportBtn")}</a>
    </div>
  `;
}

async function handleSubmit(event) {
  event.preventDefault();
  const data = collectAnalysisInput();
  if (!hasMeaningfulInput(data)) {
    showToast("请至少填写一项公开线索");
    return;
  }

  const payload = buildAnalysisPayload(data);
  const prompt = MOCK_MODE ? payload.debugPrompt : "";
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
    renderAnalysisPreview(reportData);
    promptStatus.textContent = t("promptStatusReady");
    saveAnalysisHistory(reportData, JSON.stringify(reportData, null, 2));
    jsonError.textContent = "";
    showToast(MOCK_MODE ? "AI 分析已完成，当前使用本地 mock 报告" : "AI 分析已完成");
  } catch (error) {
    console.warn("分析流程失败。", error);
    showToast("分析失败，请稍后重试");
  }
}

function handleReset() {
  avatarDataUrl = "";
  avatarFileSize = 0;
  socialScreenshots = [];
  avatarInput.value = "";
  screenshotInput.value = "";
  avatarPreview.innerHTML = "+";
  removeAvatarBtn.hidden = true;
  renderScreenshotGrid();
  const defaultScenario = document.querySelector('input[name="scenario"][value="恋爱了解"]');
  if (defaultScenario) defaultScenario.checked = true;
  renderedReportData = null;
  updateGeneratedState("", null);
  analysisPreview.innerHTML = getAnalysisWaitingHtml();
  showToast("当前内容已清空");
}

async function setAvatarFile(file) {
  if (!file) {
    avatarDataUrl = "";
    avatarFileSize = 0;
    avatarPreview.innerHTML = "+";
    removeAvatarBtn.hidden = true;
    return;
  }
  const validation = await validateImageFile(file, { replacingBytes: avatarFileSize });
  if (!validation.ok) {
    showToast(validation.message);
    avatarInput.value = "";
    return;
  }
  try {
    avatarDataUrl = await readFileAsDataUrl(file);
    avatarFileSize = file.size;
    avatarPreview.innerHTML = `<img src="${avatarDataUrl}" alt="头像预览">`;
    removeAvatarBtn.hidden = false;
    showToast("头像已本地预览");
  } catch (error) {
    console.warn("头像读取失败。", error);
    avatarInput.value = "";
    showToast("头像读取失败，请重新选择图片");
  }
}

function removeAvatar() {
  avatarDataUrl = "";
  avatarFileSize = 0;
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

async function addScreenshotFiles(files) {
  const incomingFiles = Array.from(files || []);
  const availableSlots = MAX_SCREENSHOT_COUNT - socialScreenshots.length;
  if (!incomingFiles.length) return;
  if (!availableSlots) {
    showToast(`最多只能上传 ${MAX_SCREENSHOT_COUNT} 张社交截图`);
    return;
  }
  let addedCount = 0;
  let skippedCount = 0;
  const filesToProcess = incomingFiles.slice(0, availableSlots);
  if (incomingFiles.length > availableSlots) showToast(`最多 ${MAX_SCREENSHOT_COUNT} 张，已处理前 ${availableSlots} 张`);

  for (const file of filesToProcess) {
    const validation = await validateImageFile(file);
    if (!validation.ok) {
      skippedCount += 1;
      showToast(validation.message);
      continue;
    }
    try {
      const dataUrl = await readFileAsDataUrl(file);
      socialScreenshots.push({ id: createId(), name: file.name, size: file.size, dataUrl });
      renderScreenshotGrid();
      addedCount += 1;
    } catch (error) {
      skippedCount += 1;
      console.warn("截图读取失败。", error);
      showToast("截图读取失败，请重新选择图片");
    }
  }
  if (addedCount && skippedCount) showToast(`已添加 ${addedCount} 张，跳过 ${skippedCount} 张异常图片`);
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
  const saved = saveHistory([record, ...getHistory()].slice(0, MAX_HISTORY_RECORDS));
  if (saved) expandedHistoryId = record.id;
  renderHistory();
  if (saved) showToast("调试 Prompt 已保存到历史记录");
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
    scores: normalizeScores(getFirstValue(data, ["scores", "score", "metrics", "profileScores", "linguisticCues", "communicationStyle", "综合评分", "画像分数", "语言线索分析", "沟通风格维度"]), ["表达温度", "边界清晰度", "自我暴露程度", "沟通开放度", "关系导向"]),
    bigFive: normalizeScores(getFirstValue(data, ["bigFive", "big_five", "big5", "personality", "personalityScores", "bigFiveTendencyReference", "大五人格", "人格倾向", "Big Five 倾向参考"]), ["开放性倾向", "尽责性倾向", "外向性倾向", "宜人性倾向", "情绪稳定性倾向"]),
    personaTags: normalizeStringArray(getFirstValue(data, ["personaTags", "tags", "persona_tags", "labels", "人设标签", "标签"]), ["tag", "name", "label", "value", "title", "text", "标签"]),
    avatarVisualCues: normalizeStringArray(getFirstValue(data, ["avatarVisualCues", "avatar_visual_cues", "visualCues", "avatarCues", "头像视觉线索", "视觉线索"]), ["cue", "content", "text", "value", "title", "线索"]),
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
    边界清晰度: ["边界清晰度", "边界感", "boundary", "boundarySense", "边界意识"],
    自我暴露程度: ["自我暴露程度", "selfDisclosure", "self_disclosure", "自我呈现强度", "selfPresentation", "self_presentation", "personaStrength", "自我展示强度"],
    沟通开放度: ["沟通开放度", "communicationOpenness", "opennessCommunication", "openCommunication", "沟通开放性"],
    关系导向: ["关系导向", "relationalOrientation", "relationshipOrientation", "关系词", "情绪稳定线索", "emotionalStabilityClues"],
    开放性倾向: ["开放性倾向", "开放性", "openness", "开放", "open"],
    尽责性倾向: ["尽责性倾向", "尽责性", "conscientiousness", "责任感", "责任心"],
    外向性倾向: ["外向性倾向", "外向性", "extraversion", "extroversion", "外倾性"],
    宜人性倾向: ["宜人性倾向", "宜人性", "agreeableness", "亲和性"],
    情绪稳定性倾向: ["情绪稳定性倾向", "情绪稳定性", "emotionalStability", "emotional_stability", "神经质反向", "稳定性"],
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
  return `<svg class="radar-chart" viewBox="0 0 240 240" role="img" aria-label="${t("chartRadarTitle")}">${rings}<g class="radar-axis">${axes}</g><polygon class="radar-area" points="${points}" /></svg>`;
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
  const avatarVisualCues = normalizeStringArray(Array.isArray(data.avatarVisualCues) ? data.avatarVisualCues : []);
  const communicationAdvice = normalizeStringArray(Array.isArray(data.communicationAdvice) ? data.communicationAdvice : []);
  const riskPoints = normalizeStringArray(Array.isArray(data.riskPoints) ? data.riskPoints : []);
  const approachStyle = normalizeStringArray(Array.isArray(data.approachStyle) ? data.approachStyle : []);
  const evidenceChain = normalizeEvidenceChain(Array.isArray(data.evidenceChain) ? data.evidenceChain : []);

  visualReportOutput.innerHTML = `
    <div class="dashboard-grid">
      <article class="summary-card glass-card">
        <p class="eyebrow">COMMUNICATION PROFILE</p>
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

      ${renderListCards(t("avatarVisualCuesTitle"), avatarVisualCues, t("emptyVisualCues"))}
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
        <p>${escapeHtml(data.disclaimer || t("footerCompliance"))}</p>
      </article>
    </div>
  `;
}

function saveReportRecord(data, rawJson) {
  const compactData = compactReportData(data);
  const record = {
    id: createId(),
    type: "report",
    createdAt: new Date().toISOString(),
    oneSentence: data.basicProfile.oneSentence,
    confidence: data.basicProfile.confidence,
    scores: data.scores,
    bigFive: data.bigFive,
    rawJson,
    reportData: compactData,
  };
  const saved = saveHistory([record, ...getHistory()].slice(0, MAX_HISTORY_RECORDS));
  renderHistory();
  return saved;
}

function saveAnalysisHistory(reportData, rawJson) {
  return saveReportRecord(reportData, rawJson);
}

function handleRenderReport() {
  try {
    jsonError.textContent = "";
    const { data, rawJson } = parseReportJson();
    const normalizedData = normalizeReportData(data);
    renderVisualReport(normalizedData);
    const saved = saveAnalysisHistory(normalizedData, rawJson);
    showToast(saved ? "报告数据已导入并保存" : "报告数据已导入，历史记录未保存");
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
  const saved = saveAnalysisHistory(normalizedData, rawJson);
  showToast(saved ? "示例报告已生成并保存" : "示例报告已生成，历史记录未保存");
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
