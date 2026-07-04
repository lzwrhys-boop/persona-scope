# PersonaScope Render Backend

This directory contains the Node/Express backend prepared for Render deployment.

GitHub Pages cannot run this backend. Keep the static frontend on GitHub Pages, and deploy this `server/` directory as a separate Render Web Service.

## What It Does

- `GET /health` returns `{ "ok": true }`
- `POST /api/login` verifies the access code and returns a temporary login token
- `POST /api/analyze` accepts PersonaScope input and returns a report
- Protects `POST /api/analyze` with `Authorization: Bearer <token>`
- Uses mock report data when `MOCK_MODEL=true` or model environment variables are incomplete
- Calls a real OpenAI-compatible model endpoint only when `MOCK_MODEL=false` and all model variables are configured
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
MOCK_MODEL=true
ALLOWED_ORIGIN=https://yourname.github.io
APP_ACCESS_CODE=your-private-access-code
APP_LOGIN_SECRET=a-long-random-string
PORT=3000
```

Notes:

- `MOCK_MODEL=true`: always returns the local mock report.
- `MOCK_MODEL=false`: calls the real model only if `MODEL_API_KEY`, `MODEL_BASE_URL`, and `MODEL_NAME` are all present.
- `MODEL_BASE_URL` should be an OpenAI-compatible base URL, for example `https://api.openai.com/v1`.
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
MODEL_API_KEY=
MODEL_BASE_URL=
MODEL_NAME=
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
MODEL_API_KEY=your-secret-key-in-render-only
MODEL_BASE_URL=https://provider-compatible-base-url/v1
MODEL_NAME=your-model-name
```

2. Do not put keys in frontend code.
3. Do not commit `.env` with real secrets.
4. Test `/api/analyze`.
5. If the model returns invalid JSON, the API will return a friendly error instead of crashing.
