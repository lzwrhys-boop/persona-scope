# PersonaScope

PersonaScope 是一个可部署到 GitHub Pages 的纯静态网站项目，用于基于公开社交线索生成人际沟通画像 Prompt，并展示结构化报告模板。

## 功能

- 首页、开始分析页、示例报告页、理论依据页、历史记录页
- 头像本地预览，不上传服务器
- 输入个性签名与最近三条社交媒体文案
- 支持恋爱了解、客户沟通、同事协作、朋友相处、自我画像等分析场景
- 生成包含 Big Five、语言心理学、社交媒体自我呈现和风险边界的专业 Prompt
- 一键复制 Prompt，手动保存到浏览器 `localStorage`
- 历史记录支持查看 Prompt、复制 Prompt、删除单条记录和清空全部记录
- 移动端与桌面端自适应布局
- 无后端、无数据库、无 API 调用

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

PersonaScope 不包含任何后端服务，不连接数据库，也不调用外部 API。用户输入、头像预览和历史记录仅保存在当前浏览器本地。清除浏览器站点数据会删除历史记录。

## 注意

本工具仅基于公开社交线索进行概率化沟通画像分析，不作为心理诊断、招聘录用、金融风控、医疗建议或重大决策依据。生成内容应作为理解与沟通的辅助参考，而不是对他人的确定性判断。
