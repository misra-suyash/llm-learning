# Setup Instructions (Week 0-1)

## Prerequisites

- Node.js (v18 or later)
- Anthropic API key

## Installation

1. Install dependencies:
```bash
cd llm-capstone
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Edit `.env` and add your Anthropic API key:
```
ANTHROPIC_API_KEY=your_actual_api_key_here
```

## Running the Service

Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## Testing

Test the `/ask` endpoint:
```bash
./service/test-request.sh
```

Or manually with curl:
```bash
curl -X POST http://localhost:3000/ask \
  -H "Content-Type: application/json" \
  -d '{
    "question": "What is 2+2?",
    "context": null
  }'
```

## What to Observe (Week 0-1 Goals)

As you test this endpoint, pay attention to:

1. **Token limits** - Try very long questions or contexts
2. **Variance vs determinism** - With temperature=0.0, responses should be consistent
3. **Schema fragility** - When does the LLM fail to return valid JSON?
4. **Long prompt failures** - At what point do prompts become ineffective?

## Progress Gate

By the end of Week 0-1, you should be able to **predict before running it** when `/ask` will fail or degrade.

Try these experiments:
- Send the same question multiple times (should be identical with temp=0.0)
- Send increasingly long questions
- Send ambiguous or malformed questions
- Send questions that require reasoning
- Send questions outside the model's knowledge cutoff
