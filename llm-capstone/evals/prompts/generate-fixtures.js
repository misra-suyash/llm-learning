// Week 2: Generate fixture responses from live API
// Run this ONCE locally to capture baseline responses
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const API_URL = 'http://localhost:3000/ask';
const DELAY_MS = 65000; // 65 seconds between requests (gemini-2.0-flash-exp: 1 req/min limit)
const PROMPT_VERSION = process.env.PROMPT_VERSION || 'v1';

// Load test cases from test_cases.json (single source of truth)
function loadTestCases() {
  const path = join(__dirname, 'test_cases.json');
  const testConfig = JSON.parse(readFileSync(path, 'utf-8'));

  // Convert to format expected by generator
  return testConfig.test_cases.map(tc => ({
    id: tc.id,
    input: tc.input,
  }));
}

const TEST_CASES = loadTestCases();

async function callAPI(input) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`API error: ${JSON.stringify(error)}`);
  }

  return await response.json();
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateFixtures() {
  console.log('🎯 Generating fixture responses from live API...');
  console.log(`⚠️  This will make ${TEST_CASES.length} API requests with 65s delays`);
  console.log(`⏱️  Estimated time: ${(TEST_CASES.length * 65) / 60} minutes\n`);

  const fixtures = {
    generated_at: new Date().toISOString(),
    prompt_version: PROMPT_VERSION,
    test_cases: {},
  };

  for (let i = 0; i < TEST_CASES.length; i++) {
    const testCase = TEST_CASES[i];
    console.log(`[${i + 1}/${TEST_CASES.length}] Generating fixture: ${testCase.id}`);
    console.log(`  Input: ${JSON.stringify(testCase.input)}`);

    try {
      const response = await callAPI(testCase.input);
      fixtures.test_cases[testCase.id] = {
        input: testCase.input,
        output: response,
      };
      console.log(`  ✅ Success: ${response.answer.substring(0, 50)}...\n`);

      // Wait before next request (except for last one)
      if (i < TEST_CASES.length - 1) {
        console.log(`  ⏳ Waiting ${DELAY_MS / 1000}s before next request...\n`);
        await delay(DELAY_MS);
      }
    } catch (error) {
      console.error(`  ❌ Failed: ${error.message}\n`);
      fixtures.test_cases[testCase.id] = {
        input: testCase.input,
        error: error.message,
      };
    }
  }

  // Save to file
  const fixturesPath = join(__dirname, 'fixtures', `${PROMPT_VERSION}_responses.json`);
  writeFileSync(fixturesPath, JSON.stringify(fixtures, null, 2));

  console.log(`\n✅ Fixtures saved to: ${fixturesPath}`);
  console.log(`📊 Generated ${Object.keys(fixtures.test_cases).length} fixtures`);
}

// Run generator
generateFixtures().catch(console.error);
