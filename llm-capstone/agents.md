# AI Agent Guidelines

> **For AI assistants working on this codebase.**

## Session Start (Required Reading)

**Read these files in order:**
1. `./claude.md` ← Single source of truth (project facts, constraints, current week)
2. `./llm_learning_plan.md` ← 12-week roadmap
3. Recent commits (`git log --oneline -5`)

## 🚨 Critical Rules

**Rate Limiting:**
- ⚠️ **MAX 1 API REQUEST PER SESSION**
- Check: "Did I already call /ask this session?"
- If yes → DO NOT test again
- If needed → Warn user, defer testing, or wait 60+ seconds

**Security:**
- Never commit credentials (service account keys, .env)
- Never suggest removing from .gitignore

## Workflow

**Code Changes:**
1. Read file first (always)
2. Make minimal changes
3. Add comment: `// Week N: reason`
4. Test once max
5. Clear commit message

**Stay in Scope:**
- Check `claude.md` for current week
- Don't implement future week features
- Simple > complex

**Testing:**
- Prefer mocks/unit tests over live API
- Warn before any /ask test
- Max 1 API call per session

## Communication

- Explain WHY, not just WHAT
- Show trade-offs
- Reference line numbers
- Before/after comparisons
- Get approval before saving files with new code

## Red Flags

Stop if:
- ❌ Multiple API calls per session
- ❌ Implementing future weeks
- ❌ Editing without reading
- ❌ Ignoring rate limits

## Quick Commands

```bash
npm start                         # Start service
curl localhost:3000/health        # Health check
pkill -f "node.*service/index.js" # Stop
```

---

**Remember:** `claude.md` has all project facts!
