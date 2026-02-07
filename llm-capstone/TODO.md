# Week 2 TODO - Remaining Work

## ✅ Completed (This Session)

1. ✅ Created `evals/prompts/` directory structure
2. ✅ Generated fixture responses (`fixtures/v1_responses.json`) - 3 test cases
3. ✅ Created `test_cases.json` with expected behaviors
4. ✅ Built test runner with mock/live modes (`test_runner.js`)
5. ✅ Added npm scripts: `npm test`, `npm test:live`, `npm test:generate-fixtures`
6. ✅ Mocked tests working (3/3 passing with fixtures)

## 🚧 Next Session Tasks

### High Priority (Complete Week 2)

1. **Set up GitHub Actions CI workflow**
   - Create `.github/workflows/prompt-tests.yml`
   - Run on push to `prompts/**`, `service/**`
   - Use `npm test` (mocked mode, no API calls)

2. **Create prompts/v2 with different behavior**
   - Copy `prompts/v1/` → `prompts/v2/`
   - Modify system_instruction.txt (e.g., "be more detailed" or "be more concise")
   - Update metadata.json with changes

3. **Run tests with v2 and document failures**
   - `PROMPT_VERSION=v2 npm test`
   - Observe which tests fail
   - Document in `prompts/v2/metadata.json`:
     - What changed
     - Which tests broke
     - Why they broke
     - Decision (keep v2 or revert)

4. **Update claude.md with Week 2 completion**
   - Mark testing infrastructure as complete
   - Add learnings section
   - Update status to "Week 2 Complete"

### Optional (If Time)

5. **Unit tests for prompt loader** (nice-to-have)
   - Test `loadPrompts()` function
   - Test template substitution

6. **More test cases** (if needed)
   - Add edge cases
   - Test error scenarios

## 📊 Week 2 Progress Gate

**Goal:** "A prompt change can break CI, and you can explain why"

**Status:** ~80% complete
- ✅ Prompt versioning
- ✅ Test infrastructure
- ✅ Fixtures captured
- ✅ Mocked tests passing
- ⏳ CI integration needed
- ⏳ v2 breaking tests needed
- ⏳ Learning documentation needed

## 🎯 Expected Outcome

After completing remaining tasks, you should be able to:
1. Show a prompt change (v1 → v2)
2. Run CI tests → see failures
3. Explain WHY tests failed (e.g., "v2 is more verbose, exceeds max_words")
4. Demonstrate version comparison
5. Make informed decision (keep/revert v2)

## 📝 Files Modified This Session

```
evals/
  prompts/
    fixtures/
      v1_responses.json          # ✅ Generated
    generate-fixtures.js         # ✅ Created
    test_runner.js               # ✅ Created
    test_cases.json              # ✅ Created
package.json                     # ✅ Updated (test scripts)
```

## 🔄 To Resume Next Session

1. Read `./claude.md` (updated status)
2. Read this `TODO.md`
3. Run `npm test` to verify tests still pass
4. Continue with "Next Session Tasks" above

## ⚠️ Remember

- Max 1 API test per session (rate limits!)
- Tests use fixtures (no API in CI)
- v2 creation is the KEY learning moment
