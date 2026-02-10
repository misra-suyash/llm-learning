# Data

This directory contains documents, chunks, and metadata.

## Week 3 (Document Preparation)

### Extracting from Confluence HTML Export

```bash
npm run confluence-to-md path/to/export.doc output.md
```

**What it does:**
- Extracts and decodes HTML from MIME wrapper
- Removes metadata, scripts, styles, data-* attributes
- Converts to GitHub Flavored Markdown
- Optimizes for LLM caching (~25K tokens for typical PRD)

### Token Counting

```bash
# For .docx files
npm run count-tokens path/to/document.docx

# For text/markdown files
node scripts/count-tokens-text.js path/to/document.md
```

### Format Recommendations

**Markdown (Recommended):**
- Preserves structure (headers, tables, lists)
- LLM-friendly format
- ~25K tokens for 10K word document

**Avoid:** Raw HTML (80x bloat), PDF, DOCX

## Week 4+ (Embeddings)

Will include:
- Document chunking pipeline
- Embedding generation
- Vector index

## Weeks 5-6+ (RAG)

Will support:
- Naive RAG (fixed-size chunks, embedding-only search)
- Intentional RAG (semantic chunking, metadata filtering, hybrid retrieval)

## Current Status

Week 0-1: No document corpus or embeddings yet.
