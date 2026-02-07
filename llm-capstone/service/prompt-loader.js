// Week 2: Prompt loader utility for versioned prompts
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Loads prompt files for a specific version
 * @param {string} version - Version identifier (e.g., 'v1', 'v2')
 * @returns {Object} Prompt configuration
 */
export function loadPrompts(version = 'v1') {
  const promptDir = join(__dirname, '..', 'prompts', version);

  try {
    // Load system instruction
    const systemInstruction = readFileSync(
      join(promptDir, 'system_instruction.txt'),
      'utf-8'
    );

    // Load user template
    const userTemplate = readFileSync(
      join(promptDir, 'user_template.txt'),
      'utf-8'
    );

    // Load metadata
    const metadata = JSON.parse(
      readFileSync(join(promptDir, 'metadata.json'), 'utf-8')
    );

    return {
      version,
      systemInstruction,
      userTemplate,
      metadata,
    };
  } catch (error) {
    throw new Error(`Failed to load prompts for version ${version}: ${error.message}`);
  }
}

/**
 * Builds user prompt from template
 * @param {string} template - User prompt template with placeholders
 * @param {string} question - User's question
 * @param {string|null} context - Optional context
 * @returns {string} Filled prompt
 */
export function buildUserPrompt(template, question, context) {
  // Replace {{context}} placeholder
  const contextSection = context
    ? `Context:\n${context}\n\n`
    : '';

  let prompt = template.replace('{{context}}', contextSection);

  // Replace {{question}} placeholder
  prompt = prompt.replace('{{question}}', question);

  return prompt;
}
