# Claude Context - LLM Capstone

> **Quick reference for AI assistants. See README.md for detailed setup/usage.**

## 🚨 CRITICAL: Rate Limiting

**⚠️ MAX 1 API REQUEST PER SESSION ⚠️**
- Model: `gemini-2.0-flash-exp` has strict rate limits
- Multiple requests → 429 errors, service blocked for minutes
- Wait 60+ seconds between any API calls
- Test once per session, or defer to user

## Current Status

**Week:** 2 - Prompting as Engineering
**Progress Gate:** Prompt change can break CI, explain why

**Completed:**
- [x] Week 0-1: Working /ask endpoint, service account auth, systemInstruction
- [x] Extract prompts to versioned files (`prompts/v1/`)
- [x] Prompt loader utility with version tracking
- [x] Token usage breakdown logging

**In Progress:**
- [ ] Prompt regression tests (`evals/prompts/`)
- [ ] CI for prompt testing

## Configuration

```bash
# .env
GOOGLE_PROJECT_ID=home-dev-a603a373
GOOGLE_LOCATION=us-central1
GOOGLE_APPLICATION_CREDENTIALS=./home-dev-a603a373-c8879e543743.json
MODEL=gemini-2.0-flash-exp
TEMPERATURE=0.0
MAX_TOKENS=1024
PORT=3000
PROMPT_VERSION=v1
```

## Key Constraints

1. **Rate Limits:** 1 API test/session only
2. **Auth:** Service account (IAM), no API keys per org policy
3. **Scope:** Stay in current week (Week 2), don't implement future features
4. **Philosophy:** Incremental, break systems to learn, no premature optimization

## API

```bash
POST /ask
{"question": "string", "context": "string|null"}  # context is optional

Response: {"answer": "string", "metadata": {...}}
```

## Common Issues

**429 Rate Limit:** Wait 60+ seconds
**404 Model Not Found:** Check MODEL in .env
**401/403 Auth:** Verify service account key path
**JSON Parse Error:** Model returned invalid format (rare with systemInstruction)

## Repository

```
llm-capstone/
├── service/           # /ask endpoint
├── prompts/           # Versioned (Week 2+)
├── evals/             # Tests (Week 3+)
├── data/              # RAG docs (Week 4+)
├── .env               # Config (gitignored)
├── claude.md          # This file
├── agents.md          # AI guidelines
└── llm_learning_plan.md  # 12-week roadmap
```

## Week Boundaries

**Week 2 (Current):** Prompts, validation, testing, CI
**NOT Yet:** RAG (5-6), Memory (7), Caching (8), Guardrails (9)

## Future Work Notes

**Week 8 - Caching TODO:**
- Implement prompt caching for system instructions (use Vertex AI `cachedContent` API)
- Expected savings: 50-80% token reduction (system instruction ~185 tokens cached per request)
- Benefits: Lower cost, faster response times
- Implementation: `vertexAI.createCachedContent()` with TTL

## Security

- Never commit: service account keys, .env
- Never remove from .gitignore: `home-dev-*.json`, `.env`
- Keys are in project root (gitignored)

## References

- Detailed setup: `README.md`
- 12-week plan: `llm_learning_plan.md`
- AI workflow: `agents.md`
