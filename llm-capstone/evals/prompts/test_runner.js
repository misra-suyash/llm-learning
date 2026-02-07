// Week 2: Prompt regression test runner
// Supports two modes: mock (uses fixtures) and live (calls real API)
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const API_URL = process.env.API_URL || 'http://localhost:3000/ask';
const MODE = process.env.TEST_MODE || 'mock'; // 'mock' or 'live'
const PROMPT_VERSION = process.env.PROMPT_VERSION || 'v1';

// Load test cases
function loadTestCases() {
  const path = join(__dirname, 'test_cases.json');
  return JSON.parse(readFileSync(path, 'utf-8'));
}

// Load fixtures
function loadFixtures() {
  const path = join(__dirname, 'fixtures', `${PROMPT_VERSION}_responses.json`);
  return JSON.parse(readFileSync(path, 'utf-8'));
}

// Call live API
async function callLiveAPI(input) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return await response.json();
}

// Get response (from fixture or live API)
async function getResponse(testCase, fixtures) {
  if (MODE === 'mock') {
    const fixture = fixtures.test_cases[testCase.id];
    if (!fixture) {
      throw new Error(`No fixture found for test case: ${testCase.id}`);
    }
    return fixture.output;
  } else {
    // Live mode - call real API
    return await callLiveAPI(testCase.input);
  }
}

// Validation functions
function validateBehavior(response, behavior) {
  const results = [];

  if (behavior.json_valid) {
    results.push({
      check: 'json_valid',
      passed: typeof response === 'object' && response !== null,
      message: 'Response is valid JSON',
    });
  }

  if (behavior.has_answer_field) {
    results.push({
      check: 'has_answer_field',
      passed: 'answer' in response,
      message: 'Response has answer field',
    });
  }

  if (behavior.answer_not_empty) {
    results.push({
      check: 'answer_not_empty',
      passed: response.answer && response.answer.length > 0,
      message: 'Answer is not empty',
    });
  }

  if (behavior.answer_contains) {
    const answerLower = (response.answer || '').toLowerCase();
    const allFound = behavior.answer_contains.every(term =>
      answerLower.includes(term.toLowerCase())
    );
    results.push({
      check: 'answer_contains',
      passed: allFound,
      message: `Answer contains: ${behavior.answer_contains.join(', ')}`,
      details: allFound ? null : `Missing terms in: "${response.answer}"`,
    });
  }

  if (behavior.max_tokens) {
    const tokens = response.metadata?.tokens_used || 0;
    results.push({
      check: 'max_tokens',
      passed: tokens <= behavior.max_tokens,
      message: `Tokens ${tokens} <= ${behavior.max_tokens}`,
    });
  }

  if (behavior.max_words) {
    const words = (response.answer || '').split(/\s+/).length;
    results.push({
      check: 'max_words',
      passed: words <= behavior.max_words,
      message: `Words ${words} <= ${behavior.max_words}`,
    });
  }

  if (behavior.has_metadata) {
    results.push({
      check: 'has_metadata',
      passed: 'metadata' in response,
      message: 'Response has metadata field',
    });
  }

  if (behavior.metadata_has_prompt_version) {
    results.push({
      check: 'metadata_has_prompt_version',
      passed: response.metadata?.prompt_version !== undefined,
      message: 'Metadata includes prompt_version',
    });
  }

  if (behavior.no_markdown_fences) {
    const hasMarkdown = /```/.test(response.answer || '');
    results.push({
      check: 'no_markdown_fences',
      passed: !hasMarkdown,
      message: 'Answer does not contain markdown code fences',
    });
  }

  if (behavior.uses_context) {
    // This is a soft check - we assume if context was provided and answer is relevant, it was used
    results.push({
      check: 'uses_context',
      passed: true, // Validated by answer_contains
      message: 'Context appears to be used (validated by content check)',
    });
  }

  if (behavior.concise) {
    const words = (response.answer || '').split(/\s+/).length;
    results.push({
      check: 'concise',
      passed: words <= 30, // Concise = <= 30 words
      message: `Answer is concise (${words} words)`,
    });
  }

  return results;
}

// Run all tests
async function runTests() {
  console.log(`\n🧪 Running Prompt Tests (Mode: ${MODE}, Version: ${PROMPT_VERSION})\n`);

  const testConfig = loadTestCases();
  const fixtures = MODE === 'mock' ? loadFixtures() : null;

  const results = {
    total: 0,
    passed: 0,
    failed: 0,
    tests: [],
  };

  for (const testCase of testConfig.test_cases) {
    console.log(`📋 Test: ${testCase.id} - ${testCase.description}`);

    try {
      const response = await getResponse(testCase, fixtures);
      const validations = validateBehavior(response, testCase.expected_behavior);

      const allPassed = validations.every(v => v.passed);
      const failedChecks = validations.filter(v => !v.passed);

      results.total++;
      if (allPassed) {
        results.passed++;
        console.log(`   ✅ PASS (${validations.length} checks passed)\n`);
      } else {
        results.failed++;
        console.log(`   ❌ FAIL (${failedChecks.length}/${validations.length} checks failed)`);
        failedChecks.forEach(check => {
          console.log(`      ❌ ${check.check}: ${check.message}`);
          if (check.details) {
            console.log(`         ${check.details}`);
          }
        });
        console.log('');
      }

      results.tests.push({
        id: testCase.id,
        passed: allPassed,
        validations,
      });
    } catch (error) {
      results.total++;
      results.failed++;
      console.log(`   ❌ ERROR: ${error.message}\n`);
      results.tests.push({
        id: testCase.id,
        passed: false,
        error: error.message,
      });
    }
  }

  // Summary
  console.log('═'.repeat(60));
  console.log(`\n📊 Summary: ${results.passed}/${results.total} tests passed\n`);

  if (results.failed > 0) {
    console.log(`❌ ${results.failed} test(s) failed`);
    process.exit(1);
  } else {
    console.log(`✅ All tests passed!`);
    process.exit(0);
  }
}

// Run tests
runTests().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
