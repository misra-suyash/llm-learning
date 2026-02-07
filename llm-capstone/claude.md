# Claude Context - LLM Capstone

> **Quick reference for AI assistants. See README.md for detailed setup/usage.**

## 🚨 CRITICAL: Rate Limiting

**⚠️ 60+ SECONDS BETWEEN API REQUESTS ⚠️**
- Model: `gemini-2.0-flash-exp` has strict rate limits (1 request per minute)
- Multiple requests in one session: ✅ ALLOWED
- Burst requests (< 60s apart): ❌ BLOCKED → 429 errors, service unavailable
- **Always wait 60+ seconds between /ask calls**
- Use fixtures/mock mode for testing to avoid hitting rate limits

## Current Status

**Week:** 2 - Prompting as Engineering
**Progress Gate:** Prompt change can break CI, explain why

**Completed:**
- [x] Week 0-1: Working /ask endpoint, service account auth, systemInstruction
- [x] Extract prompts to versioned files (`prompts/v1/`)
- [x] Prompt loader utility with version tracking
- [x] Token usage breakdown logging
- [x] Test infrastructure (fixtures, test runner, npm scripts)
- [x] **Expanded test suite to 14 tests (20/60/20 framework)**
  - 3 happy path, 8 edge cases, 3 adversarial tests
- [x] **Comprehensive TESTING.md documentation** (testing strategy guide)
- [x] **Selective fixture generation** (rate-limit-friendly: `test:generate-selective`)
- [x] **5/14 fixtures captured** (basic_math, with_context, python_question, empty_context, conflicting_context)
- [x] **Mocked tests running** (5/14 passing in mock mode, 9 need fixtures)
- [x] **v2 strategy analyzed** (3 approaches: conciseness, context grounding, format constraints)

**In Progress (~85% Week 2 Complete):**
- [ ] Complete fixture coverage (9/14 remaining - **security tests critical!**)
- [ ] GitHub Actions CI workflow
- [ ] Create prompts/v2 and observe test failures
- [ ] Document learnings (progress gate)

**📖 Important: Read TESTING.md for comprehensive testing strategy guide!**

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

1. **Rate Limits:** 60+ seconds between API calls (multiple calls per session OK, just pace them)
2. **Auth:** Service account (IAM), no API keys per org policy
3. **Scope:** Stay in current week (Week 2), don't implement future features
4. **Philosophy:** Incremental, break systems to learn, no premature optimization
5. **Testing:** Use mock mode for fast iteration; generate fixtures selectively

## Test Suite Status

> 📖 **See TESTING.md for complete testing strategy, test descriptions, and best practices**

**Coverage:** 5/14 tests (36%)
- ✅ Happy Path: 3/3 (100%) - basic_math, with_context, python_question
- ⚠️ Edge Cases: 2/8 (25%) - empty_context, conflicting_context
- 🔴 Adversarial: 0/3 (0%) - **SECURITY VALIDATION GAP!**

**Quick Commands:**
```bash
npm run test:prompts                           # Run tests (mock mode, fast)
npm run test:generate-selective <test_ids...> # Generate specific fixtures
npm run test:live                              # Run tests (live API, slow)
```

**Next Priority:** Generate security test fixtures
```bash
npm run test:generate-selective prompt_injection_ignore prompt_injection_context json_breaking_input
```

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

## Session Insights (2026-02-07)

**Key Findings from v1 Fixtures:**
1. **Context Grounding Excellent:** `conflicting_context` test proves v1 prioritizes provided context over training data (says "sky is green" when context says so, not "sky is blue")
2. **Token Efficiency:** All responses 196-215 tokens (within budget, highly efficient)
3. **Empty Context Handling:** Treats `""` same as `null` (no errors, falls back to general knowledge)

**Testing Framework:**
- Adopted 20/60/20 distribution (happy path / edge cases / adversarial)
- Created 14 comprehensive tests across all categories
- Built selective fixture generation for rate limit compliance
- Documented strategy in TESTING.md

**Critical Gap:** No adversarial test fixtures yet - security validation needed!

## References

- Testing strategy: `TESTING.md`
- Detailed setup: `README.md`
- 12-week plan: `llm_learning_plan.md`
- AI workflow: `agents.md`
- Current tasks: `TODO.md`
