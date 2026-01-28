import express from 'express';
import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';
import 'dotenv/config';

const app = express();
app.use(express.json());

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Configuration
const CONFIG = {
  model: process.env.MODEL || 'claude-3-5-sonnet-20241022',
  temperature: parseFloat(process.env.TEMPERATURE || '0.0'),
  maxTokens: parseInt(process.env.MAX_TOKENS || '1024'),
  port: parseInt(process.env.PORT || '3000'),
};

// Request schema validation
const AskRequestSchema = z.object({
  question: z.string().min(1, 'Question cannot be empty'),
  context: z.string().nullable().optional(),
});

// Response schema validation
const AskResponseSchema = z.object({
  answer: z.string(),
  metadata: z.object({
    model: z.string(),
    temperature: z.number(),
    tokens_used: z.number().optional(),
  }),
});

// Hard-coded prompt (Week 0-1: intentionally simple)
function buildPrompt(question, context) {
  const contextSection = context
    ? `Context:\n${context}\n\n`
    : '';

  return `${contextSection}Question: ${question}

Answer the question clearly and concisely. Provide your response in valid JSON format with the following structure:
{
  "answer": "your answer here"
}`;
}

// POST /ask endpoint
app.post('/ask', async (req, res) => {
  try {
    // Validate request
    const validationResult = AskRequestSchema.safeParse(req.body);
    if (!validationResult.success) {
      return res.status(400).json({
        error: 'Invalid request',
        details: validationResult.error.errors,
      });
    }

    const { question, context } = validationResult.data;
    const prompt = buildPrompt(question, context);

    console.log(`[${new Date().toISOString()}] Processing question: "${question}"`);

    // Call Claude API
    const message = await anthropic.messages.create({
      model: CONFIG.model,
      max_tokens: CONFIG.maxTokens,
      temperature: CONFIG.temperature,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    // Extract text content from Claude response
    const responseText = message.content
      .filter(block => block.type === 'text')
      .map(block => block.text)
      .join('');

    // Parse and validate LLM response as JSON
    let llmResponse;
    try {
      llmResponse = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse LLM response as JSON:', responseText);
      return res.status(500).json({
        error: 'LLM returned invalid JSON',
        raw_response: responseText,
      });
    }

    // Validate response structure
    const response = {
      answer: llmResponse.answer || responseText,
      metadata: {
        model: CONFIG.model,
        temperature: CONFIG.temperature,
        tokens_used: message.usage.input_tokens + message.usage.output_tokens,
      },
    };

    const responseValidation = AskResponseSchema.safeParse(response);
    if (!responseValidation.success) {
      console.error('Response validation failed:', responseValidation.error);
      return res.status(500).json({
        error: 'Invalid response structure',
        details: responseValidation.error.errors,
      });
    }

    // Return validated response
    res.json(response);

    console.log(`[${new Date().toISOString()}] Response sent. Tokens: ${response.metadata.tokens_used}`);

  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(CONFIG.port, () => {
  console.log(`\n🚀 LLM Capstone Service running on port ${CONFIG.port}`);
  console.log(`📊 Model: ${CONFIG.model}`);
  console.log(`🌡️  Temperature: ${CONFIG.temperature}`);
  console.log(`\nEndpoints:`);
  console.log(`  POST http://localhost:${CONFIG.port}/ask`);
  console.log(`  GET  http://localhost:${CONFIG.port}/health\n`);
});
