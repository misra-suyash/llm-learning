import express from 'express';
import { VertexAI } from '@google-cloud/vertexai';
import { z } from 'zod';
import 'dotenv/config';

const app = express();
app.use(express.json());

// Initialize Vertex AI client
const vertexAI = new VertexAI({
  project: process.env.GOOGLE_PROJECT_ID,
  location: process.env.GOOGLE_LOCATION || 'us-central1',
});

// Configuration
const CONFIG = {
  model: process.env.MODEL || 'gemini-1.5-flash-002',
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

    // Get the generative model
    const model = vertexAI.getGenerativeModel({
      model: CONFIG.model,
      generationConfig: {
        maxOutputTokens: CONFIG.maxTokens,
        temperature: CONFIG.temperature,
      },
    });

    // Call Gemini API
    const result = await model.generateContent(prompt);
    const geminiResponse = result.response;

    // Extract text content from Gemini response
    const responseText = geminiResponse.candidates[0].content.parts[0].text;

    // Strip markdown code fences if present
    const cleanedText = responseText
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/, '')
      .replace(/\s*```$/, '')
      .trim();

    // Parse and validate LLM response as JSON
    let llmResponse;
    try {
      llmResponse = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error('Failed to parse LLM response as JSON:', responseText);
      return res.status(500).json({
        error: 'LLM returned invalid JSON',
        raw_response: responseText,
      });
    }

    // Calculate total tokens used
    const tokensUsed = (geminiResponse.usageMetadata?.promptTokenCount || 0) +
                      (geminiResponse.usageMetadata?.candidatesTokenCount || 0);

    // Validate response structure
    const response = {
      answer: llmResponse.answer || responseText,
      metadata: {
        model: CONFIG.model,
        temperature: CONFIG.temperature,
        tokens_used: tokensUsed,
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
