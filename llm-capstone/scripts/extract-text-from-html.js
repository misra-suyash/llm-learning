#!/usr/bin/env node

/**
 * Extract plain text from HTML file (Confluence exports)
 */

import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

function extractTextFromHTML(htmlContent) {
  // Parse HTML
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;

  // Remove script and style elements
  const scripts = document.querySelectorAll('script, style');
  scripts.forEach(el => el.remove());

  // Get text content
  const text = document.body.textContent || '';

  // Clean up whitespace
  return text
    .replace(/\s+/g, ' ')           // Replace multiple whitespace with single space
    .replace(/\n\s*\n/g, '\n')      // Remove empty lines
    .trim();
}

function main() {
  const filePath = process.argv[2];
  const outputPath = process.argv[3];

  if (!filePath) {
    console.log('Usage: node scripts/extract-text-from-html.js <input.html> [output.txt]');
    process.exit(1);
  }

  if (!fs.existsSync(filePath)) {
    console.error(`❌ Error: File not found: ${filePath}`);
    process.exit(1);
  }

  console.log(`\n📄 Extracting text from: ${path.basename(filePath)}\n`);

  try {
    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    const plainText = extractTextFromHTML(htmlContent);

    const words = plainText.split(/\s+/).length;
    console.log(`✅ Extracted ${words.toLocaleString()} words`);

    if (outputPath) {
      fs.writeFileSync(outputPath, plainText, 'utf-8');
      console.log(`✅ Saved to: ${outputPath}`);
    } else {
      // Print first 500 characters as preview
      console.log('\n─── Preview (first 500 chars) ───');
      console.log(plainText.substring(0, 500));
      console.log('\n...');
    }

  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    process.exit(1);
  }
}

main();
