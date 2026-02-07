// Week 2: Generate fixtures for SPECIFIC test cases (rate limit friendly)
// Usage: node generate-fixtures-selective.js <test_id1> <test_id2> ...
// Example: node generate-fixtures-selective.js empty_context conflicting_context
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const API_URL = 'http://localhost:3000/ask';
const DELAY_MS = 65000; // 65 seconds between requests (respect rate limits!)
const PROMPT_VERSION = process.env.PROMPT_VERSION || 'v1';

// Get test IDs from command line arguments
const requestedTestIds = process.argv.slice(2);

if (requestedTestIds.length === 0) {
  console.error('❌ Error: Please specify test IDs to generate fixtures for');
  console.error('Usage: node generate-fixtures-selective.js <test_id1> <test_id2> ...');
  console.error('\nAvailable test IDs:');

  const testConfig = JSON.parse(readFileSync(join(__dirname, 'test_cases.json'), 'utf-8'));
  testConfig.test_cases.forEach(tc => {
    console.error(`  - ${tc.id} (${tc.category})`);
  });

  process.exit(1);
}

// Load test cases from test_cases.json
function loadTestCases() {
  const path = join(__dirname, 'test_cases.json');
  const testConfig = JSON.parse(readFileSync(path, 'utf-8'));

  // Filter to only requested test IDs
  const filtered = testConfig.test_cases.filter(tc =>
    requestedTestIds.includes(tc.id)
  );

  if (filtered.length === 0) {
    console.error(`❌ No matching test cases found for: ${requestedTestIds.join(', ')}`);
    process.exit(1);
  }

  const notFound = requestedTestIds.filter(id =>
    !filtered.some(tc => tc.id === id)
  );

  if (notFound.length > 0) {
    console.warn(`⚠️  Warning: Test IDs not found: ${notFound.join(', ')}`);
  }

  return filtered.map(tc => ({
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
  console.log('🎯 Generating selective fixture responses from live API...');
  console.log(`📋 Test cases: ${TEST_CASES.map(tc => tc.id).join(', ')}`);
  console.log(`⚠️  This will make ${TEST_CASES.length} API requests with 65s delays`);
  console.log(`⏱️  Estimated time: ${(TEST_CASES.length * 65) / 60} minutes\n`);

  // Load existing fixtures if they exist
  const fixturesPath = join(__dirname, 'fixtures', `${PROMPT_VERSION}_responses.json`);
  let fixtures;

  try {
    fixtures = JSON.parse(readFileSync(fixturesPath, 'utf-8'));
    console.log(`📂 Loaded existing fixtures from ${PROMPT_VERSION}_responses.json`);
  } catch (error) {
    console.log(`📂 Creating new fixture file for ${PROMPT_VERSION}`);
    fixtures = {
      generated_at: new Date().toISOString(),
      prompt_version: PROMPT_VERSION,
      test_cases: {},
    };
  }

  // Update generated_at timestamp
  fixtures.generated_at = new Date().toISOString();

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
  writeFileSync(fixturesPath, JSON.stringify(fixtures, null, 2));

  console.log(`\n✅ Fixtures saved to: ${fixturesPath}`);
  console.log(`📊 Total fixtures in file: ${Object.keys(fixtures.test_cases).length}`);
  console.log(`📊 Generated in this run: ${TEST_CASES.length}`);
}

// Run generator
generateFixtures().catch(console.error);
