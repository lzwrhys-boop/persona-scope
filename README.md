# PersonaScope

PersonaScope 是一个可部署到 GitHub Pages 的纯静态网站项目，用于基于用户提供的公开社交线索，生成可解释、可复核的沟通画像与可视化分析报告。当前版本是 API-ready 静态原型，分析流程先使用本地 mock / sample 数据，后续可替换为安全 API 服务。

## 产品理论框架

PersonaScope 当前采用“公开社交线索沟通画像模型”，包括：

1. 语言线索分析
2. 自我呈现理论
3. Big Five 倾向参考
4. 头像视觉线索
5. 综合沟通策略

所有结论都应基于用户提供的头像、签名、社交文案、截图等公开线索。分析结果用于辅助理解表达风格、自我呈现和互动方式，不应被包装成医学诊断、人格定论、关系判断、人品判断、能力判断或重大决策依据。

## 功能

- 首页、开始分析页、示例报告页、理论依据页、历史记录页
- 头像本地预览，不上传服务器
- 输入个性签名与最近三条社交媒体文案
- 支持恋爱了解、客户沟通、同事协作、朋友相处、自我画像等分析场景
- 开始 AI 分析后使用本地 mock 数据生成可视化报告
- 报告结构覆盖沟通风格维度、Big Five 倾向参考、自我呈现标签、头像视觉线索、综合沟通建议和证据链
- 保留开发者调试 Prompt 和手动导入报告 JSON 作为无 API 备用方案
- 历史记录支持保存报告、查看报告、删除单条记录和清空全部记录
- 移动端与桌面端自适应布局
- 当前为纯前端静态原型，无后端、无数据库、无真实模型 API 调用

## 文件结构

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
└── .nojekyll
```

## 本地预览

直接双击 `index.html` 即可在浏览器中打开。

也可以使用任意静态服务器预览，例如：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 部署到 GitHub Pages

1. 创建一个 GitHub 仓库并上传本项目文件。
2. 进入仓库的 `Settings`。
3. 打开 `Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. 选择 `main` 分支和 `/root` 目录。
6. 保存后等待 GitHub Pages 自动发布。

`.nojekyll` 用于确保 GitHub Pages 按原始静态文件发布项目。

## 隐私说明

PersonaScope 当前不包含任何后端服务，不连接数据库，也不调用真实模型 API。用户输入、头像预览和历史记录仅保存在当前浏览器本地。清除浏览器站点数据会删除历史记录。

## API 安全说明

未来如果接入 OpenAI / Claude / DeepSeek 等模型 API：

- 不要把 API Key 写在前端代码中。
- 不要把 API Key 上传到 GitHub。
- GitHub Pages 不能安全保存私密 API Key。
- 需要通过后端服务或 serverless function 转发 API 请求。
- 当前版本仍是纯前端 mock / static prototype，可本地双击 `index.html` 运行，也可部署到 GitHub Pages。

## 注意

PersonaScope 仅基于用户提供的公开社交线索生成沟通画像，用于辅助理解表达风格与互动方式，不构成医学诊断、人格定论、关系判断或重大决策依据。生成内容应作为理解与沟通的辅助参考，而不是对他人的确定性判断。
