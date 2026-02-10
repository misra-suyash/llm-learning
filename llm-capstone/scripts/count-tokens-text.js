#!/usr/bin/env node

/**
 * Token Counter for plain text files
 *
 * Usage:
 *   node scripts/count-tokens-text.js path/to/file.txt
 */

import { encoding_for_model } from 'tiktoken';
import fs from 'fs';
import path from 'path';

function countTokensWithTiktoken(text) {
  const encoder = encoding_for_model('gpt-4');
  const tokens = encoder.encode(text);
  const tokenCount = tokens.length;
  encoder.free();
  return tokenCount;
}

function analyzeText(text) {
  const words = text.trim().split(/\s+/).length;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;
  const lines = text.split(/\r?\n/).length;

  return { words, characters, charactersNoSpaces, lines };
}

function main() {
  const filePath = process.argv[2];

  if (!filePath) {
    console.log('Usage: node scripts/count-tokens-text.js <file>');
    process.exit(1);
  }

  if (!fs.existsSync(filePath)) {
    console.error(`❌ Error: File not found: ${filePath}`);
    process.exit(1);
  }

  console.log(`\n📄 Analyzing: ${path.basename(filePath)}\n`);

  try {
    // Read file
    console.log('⏳ Reading file...');
    const text = fs.readFileSync(filePath, 'utf-8');

    if (!text || text.trim().length === 0) {
      console.error('❌ Error: No text content found in file');
      process.exit(1);
    }

    // Analyze text
    const { words, characters, charactersNoSpaces, lines } = analyzeText(text);

    // Count tokens
    console.log('⏳ Counting tokens...');
    const tokens = countTokensWithTiktoken(text);
    const tokensPerWord = (tokens / words).toFixed(2);

    // Display results
    console.log('─────────────────────────────────────────');
    console.log(`Lines:              ${lines.toLocaleString()}`);
    console.log(`Words:              ${words.toLocaleString()}`);
    console.log(`Characters:         ${characters.toLocaleString()}`);
    console.log(`Chars (no spaces):  ${charactersNoSpaces.toLocaleString()}`);
    console.log(`─────────────────────────────────────────`);
    console.log(`Tokens (approx):    ${tokens.toLocaleString()}`);
    console.log(`Tokens per word:    ${tokensPerWord}`);
    console.log(`─────────────────────────────────────────`);

    // Context window assessment
    console.log('\n📊 Context Window Assessment:');
    const contextLimit = 1_000_000; // Gemini 2.0 Flash limit
    const percentOfContext = ((tokens / contextLimit) * 100).toFixed(2);

    console.log(`   Document size: ${tokens.toLocaleString()} tokens`);
    console.log(`   Gemini limit:  ${contextLimit.toLocaleString()} tokens`);
    console.log(`   Usage:         ${percentOfContext}% of context window`);

    if (tokens < 20000) {
      console.log(`   ✅ Recommendation: Full cached corpus (excellent fit)`);
    } else if (tokens < 50000) {
      console.log(`   ⚠️  Recommendation: Full cached corpus (test for "lost in middle")`);
    } else if (tokens < 100000) {
      console.log(`   ⚠️  Recommendation: Consider RAG or hybrid approach`);
    } else {
      console.log(`   ❌ Recommendation: Use RAG (document too large for effective caching)`);
    }

    console.log('\n');

  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    process.exit(1);
  }
}

main();
