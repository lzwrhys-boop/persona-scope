# PersonaScope Mock API

This directory is a future backend preparation layer for PersonaScope.

It does **not** run on GitHub Pages. GitHub Pages can only host the current static frontend files. Deploy this `server/` directory separately to a Node-capable platform such as Vercel, Render, Railway, Fly.io, or your own Node server.

## What This Server Does

- Exposes `POST /api/analyze`
- Validates basic input fields and length limits
- Blocks sensitive-attribute requests before analysis
- Returns a mock report that matches `schema.js`
- Does not call a real model provider yet
- Does not contain or expose any API key

## Local Development

```bash
cd server
npm install
npm start
```

The mock API will run at:

```text
http://localhost:3000/api/analyze
```

Example request:

```bash
curl -X POST http://localhost:3000/api/analyze \
  -H "Content-Type: application/json" \
  -d "{\"input\":{\"nickname\":\"测试对象\",\"signature\":\"保持节奏\",\"posts\":[\"今天也慢慢来\"],\"scenario\":\"朋友相处\",\"question\":\"怎么自然开场？\",\"hasAvatar\":false,\"screenshotCount\":0}}"
```

## Environment Variables

Copy `.env.example` to your deployment platform's environment settings when real model access is added later.

```text
MODEL_API_KEY=
MODEL_BASE_URL=
MODEL_NAME=
ALLOWED_ORIGIN=
PORT=3000
```

Do not commit real secrets.

## Connecting The Frontend Later

The current GitHub Pages frontend remains static and uses local mock data by default.

In `script.js`:

```js
const MOCK_MODE = true;
const API_ENDPOINT = "https://your-api-domain.com/api/analyze";
```

For GitHub Pages, keep:

```js
const MOCK_MODE = true;
```

After deploying this server to Vercel / Render / Railway, set:

```js
const MOCK_MODE = false;
const API_ENDPOINT = "https://your-real-api-domain.com/api/analyze";
```

If the frontend and backend are on different domains, set `ALLOWED_ORIGIN` on the backend to your GitHub Pages domain, for example:

```text
ALLOWED_ORIGIN=https://yourname.github.io
```

## Future Real Model Integration

When you add a model provider:

- Keep API keys only in server environment variables
- Build model messages in `prompt.js`
- Keep user input as structured `user` data
- Validate every model response with `validateReport(data)`
- Run sensitive-content filtering before and after the model call
- Never return raw provider errors, raw prompts, or internal stack traces to the frontend
