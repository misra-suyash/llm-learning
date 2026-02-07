# LLM Learning Plan – Roadmap 1 & 2 (Capstone-Based)

This document is a guided, structured learning plan for an experienced software engineer to build strong fundamentals in LLM-aware engineering and LLM application engineering using a single capstone project.

Time commitment: ~6 hours/week Duration: ~12 weeks Outcome: production-grade intuition + a defensible system you can explain end-to-end.

## Capstone Definition

Build a production-grade LLM Question–Answering & Reasoning Service over a private document corpus, with:
- strict output schemas
- evaluation & regression testing
- retrieval-augmented generation (RAG)
- memory & state handling
- guardrails & fallbacks
- latency and cost awareness

This capstone is intentionally domain-agnostic so it generalizes to internal docs, RFCs, runbooks, policies, etc.

Repository Skeleton (create in Week 0)

This project is intentionally built incrementally. You do not design the full system upfront.

You will start with a single minimal API endpoint and evolve it week by week.

Initial API Contract (Week 0–1)

```json
POST /ask
{
  "question": "string",
  "context": "string | null"
}

Initial behavior (by design):
- No retrieval
- No memory
- No guardrails
- No caching

The system should:
- call the LLM
- return a strictly validated JSON response

This endpoint is the spine of the capstone. Every course you take will change how /ask behaves internally.

llm-capstone/
  service/        # /ask endpoint + orchestration
  prompts/        # versioned prompts
  evals/          # datasets + regression tests
  data/           # documents, chunks, metadata
  scripts/        # offline experiments

Rule: All LLM outputs must be machine-validated unless explicitly free-form.

Phase-by-Phase Schedule

Weeks 0–1 — Orientation & LLM Fundamentals (No courses)

Goal: Establish a concrete baseline system before learning abstractions.

What you build in the capstone:
- A working /ask endpoint
- A single hard-coded prompt
- Deterministic inference (low temperature)

What changes in the system:
- Nothing fancy — this is intentional
- You are observing raw model behavior

What you are learning (implicitly):
- Token limits
- Variance vs determinism
- Schema fragility
- Why long prompts fail

Progress gate:
- You can predict before running it when /ask will fail or degrade.

Week 2 — Prompting as Engineering

Courses:
- Google Cloud: Generative AI with Vertex AI Studio
- Google Cloud: Generative AI with Vertex AI – Prompt Design (project)

What the courses give you:
- Prompt structure
- Instruction clarity
- Output formatting discipline

How this translates into the capstone:

Changes to /ask must include: 1. Prompts moved out of code and versioned: prompts/      ask_v1.txt      ask_v2.txt 2. Strict JSON schema validation on responses 3. Prompt regression tests that can fail CI

What /ask looks like now:
- Same endpoint
- Same request
- Different internal guarantees

Progress gate:
- A prompt change can break CI, and you can explain why.

## Week 3 — Evaluation Mindset

Course:
- Google Cloud: Machine Learning Operations with Vertex AI – Model Evaluation

What the course gives you:
- Evaluation as a first-class engineering concern

How this translates into the capstone:

You do not change the API contract. You change how correctness is measured.

Concrete changes:
- Create a golden dataset: evals/golden.json
- Add an offline eval runner
- Classify failures:
- hallucination
- partial answer
- refusal
- irrelevant

Progress gate:
- You can explain why a /ask response is wrong, not just that it is wrong.

## Week 4 — Embeddings Done Correctly

Course:
- DeepLearning.AI: Understanding and Applying Text Embeddings

What the course gives you:
- How similarity search actually behaves

How this translates into the capstone:

This is the first structural change to /ask.

Concrete additions:
- Document chunking pipeline
- Embedding generation
- Vector index

Important:
- /ask still does NOT use retrieval yet
- You are preparing the retrieval layer in isolation

Progress gate:
- You have manually inspected embedding clusters and found false similarities.

Weeks 5–6 — Retrieval-Augmented Generation (RAG)

Course:
- DeepLearning.AI: Retrieval-Augmented Generation (RAG)

What the course gives you:
- How retrieval and generation interact

How this translates into the capstone:

/ask now changes behavior based on a retrieval mode.

You implement two internal paths:

Naive RAG

Fixed-size chunks

Embedding-only search

Intentional RAG

Semantic chunking

Metadata filtering

Hybrid retrieval

The external API remains unchanged.

Required artifact:
- A document: Why naive RAG failed in my system

Progress gate:
- You can debug retrieval failures without blaming the model.

Week 7 — State, Memory, and Drift

Courses: None (learned by experimentation)

Capstone work:
- Implement stateless mode
- Add session memory
- Add long-term memory
- Measure drift and contradictions across turns

Progress gate:
- You know when not to use memory.

Week 8 — Cost, Latency, and UX Realism

Courses: None (use official docs as reference)

Capstone work:
- Add streaming responses
- Add exact + semantic caching
- Track p50/p95 latency and cost per request

Progress gate:
- You can estimate monthly cost at 10× traffic.

## Week 9 — Guardrails & Failure Engineering

### Courses: None

Capstone work:
- Output validation
- Retry with constrained prompts
- Safe fallback responses
- Intentionally break the system

Progress gate:
- Failures are obvious to users and operators.

## Weeks 10–11 — Hardening & Synthesis

Capstone deliverables: 1. Architecture diagram 2. Tradeoff analysis 3. “What breaks first at 10× scale?” document

## Week 12 — Capstone Review

Final reflection:
- Why RAG here?
- Why memory here?
- Why not fine-tuning?

If you can answer these calmly and precisely, Roadmap 1 & 2 are complete.

## Non-Negotiable Rules

Do not move phases without passing the progress gate

Do not binge courses without modifying the capstone the same week

Prefer breaking systems over watching more content

### Deferred Topics (Intentional)

Fine-tuning

Training models

Transformer math

Benchmark chasing

These come later, after real system failures.

## End State

By the end of this plan, you should:
- Reason clearly about LLM failure modes
- Build reliable RAG systems
- Measure quality, latency, and cost
- Defend design tradeoffs like a senior engineer

This document is meant to be worked from, not read once.
