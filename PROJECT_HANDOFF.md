# PROJECT HANDOFF

## 1. 项目名称

PersonaScope

## 2. 当前项目定位

PersonaScope 是一个基于公开社交线索的人际沟通画像生成器。用户可以上传头像、社交截图，输入个性签名和社交文案，点击开始 AI 分析后生成结构化沟通画像，并沉淀为可视化报告。当前版本仍是纯前端 API-ready 静态原型，分析结果先使用本地 mock / sample 数据，后续可替换为安全 API 服务。

## 3. 当前技术栈

- 纯 HTML
- CSS
- JavaScript
- localStorage
- GitHub Pages
- 不接后端
- 不接真实模型 API
- 不使用数据库

## 4. 已完成功能

- 首页
- 开始分析页
- 头像上传与本地预览
- 社交截图上传与本地预览
- 社交文案输入
- 开始 AI 分析的本地 mock 报告生成
- 开发者调试 Prompt 生成与复制
- 历史记录 localStorage
- 可视化报告页
- 手动导入报告 JSON 解析
- 柱状图
- Big Five 雷达图
- 标签云
- 沟通建议
- 相处雷区
- 证据链
- 示例报告页
- 理论依据页

## 5. 当前已知问题

- 可视化报告页需要继续增强手动导入 JSON 的容错能力。
- 某些导入 JSON 如果字段不标准，可能会出现数据为 0 或 `[object Object]`。
- 需要继续优化“生成示例报告”按钮和错误提示。
- 手机端还需要进一步检查。

## 6. 下一步建议

- 优先修复手动导入 JSON 字段兼容和 `[object Object]` 问题。
- 持续优化一键生成示例报告。
- 优化可视化报告页面的空状态。
- 再进行一次手机端适配检查。
- 最后重新上传 GitHub，更新 GitHub Pages。

## 7. 当前部署方式

项目文件直接上传到 GitHub 仓库 `persona-scope`，通过 GitHub Pages 部署。

## 8. 重要限制

后续修改必须保持：

- 当前不接真实模型 API
- 不接后端
- 不使用数据库
- 不引入复杂依赖
- 保持 GitHub Pages 可部署
- 保持本地双击 `index.html` 可运行

## 9. API 安全说明

未来接入 OpenAI / Claude / DeepSeek 等模型 API 时必须保持：

- 不要把 API Key 写在前端
- 不要把 API Key 上传 GitHub
- GitHub Pages 不能安全保存私密 API Key
- 后续需要通过后端或 serverless function 转发 API 请求
- 当前版本仍是纯前端 mock / static prototype
