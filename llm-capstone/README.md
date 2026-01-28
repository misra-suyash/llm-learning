# LLM Capstone Project

A production-grade LLM Question-Answering & Reasoning Service over a private document corpus.

## Project Goal

Build a system with:
- Strict output schemas
- Evaluation & regression testing
- Retrieval-augmented generation (RAG)
- Memory & state handling
- Guardrails & fallbacks
- Latency and cost awareness

## Initial API Contract (Week 0-1)

```
POST /ask
{
  "question": "string",
  "context": "string | null"
}
```

## Initial Behavior (By Design)

- No retrieval
- No memory
- No guardrails
- No caching

The system should:
- Call the LLM
- Return a strictly validated JSON response

## Repository Structure

- `service/` - /ask endpoint + orchestration
- `prompts/` - Versioned prompts
- `evals/` - Datasets + regression tests
- `data/` - Documents, chunks, metadata
- `scripts/` - Offline experiments

## Rule

All LLM outputs must be machine-validated unless explicitly free-form.

## Progress

This project is built incrementally, week by week. Do not design the full system upfront.
