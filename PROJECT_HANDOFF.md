# PROJECT HANDOFF

## 1. 项目名称

PersonaScope

## 2. 当前项目定位

PersonaScope 是一个基于公开社交线索的人际沟通画像生成器。用户可以上传头像、社交截图，输入个性签名和社交文案，生成可复制到 ChatGPT 的专业 Prompt，并支持将 ChatGPT 返回的 JSON 粘贴回网站生成可视化报告。

## 3. 当前技术栈

- 纯 HTML
- CSS
- JavaScript
- localStorage
- GitHub Pages
- 不接后端
- 不接 API
- 不使用数据库

## 4. 已完成功能

- 首页
- 开始分析页
- 头像上传与本地预览
- 社交截图上传与本地预览
- 社交文案输入
- Prompt 生成
- Prompt 复制
- 历史记录 localStorage
- 可视化报告页
- JSON 粘贴解析
- 柱状图
- Big Five 雷达图
- 标签云
- 沟通建议
- 相处雷区
- 证据链
- 示例报告页
- 理论依据页

## 5. 当前已知问题

- 可视化报告页需要继续增强 JSON 容错能力。
- 某些 ChatGPT 返回的 JSON 如果字段不标准，可能会出现数据为 0 或 `[object Object]`。
- 需要继续优化“填入示例 JSON”按钮和错误提示。
- 手机端还需要进一步检查。

## 6. 下一步建议

- 优先修复 JSON 字段兼容和 `[object Object]` 问题。
- 增加一键填入示例 JSON。
- 优化可视化报告页面的空状态。
- 再进行一次手机端适配检查。
- 最后重新上传 GitHub，更新 GitHub Pages。

## 7. 当前部署方式

项目文件直接上传到 GitHub 仓库 `persona-scope`，通过 GitHub Pages 部署。

## 8. 重要限制

后续修改必须保持：

- 不接 API
- 不接后端
- 不使用数据库
- 不引入复杂依赖
- 保持 GitHub Pages 可部署
- 保持本地双击 `index.html` 可运行
