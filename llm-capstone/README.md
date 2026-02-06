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

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- Access to a Google Cloud Platform (GCP) project with billing enabled
- Vertex AI API enabled in your GCP project

### 1. Create a Service Account in GCP

To use Vertex AI with IAM-based authentication (no API keys):

1. Go to [IAM & Admin > Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts) in your GCP project
2. Click **"+ CREATE SERVICE ACCOUNT"**
3. Fill in the details:
   - **Service account name**: `llm-capstone-sa` (or your preferred name)
   - **Description**: "Service account for LLM Capstone application"
4. Click **"CREATE AND CONTINUE"**
5. Grant the following IAM role:
   - **Vertex AI User** (`roles/aiplatform.user`)
6. Click **"CONTINUE"** then **"DONE"**
7. Find your service account in the list and click on it
8. Go to the **"KEYS"** tab
9. Click **"ADD KEY"** → **"Create new key"**
10. Select **"JSON"** format and click **"CREATE"**
11. Save the downloaded JSON key file to the project root (it will be named something like `home-dev-xxxxx-xxxxxxxxx.json`)

**Important**: The key file is gitignored and should never be committed to version control.

### 2. Configure Environment Variables

Create a `.env` file in the project root:

```bash
# Google Vertex AI Configuration
GOOGLE_PROJECT_ID=your-gcp-project-id
GOOGLE_LOCATION=us-central1
GOOGLE_APPLICATION_CREDENTIALS=./your-service-account-key.json

# Model Configuration
MODEL=gemini-2.0-flash-exp
TEMPERATURE=0.0
MAX_TOKENS=1024
PORT=3000
```

Replace:
- `your-gcp-project-id` with your GCP project ID
- `./your-service-account-key.json` with the path to your downloaded JSON key file

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Service

```bash
npm start
```

The service will start on `http://localhost:3000`

### 5. Test the Endpoint

```bash
curl -X POST http://localhost:3000/ask \
  -H "Content-Type: application/json" \
  -d '{"question": "What is the capital of France?"}'
```

Expected response:
```json
{
  "answer": "Paris",
  "metadata": {
    "model": "gemini-2.0-flash-exp",
    "temperature": 0,
    "tokens_used": 59
  }
}
```

## Progress

This project is built incrementally, week by week. Do not design the full system upfront.
