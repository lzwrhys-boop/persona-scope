# PersonaScope Render Backend

This directory contains the Node/Express backend prepared for Render deployment.

GitHub Pages cannot run this backend. Keep the static frontend on GitHub Pages, and deploy this `server/` directory as a separate Render Web Service.

## What It Does

- `GET /health` returns `{ "ok": true }`
- `POST /api/login` verifies the access code and returns a temporary login token
- `POST /api/analyze` accepts PersonaScope input and returns a report
- Protects `POST /api/analyze` with `Authorization: Bearer <token>`
- Uses mock report data when `MOCK_MODEL=true` or model environment variables are incomplete
- Calls one OpenAI-compatible multimodal model endpoint only when `MOCK_MODEL=false` and all model variables are configured
- Keeps API keys only in server environment variables
- Validates model output with `schema.js`
- Blocks sensitive-attribute requests before analysis
- Returns friendly errors without stack traces

## Local Run

```bash
cd server
npm install
npm start
```

Default local URLs:

```text
http://localhost:3000/health
http://localhost:3000/api/login
http://localhost:3000/api/analyze
```

Example login:

```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d "{\"accessCode\":\"your-access-code\"}"
```

Example analyze request:

```bash
curl -X POST http://localhost:3000/api/analyze \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_LOGIN_TOKEN" \
  -d "{\"input\":{\"nickname\":\"测试对象\",\"signature\":\"保持节奏\",\"posts\":[\"今天也慢慢来\"],\"scenario\":\"朋友相处\",\"question\":\"怎么自然开场？\",\"hasAvatar\":false,\"screenshotCount\":0}}"
```

## Environment Variables

Do not commit real secrets. Configure these in Render:

```text
MODEL_API_KEY=
MODEL_BASE_URL=
MODEL_NAME=
MODEL_PROVIDER=qwen
MOCK_MODEL=true
ALLOWED_ORIGIN=https://yourname.github.io
APP_ACCESS_CODE=your-private-access-code
APP_LOGIN_SECRET=a-long-random-string
PORT=3000
```

Notes:

- `MOCK_MODEL=true`: always returns the local mock report.
- `MOCK_MODEL=false`: calls the real model only if `MODEL_API_KEY`, `MODEL_BASE_URL`, and `MODEL_NAME` are all present.
- `MODEL_PROVIDER=qwen` enables Qwen-VL style multimodal model detection.
- `MODEL_BASE_URL` should be an OpenAI-compatible base URL. For Alibaba Cloud Bailian / Model Studio in China (Beijing), prefer `https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1`. Replace `{WorkspaceId}` with your workspace ID. The older `https://dashscope.aliyuncs.com/compatible-mode/v1` domain may still work, but Alibaba Cloud recommends the workspace-specific domain for better stability.
- `MODEL_NAME` must be a vision-capable model when images are sent, for example `qwen-vl-plus` or another available Qwen-VL model in your Bailian account.
- `ALLOWED_ORIGIN` should be your GitHub Pages origin, for example `https://yourname.github.io`.
- For multiple origins, use commas: `https://yourname.github.io,http://localhost:8890`.
- `APP_ACCESS_CODE` is the private code users enter on the frontend login screen.
- `APP_LOGIN_SECRET` is a long random string used to sign and verify login tokens.
- Render sets `PORT` automatically. You usually do not need to set it manually.

## Render Deployment

1. Push this project to GitHub.
2. In Render, create a new **Web Service**.
3. Select the repository.
4. Set **Root Directory** to:

```text
server
```

5. Set **Build Command**:

```bash
npm install
```

6. Set **Start Command**:

```bash
npm start
```

7. Add environment variables:

```text
MOCK_MODEL=true
ALLOWED_ORIGIN=https://yourname.github.io
APP_ACCESS_CODE=your-private-access-code
APP_LOGIN_SECRET=a-long-random-string
MODEL_PROVIDER=qwen
MODEL_API_KEY=
MODEL_BASE_URL=https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1
MODEL_NAME=qwen-vl-plus
```

8. Deploy.
9. Verify:

```text
https://your-render-service.onrender.com/health
```

Expected:

```json
{ "ok": true }
```

## Connect GitHub Pages Frontend

The static frontend is still safe for GitHub Pages because `script.js` defaults to mock mode:

```js
const MOCK_MODE = true;
```

After the Render backend is deployed and healthy, switch the frontend to API mode:

```js
const MOCK_MODE = false;
const API_ENDPOINT = "https://your-render-service.onrender.com/api/analyze";
```

Commit and redeploy GitHub Pages.

For the current mock-only GitHub Pages version, keep:

```js
const MOCK_MODE = true;
```

## Real Model Enablement

When you are ready to call a real model:

1. Set Render environment variables:

```text
MOCK_MODEL=false
MODEL_PROVIDER=qwen
MODEL_API_KEY=your-secret-key-in-render-only
MODEL_BASE_URL=https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1
MODEL_NAME=qwen-vl-plus
```

2. Do not put keys in frontend code.
3. Do not commit `.env` with real secrets.
4. Test `/api/analyze` with one main photo and up to 6 social screenshots.
5. If the configured model does not support `image_url` multimodal input, the API returns: `当前模型未启用图片理解，请检查 MODEL_NAME 是否为支持视觉输入的模型`.
6. If the model returns invalid JSON, the API will return a friendly error instead of crashing.
