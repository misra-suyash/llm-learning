#!/usr/bin/env node

/**
 * Convert Confluence HTML export to clean Markdown
 *
 * Usage:
 *   node scripts/confluence-to-markdown.js input.doc output.md
 */

import { JSDOM } from 'jsdom';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import fs from 'fs';
import path from 'path';

function extractAndDecodeHTML(filePath) {
  // Read file
  let content = fs.readFileSync(filePath, 'utf-8');

  // Decode quoted-printable encoding
  content = content.replace(/=\r?\n/g, '');  // Remove soft line breaks
  content = content.replace(/=([0-9A-F]{2})/g, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });

  // Replace =3D with =
  content = content.replace(/=3D/g, '=');

  // Extract HTML content (between <html> tags)
  const htmlMatch = content.match(/<html[^>]*>([\s\S]*?)<\/html>/i);

  if (!htmlMatch) {
    throw new Error('Could not find HTML content in file');
  }

  return htmlMatch[0];
}

function cleanupHTML(htmlContent) {
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;

  // Remove unwanted elements
  const elementsToRemove = document.querySelectorAll(
    'script, style, meta, link, .page-metadata, .footer, nav, header, .toc-macro'
  );
  elementsToRemove.forEach(el => el.remove());

  // Remove all data-* attributes from all elements
  const allElements = document.querySelectorAll('*');
  allElements.forEach(el => {
    // Remove data attributes
    Array.from(el.attributes).forEach(attr => {
      if (attr.name.startsWith('data-') ||
          attr.name.startsWith('aria-') ||
          attr.name === 'class' ||
          attr.name === 'id' ||
          attr.name === 'style' ||
          attr.name === 'target' ||
          attr.name === 'rel') {
        el.removeAttribute(attr.name);
      }
    });

    // Clean up specific elements
    if (el.tagName === 'TABLE') {
      el.removeAttribute('width');
    }
    if (el.tagName === 'COL') {
      el.removeAttribute('width');
      el.removeAttribute('style');
    }
  });

  // Remove colgroup elements (table column formatting)
  const colgroups = document.querySelectorAll('colgroup');
  colgroups.forEach(el => el.remove());

  return dom.serialize();
}

function convertToMarkdown(htmlContent) {
  // Initialize TurndownService
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    emDelimiter: '_',
    strongDelimiter: '**',
    preformattedCode: false
  });

  // Add GitHub Flavored Markdown support (tables, strikethrough, etc.)
  turndownService.use(gfm);

  // Custom rule for removing empty elements
  turndownService.addRule('removeEmpty', {
    filter: (node) => {
      return node.textContent.trim() === '' &&
             !['img', 'br', 'hr', 'td', 'th'].includes(node.nodeName.toLowerCase());
    },
    replacement: () => ''
  });

  // Custom rule to remove nested paragraphs in table cells
  turndownService.addRule('removeNestedP', {
    filter: (node) => {
      return node.nodeName === 'P' &&
             node.parentNode &&
             ['TD', 'TH'].includes(node.parentNode.nodeName);
    },
    replacement: (content) => content.trim()
  });

  // Convert HTML to Markdown
  const markdown = turndownService.turndown(htmlContent);

  return markdown;
}

function cleanupMarkdown(markdown) {
  return markdown
    // Remove any remaining HTML attributes that slipped through
    .replace(/\s+(local-id|data-[\w-]+|aria-[\w-]+)="[^"]*"/g, '')

    // Remove HTML tags that might remain
    .replace(/<(colgroup|col)[^>]*>.*?<\/\1>/gs, '')
    .replace(/<(colgroup|col)[^>]*>/g, '')

    // Remove excessive blank lines (more than 2 consecutive)
    .replace(/\n{4,}/g, '\n\n\n')

    // Clean up list formatting
    .replace(/\n\s*\n(\s*[-*+])/g, '\n$1')

    // Remove spaces before list items
    .replace(/\n[ \t]+(-|\*|\+|\d+\.)/g, '\n$1')

    // Clean up table formatting
    .replace(/\|\s+\|/g, '| |')

    // Remove trailing spaces
    .replace(/[ \t]+$/gm, '')

    // Normalize line endings
    .replace(/\r\n/g, '\n')

    // Remove repeated titles/headers (confluence adds duplicates)
    .replace(/^(#+ .+)\n+\1$/gm, '$1')

    .trim();
}

function addMetadata(markdown, originalFile) {
  const metadata = `---
source: ${path.basename(originalFile)}
extracted: ${new Date().toISOString()}
format: confluence-html-export
---

`;
  return metadata + markdown;
}

function main() {
  const args = process.argv.slice(2);

  if (args.length < 2 || args.includes('--help')) {
    console.log(`
Confluence HTML to Markdown Converter

Usage:
  node scripts/confluence-to-markdown.js <input.doc> <output.md>

Examples:
  node scripts/confluence-to-markdown.js export.doc document.md
    `);
    process.exit(0);
  }

  const inputFile = args[0];
  const outputFile = args[1];

  // Validate input
  if (!fs.existsSync(inputFile)) {
    console.error(`❌ Error: Input file not found: ${inputFile}`);
    process.exit(1);
  }

  console.log(`\n📄 Converting: ${path.basename(inputFile)}\n`);

  try {
    // Step 1: Extract and decode HTML
    console.log('⏳ Extracting HTML from Confluence export...');
    const htmlContent = extractAndDecodeHTML(inputFile);

    // Step 2: Clean up HTML
    console.log('⏳ Cleaning HTML...');
    const cleanHTML = cleanupHTML(htmlContent);

    // Step 3: Convert to Markdown
    console.log('⏳ Converting to Markdown...');
    const markdown = convertToMarkdown(cleanHTML);

    // Step 4: Clean up Markdown
    console.log('⏳ Cleaning up Markdown...');
    const cleanMarkdown = cleanupMarkdown(markdown);

    // Step 5: Add metadata
    const finalMarkdown = addMetadata(cleanMarkdown, inputFile);

    // Step 6: Save to file
    fs.writeFileSync(outputFile, finalMarkdown, 'utf-8');

    // Statistics
    const lines = finalMarkdown.split('\n').length;
    const words = finalMarkdown.split(/\s+/).length;
    const chars = finalMarkdown.length;

    console.log('─────────────────────────────────────────');
    console.log(`✅ Conversion complete!`);
    console.log(`─────────────────────────────────────────`);
    console.log(`Lines:              ${lines.toLocaleString()}`);
    console.log(`Words:              ${words.toLocaleString()}`);
    console.log(`Characters:         ${chars.toLocaleString()}`);
    console.log(`─────────────────────────────────────────`);
    console.log(`Saved to:           ${outputFile}`);
    console.log(`\n💡 Next step: Run token counter on the markdown file:`);
    console.log(`   node scripts/count-tokens-text.js "${outputFile}"`);
    console.log('');

  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
