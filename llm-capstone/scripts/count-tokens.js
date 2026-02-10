#!/usr/bin/env node

/**
 * Token Counter for .doc and .docx files
 *
 * Usage:
 *   node scripts/count-tokens.js path/to/document.docx
 *   node scripts/count-tokens.js path/to/document.doc
 *   node scripts/count-tokens.js path/to/document.docx --gemini  # Get exact Gemini count via API
 */

import mammoth from 'mammoth';
import WordExtractor from 'word-extractor';
import { encoding_for_model } from 'tiktoken';
import fs from 'fs';
import path from 'path';
import { VertexAI } from '@google-cloud/vertexai';
import dotenv from 'dotenv';

dotenv.config();

async function extractTextFromDoc(filePath) {
  const extractor = new WordExtractor();
  const extracted = await extractor.extract(filePath);
  return extracted.getBody();
}

async function extractTextFromDocx(filePath) {
  const result = await mammoth.extractRawText({ path: filePath });
  return result.value;
}

async function extractText(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (ext === '.doc') {
    return await extractTextFromDoc(filePath);
  } else if (ext === '.docx') {
    return await extractTextFromDocx(filePath);
  } else {
    throw new Error(`Unsupported file format: ${ext}. Only .doc and .docx are supported.`);
  }
}

function countTokensWithTiktoken(text) {
  const encoder = encoding_for_model('gpt-4');
  const tokens = encoder.encode(text);
  const tokenCount = tokens.length;
  encoder.free();
  return tokenCount;
}

async function countTokensWithGemini(text) {
  const vertex = new VertexAI({
    project: process.env.GOOGLE_PROJECT_ID,
    location: process.env.GOOGLE_LOCATION || 'us-central1'
  });

  const model = vertex.getGenerativeModel({
    model: process.env.MODEL || 'gemini-2.0-flash-exp'
  });

  // Make minimal API call just to get token count
  const result = await model.generateContent({
    contents: [{
      role: 'user',
      parts: [{ text: `Token count test.\n\n${text}` }]
    }]
  });

  return result.response.usageMetadata.promptTokenCount - 5; // Subtract our test prefix tokens
}

function analyzeText(text) {
  const words = text.trim().split(/\s+/).length;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;

  return { words, characters, charactersNoSpaces };
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('--help')) {
    console.log(`
Token Counter for .doc and .docx files

Usage:
  node scripts/count-tokens.js <file.doc|file.docx> [options]

Options:
  --gemini    Get exact token count from Gemini API (makes API call)
  --help      Show this help message

Examples:
  node scripts/count-tokens.js document.docx
  node scripts/count-tokens.js document.doc
  node scripts/count-tokens.js document.docx --gemini
    `);
    process.exit(0);
  }

  const filePath = args[0];
  const useGemini = args.includes('--gemini');

  // Validate file
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Error: File not found: ${filePath}`);
    process.exit(1);
  }

  const ext = path.extname(filePath).toLowerCase();
  if (ext !== '.doc' && ext !== '.docx') {
    console.error(`❌ Error: File must be .doc or .docx format`);
    process.exit(1);
  }

  console.log(`\n📄 Analyzing: ${path.basename(filePath)}\n`);

  try {
    // Extract text
    console.log(`⏳ Extracting text from ${ext} file...`);
    const text = await extractText(filePath);

    if (!text || text.trim().length === 0) {
      console.error('❌ Error: No text content found in document');
      process.exit(1);
    }

    // Analyze text
    const { words, characters, charactersNoSpaces } = analyzeText(text);

    // Count tokens (approximate)
    console.log('⏳ Counting tokens...');
    const approxTokens = countTokensWithTiktoken(text);
    const tokensPerWord = (approxTokens / words).toFixed(2);

    // Display results
    console.log('─────────────────────────────────────────');
    console.log(`Words:              ${words.toLocaleString()}`);
    console.log(`Characters:         ${characters.toLocaleString()}`);
    console.log(`Chars (no spaces):  ${charactersNoSpaces.toLocaleString()}`);
    console.log(`─────────────────────────────────────────`);
    console.log(`Tokens (approx):    ${approxTokens.toLocaleString()}`);
    console.log(`Tokens per word:    ${tokensPerWord}`);
    console.log(`─────────────────────────────────────────`);

    // Get exact Gemini count if requested
    if (useGemini) {
      console.log('\n⏳ Getting exact token count from Gemini API...');
      console.log('⚠️  This will make an API call (costs ~$0.001)');

      try {
        const geminiTokens = await countTokensWithGemini(text);
        const difference = geminiTokens - approxTokens;
        const percentDiff = ((difference / geminiTokens) * 100).toFixed(1);

        console.log(`\n✅ Exact Gemini tokens: ${geminiTokens.toLocaleString()}`);
        console.log(`   Difference: ${difference > 0 ? '+' : ''}${difference} (${percentDiff}%)`);
      } catch (error) {
        console.error(`\n❌ Gemini API error: ${error.message}`);
        console.error('   Make sure GOOGLE_PROJECT_ID and credentials are configured in .env');
      }
    } else {
      console.log('\n💡 Tip: Use --gemini flag for exact token count from Gemini API');
    }

    // Context window assessment
    console.log('\n📊 Context Window Assessment:');
    const contextLimit = 1_000_000; // Gemini 2.0 Flash limit
    const percentOfContext = ((approxTokens / contextLimit) * 100).toFixed(2);

    console.log(`   Document size: ${approxTokens.toLocaleString()} tokens`);
    console.log(`   Gemini limit:  ${contextLimit.toLocaleString()} tokens`);
    console.log(`   Usage:         ${percentOfContext}% of context window`);

    if (approxTokens < 20000) {
      console.log(`   ✅ Recommendation: Full cached corpus (excellent fit)`);
    } else if (approxTokens < 50000) {
      console.log(`   ⚠️  Recommendation: Full cached corpus (test for "lost in middle")`);
    } else if (approxTokens < 100000) {
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
