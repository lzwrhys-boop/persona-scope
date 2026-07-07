const STORAGE_KEY = "personascope.history.v3";
const LANGUAGE_STORAGE_KEY = "personascope.language";
const ACCESS_TOKEN_STORAGE_KEY = "personascope.accessToken";
const DISCLAIMER = "PersonaScope 仅基于用户提供的视觉呈现与补充信息生成沟通画像，用于辅助理解第一印象和沟通风格倾向，仅供沟通参考。";
const translations = {
  zh: {
    languageToggleAria: "切换为英文",
    menuToggle: "菜单",
    navHome: "首页",
    navAnalyze: "开始分析",
    navVisual: "可视化报告",
    navSample: "示例报告",
    navTheory: "理论依据",
    navHistory: "最近分析",
    loginTitle: "进入 PersonaScope",
    loginSubtitle: "输入访问码，开始生成沟通画像",
    accessCodeLabel: "访问码",
    accessCodePlaceholder: "输入访问码",
    loginButton: "进入分析",
    loggingInButton: "正在进入...",
    logoutButton: "退出",
    heroEyebrow: "FACE PHOTO · COMMUNICATION PROFILE",
    heroTitleLine1: "看见第一印象",
    heroTitleLine2: "准备下一句话",
    heroDesc: "基于公开呈现与补充问题，生成不同场景下的开场方式、沟通节奏与避坑提醒。",
    heroPrimary: "上传照片开始分析",
    heroSecondary: "查看分析框架",
    previewKicker: "预览报告",
    previewTitle: "沟通画像预览",
    previewSummary: "从视觉呈现和补充问题看，报告会提炼可能给人的第一印象、沟通风格倾向与更自然的开场方式。",
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
    previewFrameworkLanguage: "补充文本线索",
    previewFrameworkPresentation: "视觉呈现",
    previewFrameworkAvatar: "画面呈现",
    previewFrameworkSocial: "沟通建议",
    previewFooter: "基于用户提供的视觉呈现与补充信息生成，仅供沟通参考。",
    valuePersonaTitle: "第一印象",
    valuePersonaDesc: "整理公开呈现带来的初始感受，避免只凭直觉判断。",
    valuePreferenceTitle: "沟通切入口",
    valuePreferenceDesc: "根据场景和目标，找到更自然的第一句话。",
    valueRiskTitle: "表达避坑",
    valueRiskDesc: "提醒哪些说法容易显得冒犯、急迫或目的性太强。",
    workflowEyebrow: "HOW IT WORKS",
    workflowTitle: "四步完成沟通准备",
    workflowStep1Label: "步骤 1",
    workflowStep1Title: "上传照片与线索",
    workflowStep2Label: "步骤 2",
    workflowStep2Title: "选择场景目标",
    workflowStep3Label: "步骤 3",
    workflowStep3Title: "生成沟通策略",
    workflowStep4Label: "步骤 4",
    workflowStep4Title: "查看可用话术",
    homeCompliance: "PersonaScope 仅基于用户提供的视觉呈现与补充信息生成沟通画像，用于辅助理解第一印象与沟通风格倾向，仅供沟通参考。",
    analyzeEyebrow: "START ANALYSIS",
    analyzeTitle: "从一张照片开始",
    analyzeDesc: "基于画面中的公开呈现，生成一份沟通画像。",
    nicknameLabel: "分析对象昵称",
    optionalLabel: "可选",
    optionalQuestionLabel: "选填",
    nicknamePlaceholder: "例如：某位朋友 / 客户 A / 自我画像",
    avatarLabel: "上传一张照片或截图",
    removeAvatar: "删除当前照片",
    avatarUploadTitle: "上传照片或截图",
    avatarUploadDesc: "正脸照、社交主页截图、聊天截图都可以。信息越清晰，建议越具体。",
    advancedSummary: "提升准确度（可选）",
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
    scenarioDating: "亲密关系",
    scenarioClient: "客户沟通",
    scenarioWork: "职场协作",
    scenarioFriend: "朋友社交",
    scenarioSelf: "自我呈现",
    goalLabel: "我想达成",
    statusLabel: "当前状态",
    questionLabel: "你想了解什么？",
    questionPlaceholder: "比如“我该怎么自然开场？”",
    generatePromptBtn: "开始分析",
    generatingBtn: "正在生成画像...",
    resetBtn: "清空当前内容",
    analysisPreviewEyebrow: "ANALYSIS PREVIEW",
    analysisPreviewTitle: "你的沟通建议会出现在这里",
    analysisWaitingTitle: "你的沟通建议会出现在这里",
    analysisWaitingCueLanguage: "第一感觉",
    analysisWaitingCuePresentation: "沟通倾向",
    analysisWaitingCueStrategy: "开场建议",
    loadingTitle: "正在生成你的沟通画像",
    loadingDesc: "请稍等几秒，系统正在整理第一印象、沟通倾向与开场建议。",
    loadingStage1: "识别公开呈现",
    loadingStage2: "生成沟通倾向",
    loadingStage3: "输出开场建议",
    analysisSummaryTitle: "沟通画像摘要",
    analysisDimensionsTitle: "核心维度",
    analysisTagsTitle: "关键标签",
    analysisAdviceTitle: "初步建议",
    viewVisualReportBtn: "查看可视化报告",
    generatedPromptEyebrow: "DEVELOPER DEBUG",
    generatedPromptTitle: "开发者调试 Prompt",
    promptStatusEmpty: "分析完成后，你会看到第一判断、开场话术、适合说的话和需要避开的表达。",
    promptStatusReady: "分析已完成。你可以查看右侧摘要，或进入完整可视化报告。",
    promptUsageNote: "当前为静态原型，主流程会先生成本地 mock 报告；下方 Prompt 仅作为无 API 备用调试材料。",
    promptOutputEmpty: "开始分析后，系统会在这里生成一段开发者调试 Prompt。",
    copyPromptBtn: "复制调试 Prompt",
    privacyInline: "当前前端会把分析请求发送到后端；照片文件本身仍仅用于本地预览，后端暂不读取图片内容。",
    saveHistoryBtn: "保存到历史记录",
    visualEyebrow: "VISUAL REPORT",
    visualTitle: "沟通画像",
    visualDesc: "分析完成后，系统将在这里展示第一印象、Big Five 倾向参考和可直接使用的沟通建议。",
    jsonPasteLabel: "手动导入报告数据",
    jsonHelper: "开发者调试模式：可导入结构化报告 JSON，系统会尽量自动识别兼容字段。",
    jsonPlaceholder: "可导入完整报告 JSON，例如包含 basicProfile、scores、bigFive、personaTags、avatarVisualCues、communicationAdvice、riskPoints、approachStyle、evidenceChain、disclaimer 等字段。",
    renderReportBtn: "导入报告数据",
    fillExampleJsonBtn: "生成示例报告",
    clearJsonBtn: "清空内容",
    localDashboardEyebrow: "LOCAL DASHBOARD",
    localDashboardTitle: "API-ready 分析流程",
    localDashboardStep1: "上传照片，也可以填写高级补充信息。",
    localDashboardStep2: "点击开始分析。",
    localDashboardStep3: "当前版本先使用本地 mock 数据生成报告。",
    localDashboardStep4: "未来可替换为安全 API 服务自动返回报告数据。",
    localDashboardPrivacy: "当前为静态原型，后续可接入安全 API 服务；报告记录暂存在本机浏览器。",
    waitingJsonEyebrow: "WAITING FOR REPORT",
    waitingJsonTitle: "等待生成可视化报告",
    waitingJsonDesc: "分析完成后，系统将在这里生成可视化沟通画像报告。也可以使用开发者调试模式手动导入报告数据。",
    chartBarTitle: "沟通风格维度图",
    chartRadarTitle: "场景专业维度",
    tagCloudTitle: "沟通标签",
    avatarVisualCuesTitle: "视觉呈现线索",
    communicationAdviceTitle: "适合说的话",
    riskPointsTitle: "不建议说的话",
    approachStyleTitle: "沟通切入口",
    evidenceChainTitle: "判断依据",
    firstReadTitle: "第一判断",
    confidenceLabel: "置信度",
    disclaimerTitle: "免责声明",
    emptyTags: "暂无标签",
    emptyVisualCues: "暂无视觉呈现线索",
    emptyAdvice: "暂无沟通建议",
    emptyRisks: "暂无相处雷区",
    emptyApproach: "暂无接近方式",
    emptyEvidenceTitle: "暂无证据链",
    emptyEvidenceDesc: "请检查 JSON 是否包含 evidenceChain。",
    emptySource: "未提供",
    emptyConclusion: "未提供结论",
    emptyEvidence: "未提供证据",
    fallbackOneSentence: "未提供一句话画像",
    fallbackPersonaSummary: "未提供画像总结",
    fallbackConfidenceReason: "未提供置信度说明",
    sampleEyebrow: "SAMPLE REPORT",
    sampleTitle: "《PersonaScope 示例报告：视觉呈现沟通画像》",
    sampleDesc: "以下样例展示报告的结构与表达方式。当前静态原型会使用本地示例数据模拟分析结果。",
    sampleCard1Title: "一句话画像",
    sampleCard1Desc: "该对象更像是一个重视表达质感、强调自我节奏，同时希望被理解为独立而有审美判断的人。沟通时适合先建立共同语境，再进入具体话题。",
    sampleCard2Title: "视觉呈现",
    sampleCard2Desc: "照片和补充信息可能共同传递出清爽、有边界、低压沟通更容易被接受的第一印象。",
    sampleCard3Title: "Big Five 倾向参考",
    sampleCard3Desc: "从公开表达线索看，开放性倾向可能偏中高，尽责性倾向中等偏高，外向性不宜过度判断。该参考来自文案中的审美表达、计划感和有限自我暴露。",
    sampleCard4Title: "情绪表达方式",
    sampleCard4Desc: "情绪表达偏间接，常通过隐喻、自嘲或场景描述释放压力。与其直接追问“你怎么了”，不如用低压方式邀请对方补充。",
    sampleCard5Title: "沟通偏好",
    sampleCard5Desc: "更适合具体、真诚、可选择的沟通方式。对方可能更容易回应有观察、有边界、有信息量的开场，而不是泛泛寒暄。",
    sampleCard6Title: "不建议说的话",
    sampleCard6Desc: "避免过快推进关系、连续追问隐私、用标签概括对方，或把单次视觉呈现当作重大判断依据。",
    sampleCard7Title: "适合的接近方式",
    sampleCard7Desc: "可以从对方公开表达中的具体主题切入：“你最近提到的那个观点挺有意思，我很好奇你为什么会这样看。”",
    sampleCard8Title: "证据链",
    sampleCard8Desc: "证据来自照片状态、用户问题、高级补充文本，以及这些信息共同形成的沟通场景。",
    sampleCard9Title: "置信度",
    sampleCard9Desc: "中。原因是线索来自视觉呈现和补充信息，适合作为沟通参考，但不能替代真实互动。",
    sampleCard10Title: "使用提醒",
    sampleCard10Desc: "报告只用于辅助理解表达风格和改善沟通，不应作为筛选、控制、关系判断或重大决策依据。真实互动仍需要持续验证。",
    theoryEyebrow: "FRAMEWORK",
    theoryTitle: "理论依据",
    theoryDesc: "PersonaScope 采用视觉呈现沟通画像模型：照片视觉呈现 → Big Five 倾向参考 → 用户问题 → 沟通建议。",
    theoryLanguageTitle: "补充信息：让建议更贴近场景",
    theoryLanguageDesc: "通过情绪词、自我指代、关系词、行动词、判断词与表达抽象度，观察公开文本中呈现出的沟通风格、情绪显性度、自我暴露程度与关系导向。",
    theorySocialTitle: "自我呈现：识别 TA 想被如何看见",
    theorySocialDesc: "照片和补充信息只用于观察视觉呈现与沟通场景，帮助生成更低压、更具体的沟通建议。",
    theoryBigFiveTitle: "Big Five：倾向参考",
    theoryBigFiveDesc: "Big Five 仅作为倾向参考框架，用于辅助整理画面可能带来的沟通感受。",
    theoryAvatarTitle: "画面呈现",
    theoryAvatarDesc: "照片仅用于整理画面中的公开呈现，结论只能作为沟通参考。",
    theoryStrategyTitle: "综合沟通策略：从分析到可执行建议",
    theoryStrategyDesc: "系统会综合视觉呈现和用户问题，输出更适合的开场方式、沟通节奏、表达避坑与互动建议。建议仅用于提升沟通理解，不用于操控他人。",
    principleTitle: "边界原则",
    principleDesc: "PersonaScope 仅基于用户提供的视觉呈现与补充信息生成沟通画像，用于辅助理解第一印象与沟通风格倾向，仅供沟通参考。",
    historyEyebrow: "LOCAL HISTORY",
    historyTitle: "最近分析",
    historyDesc: "最近生成的报告会暂存在本机浏览器，方便你回来查看。",
    clearHistoryBtn: "清空全部记录",
    noHistoryEyebrow: "NO HISTORY",
    noHistoryTitle: "还没有保存任何记录",
    noHistoryDesc: "开始分析或生成可视化报告后，会在这里看到最近记录。",
    goAnalyzeBtn: "去开始分析",
    promptRecord: "调试 Prompt 记录",
    reportRecord: "可视化报告记录",
    unnamedObject: "未命名对象",
    unnamedReport: "未命名报告",
    unsetScenario: "未设置场景",
    emptyField: "未填写",
    postSummary: "文案摘要",
    uploadedAvatar: "已上传照片",
    yes: "是",
    no: "否",
    screenshotMeta: "社交截图",
    imageCountUnit: "张",
    viewPrompt: "查看调试 Prompt",
    collapsePrompt: "收起调试 Prompt",
    copyPrompt: "复制调试 Prompt",
    deleteRecord: "删除",
    viewReport: "查看报告",
    copyJson: "复制 JSON",
    totalScore: "综合分",
    bigFiveLabel: "Big Five 倾向参考",
    toastHistoryQuotaFailed: "历史记录空间不足，本次结果未保存",
    toastLoginRequired: "请输入访问码",
    toastLoginSuccess: "已进入 PersonaScope",
    toastLogoutSuccess: "已退出",
    toastNeedInput: "请先上传照片，或填写一个想了解的问题",
    toastAnalysisSuccess: "分析已完成",
    toastAnalysisMockSuccess: "分析已完成，当前使用本地 mock 报告",
    toastResetDone: "当前内容已清空",
    toastPhotoPreview: "照片已本地预览",
    toastPhotoReadFailed: "照片读取失败，请重新选择图片",
    toastPhotoRemoved: "照片已删除",
    toastScreenshotLimit: "最多只能上传 {count} 张社交截图",
    toastScreenshotPartial: "最多 {max} 张，已处理前 {count} 张",
    toastScreenshotReadFailed: "截图读取失败，请重新选择图片",
    toastScreenshotMixed: "已添加 {added} 张，跳过 {skipped} 张异常图片",
    toastScreenshotRemoved: "截图已删除",
    imageErrorChooseFile: "请选择图片文件",
    imageErrorEmpty: "图片文件为空或已损坏",
    imageErrorMaxSingle: "单张图片不能超过 {size}",
    imageErrorMaxTotal: "图片总大小不能超过 {size}",
    imageErrorUnsupported: "请选择 jpg、jpeg、png 或 webp 图片",
    imageErrorUnknownFormat: "图片格式无法识别，可能是损坏或伪装文件",
    imageErrorMismatch: "图片扩展名、类型和内容不一致",
    imageErrorReadFailed: "图片读取失败，请换一张未损坏的图片",
    toastNothingToCopy: "没有可复制内容",
    toastCopied: "已复制",
    toastStartAnalysisFirst: "请先开始分析",
    toastPromptSaved: "调试 Prompt 已保存到历史记录",
    toastReportImportedSaved: "报告数据已导入并保存",
    toastReportImportedNoHistory: "报告数据已导入，历史记录未保存",
    toastReportImportFailed: "报告数据导入失败",
    toastSampleSaved: "示例报告已生成并保存",
    toastSampleNoHistory: "示例报告已生成，历史记录未保存",
    toastRecordDeleted: "记录已删除",
    toastNoHistory: "当前没有历史记录",
    toastHistoryCleared: "全部历史记录已清空",
    errorServiceConnection: "分析服务连接失败，请稍后重试。如果服务刚启动，可能需要等待几十秒",
    errorInvalidApiJson: "API 返回格式不是有效 JSON",
    errorLoginExpired: "登录已失效，请重新输入访问码",
    errorApiRequestFailed: "分析 API 请求失败",
    errorAccessCodeInvalid: "访问码不正确",
    errorAnalysisFailed: "分析失败，请稍后重试",
    errorImportJsonFirst: "请先导入报告 JSON 数据。",
    errorJsonParseFailed: "JSON 格式仍无法解析。请检查是否缺少逗号、引号或括号；也可以点击“生成示例报告”对照格式。",
    errorNoJsonObject: "没有检测到 JSON 对象。请导入以 { 开头的 JSON，或直接点击“生成示例报告”查看格式。",
    errorJsonIncomplete: "JSON 看起来没有完整闭合。请检查最后是否缺少 }。",
    errorInvalidJsonObject: "JSON 内容不是有效对象。",
    screenshotAlt: "社交截图 {index}",
    removeScreenshotAria: "删除第 {index} 张截图",
    footerCompliance: "PersonaScope 仅基于用户提供的视觉呈现与补充信息生成沟通画像，用于辅助理解第一印象与沟通风格倾向，仅供沟通参考。"
  },
  en: {
    languageToggleAria: "Switch to Chinese",
    menuToggle: "Menu",
    navHome: "Home",
    navAnalyze: "Analyze",
    navVisual: "Report",
    navSample: "Sample Report",
    navTheory: "Framework",
    navHistory: "Recent",
    loginTitle: "Enter PersonaScope",
    loginSubtitle: "Enter your access code to generate communication profiles",
    accessCodeLabel: "Access code",
    accessCodePlaceholder: "Enter access code",
    loginButton: "Enter",
    loggingInButton: "Entering...",
    logoutButton: "Exit",
    heroEyebrow: "FACE PHOTO · COMMUNICATION PROFILE",
    heroTitleLine1: "Read the First Impression",
    heroTitleLine2: "Prepare the Next Line",
    heroDesc: "Generate openings, conversation pacing, and phrases to avoid for different scenarios based on public presentation and optional context.",
    heroPrimary: "Upload Photo to Analyze",
    heroSecondary: "View Framework",
    previewKicker: "PREVIEW REPORT",
    previewTitle: "Communication Profile Preview",
    previewSummary: "Based on visual presentation and optional context, the report highlights possible first impressions, communication-style tendencies, and natural ways to start.",
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
    previewFrameworkLanguage: "Supplemental Text",
    previewFrameworkPresentation: "Visual Presentation",
    previewFrameworkAvatar: "Image Presence",
    previewFrameworkSocial: "Communication Guidance",
    previewFooter: "Generated from user-provided visual presentation and optional context. For communication reference only.",
    valuePersonaTitle: "First Impression",
    valuePersonaDesc: "Organize the initial feeling created by public presentation, so you are not relying on instinct alone.",
    valuePreferenceTitle: "Opening Angle",
    valuePreferenceDesc: "Find a more natural first line based on the scenario and goal.",
    valueRiskTitle: "Phrases to Avoid",
    valueRiskDesc: "Flag wording that may feel intrusive, rushed, or overly goal-driven.",
    workflowEyebrow: "HOW IT WORKS",
    workflowTitle: "Prepare the Conversation in 4 Steps",
    workflowStep1Label: "Step 1",
    workflowStep1Title: "Upload Photo and Cues",
    workflowStep2Label: "Step 2",
    workflowStep2Title: "Choose Scenario Goal",
    workflowStep3Label: "Step 3",
    workflowStep3Title: "Generate Strategy",
    workflowStep4Label: "Step 4",
    workflowStep4Title: "Review Usable Lines",
    homeCompliance: "PersonaScope generates communication profiles only from user-provided visual presentation and optional context. It supports first-impression and communication-style reference only.",
    analyzeEyebrow: "START ANALYSIS",
    analyzeTitle: "Start with one photo",
    analyzeDesc: "Generate a communication profile from the public presentation in the image.",
    nicknameLabel: "Profile nickname",
    optionalLabel: "Optional",
    optionalQuestionLabel: "Optional",
    nicknamePlaceholder: "Example: a friend / client A / self profile",
    avatarLabel: "Upload a photo or screenshot",
    removeAvatar: "Remove photo",
    avatarUploadTitle: "Upload a photo or screenshot",
    avatarUploadDesc: "Face photos, profile screenshots, or chat screenshots all work. Clearer context leads to more specific suggestions.",
    advancedSummary: "Improve Accuracy (Optional)",
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
    scenarioDating: "Relationship",
    scenarioClient: "Client Communication",
    scenarioWork: "Workplace Collaboration",
    scenarioFriend: "Friends",
    scenarioSelf: "Self Presentation",
    goalLabel: "Goal",
    statusLabel: "Current Status",
    questionLabel: "What do you want to understand?",
    questionPlaceholder: "For example: “How can I start naturally?”",
    generatePromptBtn: "Start Analysis",
    generatingBtn: "Generating profile...",
    resetBtn: "Clear Current Input",
    analysisPreviewEyebrow: "ANALYSIS PREVIEW",
    analysisPreviewTitle: "Your communication suggestions will appear here",
    analysisWaitingTitle: "Your communication suggestions will appear here",
    analysisWaitingCueLanguage: "First feeling",
    analysisWaitingCuePresentation: "Communication tendency",
    analysisWaitingCueStrategy: "Opening advice",
    loadingTitle: "Generating your communication profile",
    loadingDesc: "Please wait a few seconds while the system organizes first impressions, communication tendencies, and opening advice.",
    loadingStage1: "Reading public presentation",
    loadingStage2: "Generating communication tendency",
    loadingStage3: "Creating opening advice",
    analysisSummaryTitle: "Communication Profile Summary",
    analysisDimensionsTitle: "Key Dimensions",
    analysisTagsTitle: "Key Tags",
    analysisAdviceTitle: "Initial Guidance",
    viewVisualReportBtn: "View Visual Report",
    generatedPromptEyebrow: "DEVELOPER DEBUG",
    generatedPromptTitle: "Developer Debug Prompt",
    promptStatusEmpty: "After analysis, you’ll see the first read, opening lines, useful phrases, and expressions to avoid.",
    promptStatusReady: "Analysis complete. You can review the summary here or open the full visual report.",
    promptUsageNote: "This static prototype currently generates a local mock report. The prompt below is only a fallback for developer debugging.",
    promptOutputEmpty: "After analysis starts, a developer debug prompt will appear here.",
    copyPromptBtn: "Copy Debug Prompt",
    privacyInline: "The frontend sends analysis requests to the backend. Photo files are still local previews only; the backend does not read image content yet.",
    saveHistoryBtn: "Save to History",
    visualEyebrow: "VISUAL REPORT",
    visualTitle: "Communication Profile",
    visualDesc: "Once analysis is complete, this area shows the first impression, Big Five tendency reference, and ready-to-use communication advice.",
    jsonPasteLabel: "Import Report Data Manually",
    jsonHelper: "Developer debug mode: import structured report JSON and the system will try to recognize compatible fields.",
    jsonPlaceholder: "Import complete report JSON, such as fields including basicProfile, scores, bigFive, personaTags, avatarVisualCues, communicationAdvice, riskPoints, approachStyle, evidenceChain, and disclaimer.",
    renderReportBtn: "Import Report Data",
    fillExampleJsonBtn: "Generate Sample Report",
    clearJsonBtn: "Clear Content",
    localDashboardEyebrow: "LOCAL DASHBOARD",
    localDashboardTitle: "API-ready Analysis Flow",
    localDashboardStep1: "Upload a photo, with optional advanced details.",
    localDashboardStep2: "Click Start Analysis.",
    localDashboardStep3: "The current version generates a local mock report first.",
    localDashboardStep4: "A secure API service can replace the mock data later.",
    localDashboardPrivacy: "This is a static prototype that can later connect to a secure API service. Reports are temporarily saved in this browser.",
    waitingJsonEyebrow: "WAITING FOR REPORT",
    waitingJsonTitle: "Waiting for Visual Report",
    waitingJsonDesc: "Once analysis is complete, the system will generate a visual communication profile report here. Developer debug mode can also import report data manually.",
    chartBarTitle: "Communication Style Dimensions",
    chartRadarTitle: "Scenario Dimensions",
    tagCloudTitle: "Communication Tags",
    avatarVisualCuesTitle: "Visual Presentation Cues",
    communicationAdviceTitle: "What to Say",
    riskPointsTitle: "What to Avoid",
    approachStyleTitle: "Opening Angle",
    evidenceChainTitle: "Reasoning",
    firstReadTitle: "First Read",
    confidenceLabel: "Confidence",
    disclaimerTitle: "Disclaimer",
    emptyTags: "No tags yet",
    emptyVisualCues: "No visual presentation cues yet",
    emptyAdvice: "No communication advice yet",
    emptyRisks: "No interaction risks yet",
    emptyApproach: "No approach style yet",
    emptyEvidenceTitle: "No evidence chain yet",
    emptyEvidenceDesc: "Check whether the JSON includes evidenceChain.",
    emptySource: "No source",
    emptyConclusion: "No conclusion",
    emptyEvidence: "No evidence",
    fallbackOneSentence: "No one-sentence profile provided",
    fallbackPersonaSummary: "No profile summary provided",
    fallbackConfidenceReason: "No confidence explanation provided",
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
    historyTitle: "Recent Analyses",
    historyDesc: "Recent reports are temporarily saved in this browser for quick review.",
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
    toastHistoryQuotaFailed: "History storage is full. This result was not saved.",
    toastLoginRequired: "Please enter the access code",
    toastLoginSuccess: "Entered PersonaScope",
    toastLogoutSuccess: "Signed out",
    toastNeedInput: "Please upload a photo or enter a question first",
    toastAnalysisSuccess: "Analysis complete",
    toastAnalysisMockSuccess: "Analysis complete. Using a local mock report.",
    toastResetDone: "Current input cleared",
    toastPhotoPreview: "Photo preview is ready",
    toastPhotoReadFailed: "Photo failed to load. Please choose another image.",
    toastPhotoRemoved: "Photo removed",
    toastScreenshotLimit: "You can upload up to {count} social screenshots",
    toastScreenshotPartial: "Up to {max} images. Processing the first {count}.",
    toastScreenshotReadFailed: "Screenshot failed to load. Please choose another image.",
    toastScreenshotMixed: "Added {added}, skipped {skipped} invalid images",
    toastScreenshotRemoved: "Screenshot removed",
    imageErrorChooseFile: "Please choose an image file",
    imageErrorEmpty: "The image file is empty or damaged",
    imageErrorMaxSingle: "Each image must be under {size}",
    imageErrorMaxTotal: "Total image size must be under {size}",
    imageErrorUnsupported: "Please choose a jpg, jpeg, png, or webp image",
    imageErrorUnknownFormat: "Image format could not be recognized. It may be damaged or disguised.",
    imageErrorMismatch: "Image extension, type, and content do not match",
    imageErrorReadFailed: "Image failed to load. Please choose an undamaged image.",
    toastNothingToCopy: "Nothing to copy",
    toastCopied: "Copied",
    toastStartAnalysisFirst: "Please start analysis first",
    toastPromptSaved: "Debug prompt saved to history",
    toastReportImportedSaved: "Report data imported and saved",
    toastReportImportedNoHistory: "Report data imported. History was not saved.",
    toastReportImportFailed: "Report data import failed",
    toastSampleSaved: "Sample report generated and saved",
    toastSampleNoHistory: "Sample report generated. History was not saved.",
    toastRecordDeleted: "Record deleted",
    toastNoHistory: "No history records yet",
    toastHistoryCleared: "All history records cleared",
    errorServiceConnection: "Analysis service connection failed. Please try again later. If the service just started, it may need a few dozen seconds.",
    errorInvalidApiJson: "The API response is not valid JSON",
    errorLoginExpired: "Login expired. Please enter the access code again.",
    errorApiRequestFailed: "Analysis API request failed",
    errorAccessCodeInvalid: "Incorrect access code",
    errorAnalysisFailed: "Analysis failed. Please try again later.",
    errorImportJsonFirst: "Please import report JSON data first.",
    errorJsonParseFailed: "JSON still cannot be parsed. Check for missing commas, quotes, or brackets, or use the sample report as a reference.",
    errorNoJsonObject: "No JSON object detected. Import JSON starting with {, or generate a sample report.",
    errorJsonIncomplete: "The JSON object does not seem fully closed. Check whether the final } is missing.",
    errorInvalidJsonObject: "JSON content is not a valid object.",
    screenshotAlt: "Social screenshot {index}",
    removeScreenshotAria: "Remove screenshot {index}",
    footerCompliance: "PersonaScope generates communication profiles only from user-provided public social signals. It supports understanding expression style and interaction patterns, and does not constitute medical diagnosis, definitive personality judgment, relationship judgment, or a basis for major decisions."
  }
};

const form = document.querySelector("#personaForm");
const loginScreen = document.querySelector("#loginScreen");
const loginForm = document.querySelector("#loginForm");
const accessCodeInput = document.querySelector("#accessCodeInput");
const loginError = document.querySelector("#loginError");
const logoutButton = document.querySelector("#logoutButton");
const submitButton = form.querySelector('button[type="submit"]');
const faceImageInput = document.querySelector("#faceImageInput") || document.querySelector("#avatarInput");
const facePreview = document.querySelector("#facePreview") || document.querySelector("#avatarPreview");
const faceUploadZone = document.querySelector("#faceUploadZone") || document.querySelector("#avatarDropZone");
const removeAvatarBtn = document.querySelector("#removeAvatarBtn");
const screenshotInput = document.querySelector("#screenshotInput");
const screenshotDropZone = document.querySelector("#screenshotDropZone");
const screenshotGrid = document.querySelector("#screenshotGrid");
const screenshotCount = document.querySelector("#screenshotCount");
const nicknameInput = document.querySelector("#nicknameInput");
const signatureInput = document.querySelector("#signatureInput");
const postInputs = Array.from(document.querySelectorAll(".post-input"));
const questionInput = document.querySelector("#questionInput");
const goalOptions = document.querySelector("#goalOptions");
const statusOptions = document.querySelector("#statusOptions");
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
const MOCK_MODE = false;
const API_ENDPOINT = "https://persona-scope-api.onrender.com/api/analyze";
const API_LOGIN_ENDPOINT = "https://persona-scope-api.onrender.com/api/login";
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const MAX_TOTAL_IMAGE_BYTES = 20 * 1024 * 1024;
const MAX_SCREENSHOT_COUNT = 6;
const MAX_HISTORY_RECORDS = 20;
const MAX_HISTORY_RAW_JSON_LENGTH = 12000;
const MAX_HISTORY_PROMPT_LENGTH = 12000;
const SCENE_CONFIG = {
  客户沟通: {
    theory: "本报告参考信任形成模型、风险感知、关系销售与沟通适配相关框架，仅用于沟通准备，不构成定论。",
    dimensions: ["信任建立路径", "风险敏感度", "价值沟通偏好", "决策理性倾向", "推进节奏", "关系维护偏好"],
  },
  职场协作: {
    theory: "本报告参考 Big Five、心理安全感、反馈接受与协作风格相关框架，仅用于沟通准备，不构成定论。",
    dimensions: ["可信呈现感", "责任边界感", "协作开放度", "反馈接受方式", "沟通直接度", "压力下表达"],
  },
  亲密关系: {
    theory: "本报告参考成人依恋、社会渗透、关系边界与情绪表达相关框架，仅用于沟通准备，不判断关系结果。",
    dimensions: ["关系稳定表达", "投入表达方式", "回应主动性", "情绪表达度", "边界清晰度", "亲密推进节奏"],
  },
  朋友社交: {
    theory: "本报告参考不确定性降低、社会渗透与对话风格适配相关框架，仅用于沟通准备，不构成定论。",
    dimensions: ["破冰难度", "话题开放度", "幽默接受度", "距离感", "相处节奏", "情绪松弛度"],
  },
  自我呈现: {
    theory: "本报告参考印象管理、自我呈现与 Big Five 外显线索相关框架，仅用于沟通准备，不构成定论。",
    dimensions: ["第一印象一致性", "专业感呈现", "亲和力呈现", "表达记忆点", "边界感", "社交可接近度"],
  },
  自我画像: {
    theory: "本报告参考印象管理、自我呈现与 Big Five 外显线索相关框架，仅用于沟通准备，不构成定论。",
    dimensions: ["第一印象一致性", "专业感呈现", "亲和力呈现", "表达记忆点", "边界感", "社交可接近度"],
  },
};
const SCENE_GOALS = {
  客户沟通: ["预约见面", "推进合作", "维护关系", "唤醒沉默客户", "处理异议"],
  职场协作: ["提需求", "汇报进展", "请求支持", "表达不同意见", "化解尴尬"],
  亲密关系: ["自然开场", "表达好感", "恢复聊天", "推进关系", "降低压力"],
  朋友社交: ["轻松破冰", "找话题", "拉近关系", "避免尴尬", "保持联系"],
  自我呈现: ["优化头像印象", "优化个人介绍", "提升专业感", "提升亲和力", "增强记忆点"],
  自我画像: ["优化头像印象", "优化个人介绍", "提升专业感", "提升亲和力", "增强记忆点"],
};
const SCENE_STATUSES = {
  客户沟通: ["刚认识", "聊过但没推进", "之前答应过但没下文", "正在犹豫", "已经合作过"],
  职场协作: ["第一次沟通", "对方比较强势", "对方比较忙", "之前有分歧", "需要对方支持"],
  亲密关系: ["刚认识", "聊过几次", "关系变冷", "有点暧昧", "想重新开启"],
  朋友社交: ["第一次认识", "不太熟", "偶尔聊天", "有点尴尬", "想拉近关系"],
  自我呈现: ["用于社交平台", "用于职场展示", "用于认识新朋友", "用于客户沟通", "用于个人介绍"],
  自我画像: ["用于社交平台", "用于职场展示", "用于认识新朋友", "用于客户沟通", "用于个人介绍"],
};
const SCENE_LABELS = {
  亲密关系: { zh: "亲密关系", en: "Relationship" },
  客户沟通: { zh: "客户沟通", en: "Client Communication" },
  职场协作: { zh: "职场协作", en: "Workplace Collaboration" },
  朋友社交: { zh: "朋友社交", en: "Friends" },
  自我呈现: { zh: "自我呈现", en: "Self Presentation" },
  自我画像: { zh: "自我呈现", en: "Self Presentation" },
};
const GOAL_LABELS = {
  预约见面: { zh: "预约见面", en: "Book a Meeting" },
  推进合作: { zh: "推进合作", en: "Move Collaboration Forward" },
  维护关系: { zh: "维护关系", en: "Maintain the Relationship" },
  唤醒沉默客户: { zh: "唤醒沉默客户", en: "Re-engage a Quiet Client" },
  处理异议: { zh: "处理异议", en: "Handle Objections" },
  提需求: { zh: "提需求", en: "Make a Request" },
  汇报进展: { zh: "汇报进展", en: "Report Progress" },
  请求支持: { zh: "请求支持", en: "Ask for Support" },
  表达不同意见: { zh: "表达不同意见", en: "Disagree Constructively" },
  化解尴尬: { zh: "化解尴尬", en: "Defuse Awkwardness" },
  自然开场: { zh: "自然开场", en: "Start Naturally" },
  表达好感: { zh: "表达好感", en: "Show Interest" },
  恢复聊天: { zh: "恢复聊天", en: "Restart the Chat" },
  推进关系: { zh: "推进关系", en: "Move Closer" },
  降低压力: { zh: "降低压力", en: "Lower the Pressure" },
  轻松破冰: { zh: "轻松破冰", en: "Break the Ice" },
  找话题: { zh: "找话题", en: "Find a Topic" },
  拉近关系: { zh: "拉近关系", en: "Get Closer" },
  避免尴尬: { zh: "避免尴尬", en: "Avoid Awkwardness" },
  保持联系: { zh: "保持联系", en: "Stay in Touch" },
  优化头像印象: { zh: "优化头像印象", en: "Improve Photo Impression" },
  优化个人介绍: { zh: "优化个人介绍", en: "Improve Bio" },
  提升专业感: { zh: "提升专业感", en: "Increase Professional Feel" },
  提升亲和力: { zh: "提升亲和力", en: "Increase Approachability" },
  增强记忆点: { zh: "增强记忆点", en: "Make It More Memorable" },
};
const STATUS_LABELS = {
  刚认识: { zh: "刚认识", en: "Just Met" },
  聊过但没推进: { zh: "聊过但没推进", en: "Talked, No Progress Yet" },
  之前答应过但没下文: { zh: "之前答应过但没下文", en: "Previously Agreed, No Follow-up" },
  正在犹豫: { zh: "正在犹豫", en: "Still Hesitating" },
  已经合作过: { zh: "已经合作过", en: "Worked Together Before" },
  第一次沟通: { zh: "第一次沟通", en: "First Conversation" },
  对方比较强势: { zh: "对方比较强势", en: "They Seem Quite Assertive" },
  对方比较忙: { zh: "对方比较忙", en: "They Seem Busy" },
  之前有分歧: { zh: "之前有分歧", en: "Had Disagreement Before" },
  需要对方支持: { zh: "需要对方支持", en: "Need Their Support" },
  聊过几次: { zh: "聊过几次", en: "Talked a Few Times" },
  关系变冷: { zh: "关系变冷", en: "Conversation Has Cooled" },
  有点暧昧: { zh: "有点暧昧", en: "Slightly Flirtatious" },
  想重新开启: { zh: "想重新开启", en: "Want to Restart" },
  第一次认识: { zh: "第一次认识", en: "First Time Meeting" },
  不太熟: { zh: "不太熟", en: "Not Very Close" },
  偶尔聊天: { zh: "偶尔聊天", en: "Occasional Chat" },
  有点尴尬: { zh: "有点尴尬", en: "A Bit Awkward" },
  想拉近关系: { zh: "想拉近关系", en: "Want to Get Closer" },
  用于社交平台: { zh: "用于社交平台", en: "For Social Platforms" },
  用于职场展示: { zh: "用于职场展示", en: "For Workplace Presence" },
  用于认识新朋友: { zh: "用于认识新朋友", en: "For Meeting New Friends" },
  用于客户沟通: { zh: "用于客户沟通", en: "For Client Communication" },
  用于个人介绍: { zh: "用于个人介绍", en: "For Personal Bio" },
};
const SAMPLE_REPORT_DATA = {
  basicProfile: {
    oneSentence: "从当前资料看，可能给人一种清爽、有边界、适合低压开场的第一印象。",
    personaSummary: "当前样例把视觉呈现状态和补充信息转化为沟通建议。由于样例不读取照片内容，具体表达会保持保守，并优先给出可直接使用的开场方向。",
    confidence: "中",
    confidenceReason: "样例包含照片上传状态、用户问题和高级补充文字；照片内容未被读取时，置信度应保持中低。"
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
    "“我看到这个点挺有意思，想听听你是怎么想的。”",
    "“如果你方便的话，我想从一个轻松的问题开始聊。”",
    "“我不急着下结论，先想了解一下你的感受。”"
  ],
  riskPoints: [
    "不建议说的话：不要把单张照片或一次表达直接当作重大判断依据。",
    "避免过快推进亲密感，或用标签化语言概括对方。",
    "不要围绕隐私或敏感属性做推断。"
  ],
  approachStyle: [
    "第一句话建议低压、具体、可选择：先提一个观察到的点，再把回应权交给对方。",
    "可以这样开口：“我注意到你给人的感觉挺清爽，我想用一个轻松的问题开始，可以吗？”",
    "如果对方回应简短，先停在轻话题，不要马上追问隐私或关系态度。"
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
      evidence: "当前样例只知道照片上传状态，不能描述具体画面细节。",
      source: "来自照片状态"
    }
  ],
  disclaimer: DISCLAIMER
};

let avatarDataUrl = "";
let avatarFileSize = 0;
let socialScreenshots = [];
let selectedGoal = "";
let selectedStatus = "";
let generatedPrompt = "";
let generatedRecordDraft = null;
let expandedHistoryId = "";
let toastTimer = null;
let unicornSceneInstance = null;
let unicornSdkPromise = null;
let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) === "en" ? "en" : "zh";
let renderedReportData = null;
let loadingStageTimer = null;

function t(key, replacements = {}) {
  const value = translations[currentLanguage]?.[key] ?? translations.zh[key] ?? key;
  return Object.entries(replacements).reduce((text, [name, replacement]) => text.replaceAll(`{${name}}`, replacement), value);
}

function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY) || "";
}

function setAuthenticated(token) {
  if (token) localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, token);
  document.body.classList.add("is-authenticated");
  document.body.classList.remove("is-login-required");
  if (loginError) loginError.textContent = "";
}

function showLogin(message = "") {
  localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
  document.body.classList.remove("is-authenticated");
  document.body.classList.add("is-login-required");
  if (loginError) loginError.textContent = message;
  if (accessCodeInput) window.setTimeout(() => accessCodeInput.focus(), 0);
}

function applyAuthState() {
  if (getAccessToken()) {
    setAuthenticated(getAccessToken());
  } else {
    showLogin();
  }
}

function setLoginLoading(isLoading) {
  const button = loginForm?.querySelector('button[type="submit"]');
  if (!button) return;
  button.disabled = isLoading;
  button.textContent = isLoading ? t("loggingInButton") : t("loginButton");
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

function getAnalysisLoadingHtml(stageText = t("loadingStage1")) {
  const stages = [t("loadingStage1"), t("loadingStage2"), t("loadingStage3")];
  return `
    <div class="analysis-loading">
      <div class="signal-pulse" aria-hidden="true">
        <svg viewBox="0 0 220 72" role="img" focusable="false">
          <path class="signal-pulse-glow" d="M6 42 H38 L48 42 L58 18 L74 58 L88 34 L104 42 H132 L144 42 L154 26 L166 50 L178 42 H214" />
          <path class="signal-pulse-line" d="M6 42 H38 L48 42 L58 18 L74 58 L88 34 L104 42 H132 L144 42 L154 26 L166 50 L178 42 H214" />
        </svg>
      </div>
      <h4>${t("loadingTitle")}</h4>
      <p>${t("loadingDesc")}</p>
      <div class="loading-progress" aria-hidden="true"><span></span></div>
      <div class="loading-stage-list">
        ${stages.map((stage, index) => `<span class="${stage === stageText || index === 0 ? "active" : ""}">${escapeHtml(stage)}</span>`).join("")}
      </div>
      <small id="loadingStageText">${escapeHtml(stageText)}</small>
    </div>
  `;
}

function setSubmitLoading(isLoading) {
  if (!submitButton) return;
  submitButton.disabled = isLoading;
  submitButton.textContent = isLoading ? t("generatingBtn") : t("generatePromptBtn");
  submitButton.classList.toggle("is-loading", isLoading);
}

function startAnalysisLoading() {
  const stages = [t("loadingStage1"), t("loadingStage2"), t("loadingStage3")];
  let stageIndex = 0;
  window.clearInterval(loadingStageTimer);
  setSubmitLoading(true);
  promptStatus.textContent = t("loadingDesc");
  analysisPreview.innerHTML = getAnalysisLoadingHtml(stages[stageIndex]);
  loadingStageTimer = window.setInterval(() => {
    stageIndex = Math.min(stageIndex + 1, stages.length - 1);
    const stageNode = document.querySelector("#loadingStageText");
    if (stageNode) stageNode.textContent = stages[stageIndex];
    document.querySelectorAll(".loading-stage-list span").forEach((node, index) => {
      node.classList.toggle("active", index <= stageIndex);
    });
  }, 1300);
}

function stopAnalysisLoading() {
  window.clearInterval(loadingStageTimer);
  loadingStageTimer = null;
  setSubmitLoading(false);
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage === "en" ? "en" : "zh-CN";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage]?.[key] || translations.zh[key]) element.textContent = t(key);
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
  renderGoalOptions();
  renderStatusOptions();
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
    showToast(t("toastHistoryQuotaFailed"));
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
    selectedGoal: record.selectedGoal,
    selectedStatus: record.selectedStatus,
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
    sceneMetrics: normalizeSceneMetrics(data.sceneMetrics).slice(0, 8),
    evidenceChain: normalizeEvidenceChain(data.evidenceChain).slice(0, 8),
    disclaimer: data.disclaimer,
    scenario: data.scenario,
    selectedGoal: data.selectedGoal,
    selectedStatus: data.selectedStatus,
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
  return selected ? selected.value : "亲密关系";
}

function getGoalsForScenario(scenario) {
  return SCENE_GOALS[scenario] || SCENE_GOALS["亲密关系"];
}

function getStatusesForScenario(scenario) {
  return SCENE_STATUSES[scenario] || SCENE_STATUSES["亲密关系"];
}

function getLocalizedLabel(labels, fallback = "") {
  if (!labels || typeof labels !== "object") return fallback;
  return labels[currentLanguage] || labels.zh || fallback;
}

function translateScenario(scenario) {
  return getLocalizedLabel(SCENE_LABELS[scenario], scenario || t("unsetScenario"));
}

function translateGoal(goal) {
  return getLocalizedLabel(GOAL_LABELS[goal], goal || "");
}

function translateStatus(status) {
  return getLocalizedLabel(STATUS_LABELS[status], status || "");
}

function translateConfidence(value) {
  const normalized = String(value || "").trim().toLowerCase();
  const labels = {
    高: { zh: "高", en: "High" },
    high: { zh: "高", en: "High" },
    中: { zh: "中", en: "Medium" },
    medium: { zh: "中", en: "Medium" },
    mid: { zh: "中", en: "Medium" },
    低: { zh: "低", en: "Low" },
    low: { zh: "低", en: "Low" },
  };
  return getLocalizedLabel(labels[normalized], value || "");
}

function getSelectedGoal() {
  const goals = getGoalsForScenario(getSelectedScenario());
  return goals.includes(selectedGoal) ? selectedGoal : goals[0];
}

function getSelectedStatus() {
  const statuses = getStatusesForScenario(getSelectedScenario());
  return statuses.includes(selectedStatus) ? selectedStatus : statuses[0];
}

function renderGoalOptions() {
  if (!goalOptions) return;
  const goals = getGoalsForScenario(getSelectedScenario());
  if (!goals.includes(selectedGoal)) selectedGoal = goals[0];
  goalOptions.innerHTML = goals.map((goal) => (
    `<button class="goal-pill${goal === selectedGoal ? " active" : ""}" type="button" data-goal="${escapeHtml(goal)}">${escapeHtml(translateGoal(goal))}</button>`
  )).join("");
}

function renderStatusOptions() {
  if (!statusOptions) return;
  const statuses = getStatusesForScenario(getSelectedScenario());
  if (!statuses.includes(selectedStatus)) selectedStatus = statuses[0];
  statusOptions.innerHTML = statuses.map((status) => (
    `<button class="goal-pill status-pill${status === selectedStatus ? " active" : ""}" type="button" data-status="${escapeHtml(status)}">${escapeHtml(translateStatus(status))}</button>`
  )).join("");
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
  if (!file) return t("imageErrorChooseFile");
  if (!file.size) return t("imageErrorEmpty");
  if (file.size > MAX_IMAGE_BYTES) return t("imageErrorMaxSingle", { size: formatMb(MAX_IMAGE_BYTES) });
  const totalBytes = getCurrentImageBytes() - replacingBytes + file.size;
  if (totalBytes > MAX_TOTAL_IMAGE_BYTES) return t("imageErrorMaxTotal", { size: formatMb(MAX_TOTAL_IMAGE_BYTES) });
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
    return { ok: false, message: t("imageErrorUnsupported") };
  }
  try {
    const signature = await readImageSignature(file);
    if (!signature) return { ok: false, message: t("imageErrorUnknownFormat") };
    if (!isFileTypeConsistent(file, signature)) return { ok: false, message: t("imageErrorMismatch") };
    await verifyImageDecodes(file);
    return { ok: true };
  } catch (error) {
    console.warn("图片校验失败。", error);
    return { ok: false, message: t("imageErrorReadFailed") };
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
    selectedGoal: getSelectedGoal(),
    selectedStatus: getSelectedStatus(),
    question: questionInput.value.trim(),
    hasAvatar: Boolean(avatarDataUrl),
    screenshotCount: socialScreenshots.length,
    language: currentLanguage,
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
    version: "personascope.face-photo.v1",
    locale: currentLanguage,
    input,
    frameworks: ["visualPresentation", "bigFiveVisualTendency", "communicationStrategy"],
    outputFormat: "visualReportJson",
    debugPrompt: buildPrompt(input),
  };
}

function buildPrompt(data) {
  const displayName = data.nickname || "这张照片";
  const normalizedSignature = data.signature || "未提供";
  const normalizedQuestion = data.question || "未提供，请根据分析场景自行给出最有价值的沟通建议。";
  const normalizedPosts = data.posts.map((post, index) => `${index + 1}. ${post || "未提供"}`).join("\n");
  const photoMaterial = data.hasAvatar
    ? "【照片】用户已上传照片。但当前前端只发送是否上传的状态，未把图片像素传给模型；如果没有额外视觉描述，不得编造画面细节。"
    : "【照片】用户未上传照片，请不要基于照片进行推测。";
  const screenshotMaterial = data.screenshotCount
    ? `【高级补充图片】用户已选择 ${data.screenshotCount} 张补充图片。但当前前端不会把图片内容发送给模型；除非用户在文本中描述，否则不要分析图片细节。`
    : "【高级补充图片】用户未提供补充图片。";

  return `你是一名专业、谨慎、重证据的中文沟通画像分析助手。请基于照片中的公开呈现描述与用户补充问题，为「${displayName}」生成沟通画像。

重要：最终只输出严格 JSON。不要输出 Markdown，不要输出解释文字，不要使用代码块包裹 JSON。

用户输入资料：
- 分析对象昵称：${displayName}
- 分析场景：${data.scenario}
- 我想达成：${data.selectedGoal || "未指定"}
- 当前状态：${data.selectedStatus || "未指定"}
- ${photoMaterial}
- ${screenshotMaterial}
- 调试说明：本 Prompt 仅作为开发者调试或备用方案。当前链路没有把照片像素发送给模型，也不做 OCR 或图像识别。

高级补充文本：
${normalizedSignature}

更多补充文字：
${normalizedPosts}

用户想了解的问题：
${normalizedQuestion}

分析要求：
0. 所有沟通切入口、适合说的话、不建议说的话，都必须围绕“分析场景 + 我想达成 + 当前状态”生成。
1. 分析任务是：基于照片中的公开呈现描述与用户补充问题，生成沟通画像。
2. Big Five 只能作为“倾向参考”框架，用来描述照片和补充信息可能带来的沟通印象，不能写成测评结论。
3. 所有结论都必须使用“可能、倾向、从照片呈现看、从补充信息看”等克制措辞。
4. 如果只知道用户上传了照片，但没有获得照片内容，请明确降低置信度，主要基于用户问题和补充文字给出保守建议，不要假装看到了具体画面细节。
5. 结果只聚焦：第一判断、沟通切入口、适合说的话、不建议说的话、判断依据。
6. 所有分数必须是 0-100 的倾向分数。
7. 每个关键结论必须回到用户提供的照片状态、补充问题、签名或补充文字。
8. 不得判断政治、宗教、健康、性取向、犯罪倾向、收入水平、招聘录用、能力高低或道德品质。
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
      "source": "照片状态/用户问题/高级补充文本/补充图片状态"
    }
  ],
  "disclaimer": "${DISCLAIMER}"
}`;
}

function mockAnalysis(payload) {
  const reportData = JSON.parse(JSON.stringify(SAMPLE_REPORT_DATA));
  const input = payload.input || {};
  const displayName = input.nickname || translations.zh.unnamedObject;
  const goalText = input.selectedGoal || "自然开场";
  const statusText = input.selectedStatus || "刚认识";
  const filledPosts = (input.posts || []).filter(Boolean).length;
  const hasVisualClues = input.hasAvatar || input.screenshotCount > 0;

  reportData.basicProfile.oneSentence = `${displayName}在“${input.scenario || "当前场景"} / ${goalText} / ${statusText}”里，当前更适合做低压、具体、可选择的开场。`;
  reportData.basicProfile.personaSummary = `基于${input.scenario || "当前场景"}中的视觉呈现状态、沟通目标、当前状态和补充信息，报告会把第一印象转化为更容易执行的沟通建议。当前前端 mock 不读取照片内容，因此不会描述具体画面细节。`;
  reportData.basicProfile.confidenceReason = `样例分析参考了${hasVisualClues ? "照片/补充图片上传状态、" : ""}可选问题和 ${filledPosts} 条高级补充文字；由于 mock 模式不读取图片内容，结论仅用于演示新版流程。`;
  reportData.evidenceChain = [
    {
      conclusion: `当前更适合围绕“${goalText} / ${statusText}”用低压、具体的方式开场`,
      evidence: input.question || `用户选择了“${input.scenario || "当前场景"} / ${goalText} / ${statusText}”，因此先给出对应状态下的低压开场建议。`,
      source: "用户问题"
    },
    {
      conclusion: "Big Five 只能作为倾向参考",
      evidence: "当前链路没有把照片内容传给模型，不能把上传状态当作具体视觉证据。",
      source: "照片状态"
    },
    {
      conclusion: "补充文字能帮助建议更贴近场景",
      evidence: (input.posts || []).find(Boolean) || input.signature || "未填写高级补充信息，建议会更保守。",
      source: filledPosts || input.signature ? "高级补充文本" : "输入完整度"
    }
  ];

  return normalizeReportData(reportData);
}

async function runAnalysis(payload) {
  if (MOCK_MODE) return mockAnalysis(payload);

  let response = null;
  try {
    response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({
        locale: payload.locale,
        language: payload.locale,
        input: payload.input,
        frameworks: payload.frameworks,
        outputFormat: payload.outputFormat,
      }),
    });
  } catch (error) {
    throw new Error(t("errorServiceConnection"));
  }

  let result = null;
  try {
    result = await response.json();
  } catch (error) {
    throw new Error(t("errorInvalidApiJson"));
  }

  if (!response.ok || !result?.ok) {
    if (response.status === 401) {
      showLogin(t("errorLoginExpired"));
      throw new Error(t("errorLoginExpired"));
    }
    throw new Error(result?.message || result?.error || t("errorApiRequestFailed"));
  }

  return normalizeReportData(result.data);
}

function getFriendlyAnalysisError(error) {
  const message = String(error?.message || "");
  if (/Failed to fetch|NetworkError|Load failed|fetch/i.test(message)) {
    return t("errorServiceConnection");
  }
  return message || t("errorAnalysisFailed");
}

async function handleLogin(event) {
  event.preventDefault();
  const accessCode = accessCodeInput.value.trim();
  if (!accessCode) {
    loginError.textContent = t("toastLoginRequired");
    return;
  }

  setLoginLoading(true);
  loginError.textContent = "";
  try {
    const response = await fetch(API_LOGIN_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accessCode }),
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || !result?.ok || !result?.token) {
      throw new Error(result?.error || t("errorAccessCodeInvalid"));
    }
    accessCodeInput.value = "";
    setAuthenticated(result.token);
    showToast(t("toastLoginSuccess"));
  } catch (error) {
    loginError.textContent = error?.message || t("errorAccessCodeInvalid");
  } finally {
    setLoginLoading(false);
  }
}

function handleLogout() {
  showLogin();
  showToast(t("toastLogoutSuccess"));
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
  if (submitButton?.disabled) return;
  const data = collectAnalysisInput();
  if (!hasMeaningfulInput(data)) {
    showToast(t("toastNeedInput"));
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

  startAnalysisLoading();
  try {
    const reportData = await runAnalysis(payload);
    reportData.scenario = data.scenario;
    reportData.selectedGoal = data.selectedGoal;
    reportData.selectedStatus = data.selectedStatus;
    stopAnalysisLoading();
    renderVisualReport(reportData);
    renderAnalysisPreview(reportData);
    promptStatus.textContent = t("promptStatusReady");
    saveAnalysisHistory(reportData, JSON.stringify(reportData, null, 2));
    jsonError.textContent = "";
    showToast(MOCK_MODE ? t("toastAnalysisMockSuccess") : t("toastAnalysisSuccess"));
  } catch (error) {
    console.warn("分析流程失败。", error);
    stopAnalysisLoading();
    analysisPreview.innerHTML = getAnalysisWaitingHtml();
    promptStatus.textContent = t("promptStatusEmpty");
    showToast(getFriendlyAnalysisError(error));
  }
}

function handleReset() {
  stopAnalysisLoading();
  avatarDataUrl = "";
  avatarFileSize = 0;
  socialScreenshots = [];
  faceImageInput.value = "";
  screenshotInput.value = "";
  facePreview.innerHTML = "+";
  removeAvatarBtn.hidden = true;
  renderScreenshotGrid();
  const defaultScenario = document.querySelector('input[name="scenario"][value="亲密关系"]');
  if (defaultScenario) defaultScenario.checked = true;
  selectedGoal = "";
  selectedStatus = "";
  renderGoalOptions();
  renderStatusOptions();
  renderedReportData = null;
  updateGeneratedState("", null);
  analysisPreview.innerHTML = getAnalysisWaitingHtml();
  showToast(t("toastResetDone"));
}

async function handleFacePhotoFile(file) {
  if (!file) {
    avatarDataUrl = "";
    avatarFileSize = 0;
    facePreview.innerHTML = "+";
    removeAvatarBtn.hidden = true;
    return;
  }
  const validation = await validateImageFile(file, { replacingBytes: avatarFileSize });
  if (!validation.ok) {
    showToast(validation.message);
    faceImageInput.value = "";
    return;
  }
  try {
    avatarDataUrl = await readFileAsDataUrl(file);
    avatarFileSize = file.size;
    facePreview.innerHTML = `<img src="${avatarDataUrl}" alt="${escapeHtml(t("avatarLabel"))}">`;
    removeAvatarBtn.hidden = false;
    showToast(t("toastPhotoPreview"));
  } catch (error) {
    console.warn("照片读取失败。", error);
    faceImageInput.value = "";
    showToast(t("toastPhotoReadFailed"));
  }
}

function removeAvatar() {
  avatarDataUrl = "";
  avatarFileSize = 0;
  faceImageInput.value = "";
  facePreview.innerHTML = "+";
  removeAvatarBtn.hidden = true;
  showToast(t("toastPhotoRemoved"));
}

function renderScreenshotGrid() {
  screenshotCount.textContent = t("screenshotCount", { count: socialScreenshots.length });
  screenshotGrid.innerHTML = socialScreenshots
    .map((item, index) => `
      <div class="screenshot-item">
        <img src="${item.dataUrl}" alt="${escapeHtml(t("screenshotAlt", { index: index + 1 }))}">
        <button class="remove-shot" type="button" data-id="${item.id}" aria-label="${escapeHtml(t("removeScreenshotAria", { index: index + 1 }))}">×</button>
      </div>
    `)
    .join("");
}

async function addScreenshotFiles(files) {
  const incomingFiles = Array.from(files || []);
  const availableSlots = MAX_SCREENSHOT_COUNT - socialScreenshots.length;
  if (!incomingFiles.length) return;
  if (!availableSlots) {
    showToast(t("toastScreenshotLimit", { count: MAX_SCREENSHOT_COUNT }));
    return;
  }
  let addedCount = 0;
  let skippedCount = 0;
  const filesToProcess = incomingFiles.slice(0, availableSlots);
  if (incomingFiles.length > availableSlots) showToast(t("toastScreenshotPartial", { max: MAX_SCREENSHOT_COUNT, count: availableSlots }));

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
      showToast(t("toastScreenshotReadFailed"));
    }
  }
  if (addedCount && skippedCount) showToast(t("toastScreenshotMixed", { added: addedCount, skipped: skippedCount }));
  screenshotInput.value = "";
}

function bindDropZone(dropZone, onFiles) {
  if (!dropZone) return;
  const stopBrowserFileOpen = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  ["dragenter", "dragover"].forEach((eventName) => {
    dropZone.addEventListener(eventName, (event) => {
      stopBrowserFileOpen(event);
      dropZone.classList.add("drag-over");
      dropZone.classList.add("active");
    });
  });
  ["dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(eventName, (event) => {
      stopBrowserFileOpen(event);
      dropZone.classList.remove("drag-over");
      dropZone.classList.remove("active");
    });
  });
  dropZone.addEventListener("drop", (event) => {
    stopBrowserFileOpen(event);
    onFiles(event.dataTransfer && event.dataTransfer.files);
  });
}

async function copyText(text) {
  if (!text) {
    showToast(t("toastNothingToCopy"));
    return;
  }
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      throw new Error("Clipboard API unavailable");
    }
    showToast(t("toastCopied"));
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
    showToast(t("toastCopied"));
  }
}

function saveCurrentPrompt() {
  if (!generatedRecordDraft || !generatedPrompt) {
    showToast(t("toastStartAnalysisFirst"));
    return;
  }
  const record = { ...generatedRecordDraft, id: createId(), createdAt: new Date().toISOString() };
  const saved = saveHistory([record, ...getHistory()].slice(0, MAX_HISTORY_RECORDS));
  if (saved) expandedHistoryId = record.id;
  renderHistory();
  if (saved) showToast(t("toastPromptSaved"));
}

function parseReportJson() {
  const rawInput = jsonInput.value.trim();
  if (!rawInput) throw new Error(t("errorImportJsonFirst"));
  const rawJson = extractJsonCandidate(rawInput);
  try {
    return { data: JSON.parse(rawJson), rawJson };
  } catch (error) {
    console.warn("JSON 解析失败。", error);
    throw new Error(t("errorJsonParseFailed"));
  }
}

function extractJsonCandidate(rawInput) {
  const trimmedInput = rawInput.trim();
  const fencedMatch = trimmedInput.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const text = (fencedMatch ? fencedMatch[1] : trimmedInput).trim();
  if (text.startsWith("{") && text.endsWith("}")) return text;

  const start = text.indexOf("{");
  if (start === -1) {
    throw new Error(t("errorNoJsonObject"));
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

  throw new Error(t("errorJsonIncomplete"));
}

function normalizeReportData(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error(t("errorInvalidJsonObject"));
  const basicProfile = getFirstObject(data, ["basicProfile", "profile", "basic_profile", "summaryProfile", "基础画像", "基本画像"]);
  return {
    scenario: coerceText(getFirstValue(data, ["scenario", "scene", "场景"]), ["text", "value"]) || "",
    selectedGoal: coerceText(getFirstValue(data, ["selectedGoal", "goal", "communicationGoal", "沟通目标"]), ["text", "value"]) || "",
    selectedStatus: coerceText(getFirstValue(data, ["selectedStatus", "status", "currentStatus", "当前状态"]), ["text", "value"]) || "",
    basicProfile: {
      oneSentence: coerceText(getFirstValue(basicProfile, ["oneSentence", "oneSentenceProfile", "one_sentence", "profile", "headline", "一句话画像", "一句话总结"]) || getFirstValue(data, ["oneSentence", "oneSentenceProfile", "one_sentence", "一句话画像", "一句话总结"]), ["text", "content", "summary", "value"]) || t("fallbackOneSentence"),
      personaSummary: coerceText(getFirstValue(basicProfile, ["personaSummary", "persona_summary", "summary", "persona", "description", "人设总结", "画像总结"]) || getFirstValue(data, ["personaSummary", "persona_summary", "summary", "人设总结", "画像总结"]), ["text", "content", "summary", "value"]) || t("fallbackPersonaSummary"),
      confidence: coerceText(getFirstValue(basicProfile, ["confidence", "confidenceLevel", "confidence_level", "置信度"]) || getFirstValue(data, ["confidence", "置信度"]), ["level", "value", "text"]) || "中",
      confidenceReason: coerceText(getFirstValue(basicProfile, ["confidenceReason", "confidence_reason", "reason", "confidenceExplanation", "置信度说明", "置信度原因"]) || getFirstValue(data, ["confidenceReason", "confidence_reason", "置信度说明", "置信度原因"]), ["reason", "content", "text", "value"]) || t("fallbackConfidenceReason"),
    },
    scores: normalizeScores(getFirstValue(data, ["scores", "score", "metrics", "profileScores", "linguisticCues", "communicationStyle", "综合评分", "画像分数", "补充信息", "沟通风格维度"]), ["表达温度", "边界清晰度", "自我暴露程度", "沟通开放度", "关系导向"]),
    bigFive: normalizeScores(getFirstValue(data, ["bigFive", "big_five", "big5", "personality", "personalityScores", "bigFiveTendencyReference", "Big Five 倾向参考"]), ["开放性倾向", "尽责性倾向", "外向性倾向", "宜人性倾向", "情绪稳定性倾向"]),
    personaTags: normalizeStringArray(getFirstValue(data, ["personaTags", "tags", "persona_tags", "labels", "人设标签", "标签"]), ["tag", "name", "label", "value", "title", "text", "标签"]),
    avatarVisualCues: normalizeStringArray(getFirstValue(data, ["avatarVisualCues", "avatar_visual_cues", "visualCues", "avatarCues", "画面呈现", "视觉线索"]), ["cue", "content", "text", "value", "title", "线索"]),
    communicationAdvice: normalizeStringArray(getFirstValue(data, ["communicationAdvice", "advice", "communication_advice", "suggestions", "沟通建议", "建议"]), ["advice", "content", "text", "value", "title", "建议"]),
    riskPoints: normalizeStringArray(getFirstValue(data, ["riskPoints", "risks", "risk_points", "redFlags", "相处雷区", "风险点", "雷区"]), ["risk", "point", "content", "text", "value", "title", "风险", "雷区"]),
    approachStyle: normalizeStringArray(getFirstValue(data, ["approachStyle", "approach", "approach_style", "approaches", "接近方式", "适合接近方式"]), ["style", "content", "text", "value", "title", "方式"]),
    sceneMetrics: normalizeSceneMetrics(getFirstValue(data, ["sceneMetrics", "scene_metrics", "scenarioMetrics", "场景维度", "专业维度"])),
    evidenceChain: normalizeEvidenceChain(getFirstValue(data, ["evidenceChain", "evidence_chain", "evidence", "proofs", "证据链", "依据"])),
    disclaimer: coerceText(getFirstValue(data, ["disclaimer", "免责声明"]), ["text", "content", "value"]) || DISCLAIMER,
  };
}

function getSceneConfig(scenario) {
  return SCENE_CONFIG[scenario] || SCENE_CONFIG[getSelectedScenario()] || SCENE_CONFIG["亲密关系"];
}

function normalizeSceneMetrics(value) {
  const items = Array.isArray(value) ? value : value && typeof value === "object" ? Object.values(value) : [];
  return items.map((item) => {
    if (!item || typeof item !== "object") return null;
    const label = coerceText(getFirstValue(item, ["label", "name", "dimension", "维度", "名称"]), ["text", "value"]);
    if (!label) return null;
    return {
      label,
      score: clampScore(getFirstValue(item, ["score", "value", "分数", "得分"])),
      basis: coerceText(getFirstValue(item, ["basis", "reason", "evidence", "依据", "理由"]), ["text", "content", "value"]) || "基于公开呈现与补充信息的沟通参考。",
      suggestion: coerceText(getFirstValue(item, ["suggestion", "advice", "建议"]), ["text", "content", "value"]) || "建议保持低压、具体、尊重边界的沟通方式。",
    };
  }).filter(Boolean);
}

function buildFallbackSceneMetrics(data, scenario) {
  const config = getSceneConfig(scenario);
  const sourceScores = [...Object.values(data.scores || {}), ...Object.values(data.bigFive || {})].map(clampScore).filter(Number.isFinite);
  const fallbackScores = sourceScores.length ? sourceScores : [62, 68, 72, 66, 70, 64];
  return config.dimensions.map((label, index) => ({
    label,
    score: fallbackScores[index % fallbackScores.length],
    basis: "基于公开呈现、补充问题与通用沟通线索的参考映射。",
    suggestion: "建议把它作为沟通准备参考，先用低压、具体、可选择的方式试探回应。",
  }));
}

function getReportScenario(data) {
  return data.scenario || getSelectedScenario();
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
  const shortLabel = (label) => {
    const normalized = String(label).replace(/倾向/g, "").replace(/情绪稳定性/g, "稳定性");
    return normalized || label;
  };
  const entries = Object.entries(bigFive).map(([label, value]) => [shortLabel(label), value]);
  const center = 150;
  const maxRadius = 82;
  const labelRadius = 124;
  const points = entries.map(([, value], index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / entries.length;
    const radius = (value / 100) * maxRadius;
    return `${center + Math.cos(angle) * radius},${center + Math.sin(angle) * radius}`;
  }).join(" ");
  const axes = entries.map(([label, value], index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / entries.length;
    const x = center + Math.cos(angle) * maxRadius;
    const y = center + Math.sin(angle) * maxRadius;
    const tx = center + Math.cos(angle) * labelRadius;
    const ty = center + Math.sin(angle) * labelRadius;
    const anchor = Math.cos(angle) > 0.35 ? "start" : Math.cos(angle) < -0.35 ? "end" : "middle";
    return `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" /><text x="${tx}" y="${ty}" text-anchor="${anchor}">${escapeHtml(label)} ${value}</text>`;
  }).join("");
  const rings = [0.25, 0.5, 0.75, 1].map((ratio) => {
    const ringPoints = entries.map(([,], index) => {
      const angle = -Math.PI / 2 + (Math.PI * 2 * index) / entries.length;
      const radius = maxRadius * ratio;
      return `${center + Math.cos(angle) * radius},${center + Math.sin(angle) * radius}`;
    }).join(" ");
    return `<polygon points="${ringPoints}" class="radar-ring" />`;
  }).join("");
  const progressRows = entries.map(([label, value]) => `
    <div class="radar-progress-row">
      <div class="bar-meta"><span>${escapeHtml(label)}</span><strong>${value}</strong></div>
      <div class="bar-track"><span style="width: ${value}%"></span></div>
    </div>
  `).join("");
  return `
    <div class="radar-wrap">
      <svg class="radar-chart" viewBox="0 0 300 300" role="img" aria-label="${t("chartRadarTitle")}">${rings}<g class="radar-axis">${axes}</g><polygon class="radar-area" points="${points}" /></svg>
      <div class="radar-progress-list">${progressRows}</div>
    </div>
  `;
}

function renderBigFiveBars(bigFive) {
  const shortLabel = (label) => String(label)
    .replace(/情绪稳定性倾向/g, "稳定性")
    .replace(/情绪稳定性/g, "稳定性")
    .replace(/倾向/g, "");
  return `
    <div class="big-five-bars">
      ${Object.entries(bigFive || {}).map(([label, value]) => `
        <div class="bar-row">
          <div class="bar-meta"><span>${escapeHtml(shortLabel(label))}</span><strong>${value}</strong></div>
          <div class="bar-track"><span style="width: ${value}%"></span></div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSceneMetrics(data) {
  const scenario = getReportScenario(data);
  const config = getSceneConfig(scenario);
  const metrics = normalizeSceneMetrics(data.sceneMetrics).length
    ? normalizeSceneMetrics(data.sceneMetrics)
    : buildFallbackSceneMetrics(data, scenario);
  return `
    <div class="scene-framework-note">${escapeHtml(config.theory)}</div>
    <div class="scene-metric-list">
      ${metrics.slice(0, 6).map((item) => `
        <div class="scene-metric-row">
          <div class="bar-meta"><span>${escapeHtml(item.label)}</span><strong>${item.score}</strong></div>
          <div class="bar-track"><span style="width: ${item.score}%"></span></div>
          <p>${escapeHtml(item.suggestion || item.basis)}</p>
        </div>
      `).join("")}
    </div>
  `;
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
  const scenario = getReportScenario(data);
  const communicationAdvice = normalizeStringArray(Array.isArray(data.communicationAdvice) ? data.communicationAdvice : []);
  const riskPoints = normalizeStringArray(Array.isArray(data.riskPoints) ? data.riskPoints : []);
  const approachStyle = normalizeStringArray(Array.isArray(data.approachStyle) ? data.approachStyle : []);
  const evidenceChain = normalizeEvidenceChain(Array.isArray(data.evidenceChain) ? data.evidenceChain : []);

  visualReportOutput.innerHTML = `
    <div class="dashboard-grid">
      <article class="summary-card glass-card">
        <p class="eyebrow">${t("firstReadTitle")}</p>
        <h3>${escapeHtml(data.basicProfile.oneSentence)}</h3>
        <p>${escapeHtml(data.basicProfile.personaSummary)}</p>
        <div class="confidence-strip">
          <span>${t("confidenceLabel")}：${escapeHtml(translateConfidence(data.basicProfile.confidence))}</span>
          <p>${escapeHtml(data.basicProfile.confidenceReason)}</p>
        </div>
        <p class="report-disclaimer">${escapeHtml(data.disclaimer || t("footerCompliance"))}</p>
      </article>

      ${renderListCards(t("approachStyleTitle"), approachStyle, t("emptyApproach"))}
      ${renderListCards(t("communicationAdviceTitle"), communicationAdvice, t("emptyAdvice"))}
      ${renderListCards(t("riskPointsTitle"), riskPoints, t("emptyRisks"))}

      <article class="dashboard-card glass-card evidence-card">
        <h3>${t("evidenceChainTitle")}</h3>
        <div class="evidence-list">
          ${(evidenceChain.length ? evidenceChain : [{ conclusion: t("emptyEvidenceTitle"), evidence: t("emptyEvidenceDesc"), source: t("emptySource") }]).slice(0, 4).map((item) => `
            <div>
              <strong>${escapeHtml(item.conclusion || t("emptyConclusion"))}</strong>
              <p>${escapeHtml(item.evidence || t("emptyEvidence"))}</p>
              <span>${escapeHtml(item.source || t("emptySource"))}</span>
            </div>
          `).join("")}
        </div>
      </article>

      <article class="dashboard-card glass-card">
        <h3>${escapeHtml(translateScenario(scenario))} · ${t("chartRadarTitle")}</h3>
        ${renderSceneMetrics(data)}
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
    showToast(saved ? t("toastReportImportedSaved") : t("toastReportImportedNoHistory"));
  } catch (error) {
    jsonError.textContent = error.message;
    showToast(t("toastReportImportFailed"));
  }
}

function fillExampleJson() {
  const normalizedData = mockAnalysis(buildAnalysisPayload(collectAnalysisInput()));
  const rawJson = JSON.stringify(normalizedData, null, 2);
  jsonInput.value = rawJson;
  jsonError.textContent = "";
  renderVisualReport(normalizedData);
  const saved = saveAnalysisHistory(normalizedData, rawJson);
  showToast(saved ? t("toastSampleSaved") : t("toastSampleNoHistory"));
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
        <span class="scenario-tag">${escapeHtml(translateScenario(record.scenario))}</span>
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
        <span class="scenario-tag">${t("confidenceLabel")}：${escapeHtml(translateConfidence(record.confidence || "中"))}</span>
      </div>
      <ul class="history-meta">
        <li>${t("totalScore")}：${Object.values(record.scores || {}).map(clampScore).join(" / ")}</li>
        <li>${t("bigFiveLabel")}：${Object.values(record.bigFive || {}).map(clampScore).join(" / ")}</li>
      </ul>
      <div class="history-actions">
        <button class="button small view-report-history" type="button" data-id="${escapeHtml(record.id)}">${t("viewReport")}</button>
        <button class="button small danger delete-history" type="button" data-id="${escapeHtml(record.id)}">${t("deleteRecord")}</button>
      </div>
    </article>
  `;
}

function deleteHistoryRecord(id) {
  saveHistory(getHistory().filter((record) => record.id !== id));
  if (expandedHistoryId === id) expandedHistoryId = "";
  renderHistory();
  showToast(t("toastRecordDeleted"));
}

function clearAllHistory() {
  if (!getHistory().length) {
    showToast(t("toastNoHistory"));
    return;
  }
  localStorage.removeItem(STORAGE_KEY);
  expandedHistoryId = "";
  renderHistory();
  showToast(t("toastHistoryCleared"));
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
loginForm.addEventListener("submit", handleLogin);
form.addEventListener("reset", () => setTimeout(handleReset, 0));
faceImageInput.addEventListener("change", () => handleFacePhotoFile(faceImageInput.files && faceImageInput.files[0]));
screenshotInput.addEventListener("change", () => addScreenshotFiles(screenshotInput.files));
removeAvatarBtn.addEventListener("click", removeAvatar);
screenshotGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".remove-shot");
  if (!button) return;
  socialScreenshots = socialScreenshots.filter((item) => item.id !== button.dataset.id);
  renderScreenshotGrid();
  showToast(t("toastScreenshotRemoved"));
});
bindDropZone(faceUploadZone, (files) => handleFacePhotoFile(files && files[0]));
bindDropZone(screenshotDropZone, addScreenshotFiles);
document.querySelectorAll('input[name="scenario"]').forEach((input) => {
  input.addEventListener("change", () => {
    selectedGoal = "";
    selectedStatus = "";
    renderGoalOptions();
    renderStatusOptions();
  });
});
if (goalOptions) {
  goalOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-goal]");
    if (!button) return;
    selectedGoal = button.dataset.goal;
    renderGoalOptions();
  });
}
if (statusOptions) {
  statusOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-status]");
    if (!button) return;
    selectedStatus = button.dataset.status;
    renderStatusOptions();
  });
}
copyPromptBtn.addEventListener("click", () => copyText(generatedPrompt));
saveHistoryBtn.addEventListener("click", saveCurrentPrompt);
renderReportBtn.addEventListener("click", handleRenderReport);
fillExampleJsonBtn.addEventListener("click", fillExampleJson);
clearJsonBtn.addEventListener("click", clearJsonReport);
clearHistoryBtn.addEventListener("click", clearAllHistory);
historyList.addEventListener("click", handleHistoryClick);
if (languageToggle) languageToggle.addEventListener("click", toggleLanguage);
if (logoutButton) logoutButton.addEventListener("click", handleLogout);

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
renderGoalOptions();
renderStatusOptions();
applyAuthState();
