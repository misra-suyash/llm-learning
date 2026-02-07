# Week 2 TODO - Remaining Work

## ✅ Completed

### Previous Sessions
1. ✅ Created `evals/prompts/` directory structure
2. ✅ Built test runner with mock/live modes (`test_runner.js`)
3. ✅ Added npm scripts: `npm test`, `npm test:live`, `npm test:generate-fixtures`
4. ✅ Generated initial fixture responses (`fixtures/v1_responses.json`) - 5 test cases

### This Session (2026-02-07)
5. ✅ **Expanded test suite from 3 to 14 tests** (20/60/20 framework)
   - 3 happy path tests (basic_math, with_context, python_question)
   - 8 edge case tests (empty_context, very_long_context, conflicting_context, ambiguous_question, multiple_questions, special_characters, unicode_question, minimal_question)
   - 3 adversarial tests (prompt_injection_ignore, prompt_injection_context, json_breaking_input)
6. ✅ **Created comprehensive TESTING.md documentation**
   - 20/60/20 testing framework explanation
   - Test category documentation (what each test validates)
   - Mock vs live mode usage guide
   - Fixture management strategy
   - Version testing workflow (v1→v2)
7. ✅ **Fixed generate-fixtures.js** to read from test_cases.json (single source of truth)
8. ✅ **Created generate-fixtures-selective.js** for rate-limit-friendly fixture generation
9. ✅ **Updated rate limiting documentation** (CLAUDE.md, agents.md, TESTING.md)
   - Clarified: 60+ seconds between requests (not "1 per session")
10. ✅ **Added npm scripts:** `test:prompts`, `test:generate-selective`
11. ✅ **Ran tests in mock mode:** 5/14 passing (36% coverage)
    - 5 fixtures exist: basic_math, with_context, python_question, empty_context, conflicting_context
    - 9 fixtures needed: 6 edge cases + 3 adversarial tests
12. ✅ **Analyzed v2 strategy** - 3 approaches documented (conciseness, context grounding, format constraints)

## 🚧 Next Session Tasks

### Immediate Priority (Resume Point)

1. **Generate remaining fixtures incrementally** (RECOMMENDED START HERE)
   - **Priority 1 - Security tests (CRITICAL):**
     ```bash
     npm run test:generate-selective prompt_injection_ignore prompt_injection_context json_breaking_input
     ```
     Takes ~3 minutes, gives security validation coverage

   - **Priority 2 - Key edge cases:**
     ```bash
     # Wait 60+ seconds, then:
     npm run test:generate-selective very_long_context multiple_questions unicode_question
     ```
     Takes ~3 minutes, covers important edge cases

   - **Priority 3 - Remaining edge cases:**
     ```bash
     # Later session:
     npm run test:generate-selective ambiguous_question special_characters minimal_question
     ```
     Completes edge case coverage

   - **Goal:** Reach 14/14 tests passing in mock mode

### High Priority (Complete Week 2)

2. **Create prompts/v2 with intentional breaking changes**
   - Approach A (Recommended): Add conciseness constraint
     - Modify system_instruction.txt: "Answer in 10 words or fewer when possible"
     - Predict: python_question will fail (too brief, missing required terms)
     - Observe: Token usage decreases, quality may suffer
   - See TESTING.md "v2 Testing Strategy" section for details
   - Update metadata.json with:
     - What changed and why
     - Predicted test failures
     - Actual test failures
     - Tradeoff analysis (cost vs quality)

3. **Run comparative tests (v1 vs v2)**
   ```bash
   # Baseline
   PROMPT_VERSION=v1 npm run test:prompts

   # New version
   PROMPT_VERSION=v2 npm run test:prompts
   ```
   - Document which tests broke
   - Explain WHY they broke (this is your progress gate answer!)
   - Create regression analysis table

4. **Set up GitHub Actions CI workflow**
   - Create `.github/workflows/prompt-tests.yml`
   - Run on push to `prompts/**`, `service/**`, `evals/**`
   - Use `npm run test:prompts` (mocked mode, no API calls)
   - Should fail when v2 breaks tests (demonstrates CI gate)

5. **Document Week 2 learnings**
   - Update claude.md with completion status
   - Document key insights:
     - How prompt changes break tests
     - Cost vs quality tradeoffs observed
     - Context grounding validation results
   - Mark Week 2 as complete

## 📊 Week 2 Progress Gate

**Goal:** "A prompt change can break CI, and you can explain why"

**Status:** ~85% complete
- ✅ Prompt versioning (v1 extracted and versioned)
- ✅ Test infrastructure (14 tests, 20/60/20 framework)
- ✅ Comprehensive testing documentation (TESTING.md)
- ✅ Fixtures captured (5/14, 36% coverage)
- ✅ Mocked tests passing (5/14 in mock mode)
- ✅ v2 strategy analyzed (3 approaches documented)
- ⏳ Complete fixture coverage (9/14 remaining - security tests critical!)
- ⏳ CI integration needed
- ⏳ v2 creation and breaking tests needed
- ⏳ Learning documentation needed

## 🎯 Expected Outcome

After completing remaining tasks, you should be able to:
1. Show a prompt change (v1 → v2)
2. Run CI tests → see failures
3. Explain WHY tests failed (e.g., "v2 is more verbose, exceeds max_words")
4. Demonstrate version comparison
5. Make informed decision (keep/revert v2)

## 📝 Files Modified/Created

### This Session (2026-02-07)
```
evals/prompts/
  test_cases.json                    # ✅ Expanded (3 → 14 tests, added categories)
  generate-fixtures.js               # ✅ Fixed (reads from test_cases.json, uses PROMPT_VERSION)
  generate-fixtures-selective.js     # ✅ Created (rate-limit-friendly, selective generation)
TESTING.md                           # ✅ Created (comprehensive testing strategy guide)
CLAUDE.md                            # ✅ Updated (rate limiting clarification, current status)
agents.md                            # ✅ Updated (rate limiting clarification)
TODO.md                              # ✅ Updated (this file - session checkpoint)
package.json                         # ✅ Updated (added test:prompts, test:generate-selective)
```

### Previous Sessions
```
evals/prompts/
  fixtures/v1_responses.json         # ✅ Generated (5 test cases)
  test_runner.js                     # ✅ Created
  test_cases.json                    # ✅ Created (initially 3 tests)
package.json                         # ✅ Updated (initial test scripts)
```

## 🔄 To Resume Next Session

1. Read `./claude.md` (updated status)
2. Read this `TODO.md`
3. Run `npm test` to verify tests still pass
4. Continue with "Next Session Tasks" above

## ⚠️ Remember

- **Rate Limits:** 60+ seconds between API calls (multiple calls per session OK, just pace them)
- **Testing:** Use mock mode (`npm run test:prompts`) for fast iteration
- **Fixtures:** Generate incrementally with `npm run test:generate-selective <test_ids>`
- **CI:** Tests use fixtures (no API calls in CI)
- **Week 2 Goal:** v2 creation + breaking tests = KEY learning moment

## 🔑 Key Insights This Session

1. **Context Grounding Works:** `conflicting_context` test shows v1 correctly prioritizes provided context over training data ("sky is green" not "sky is blue")
2. **Token Efficiency:** All v1 responses are 196-215 tokens (within budget, highly efficient)
3. **Test Distribution:** 20/60/20 framework mirrors production reality (most bugs in edge cases)
4. **Missing Coverage:** 0/3 adversarial tests have fixtures - security validation gap!
5. **Selective Generation:** Best practice for rate limits - generate 2-3 fixtures per session with 65s delays
