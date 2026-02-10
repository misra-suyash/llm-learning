# Cost Analysis: Cached PRD Q&A System

## Document Profile

```
Document:           smart-security-prd.md
Source:             Confluence HTML export (converted to Markdown)
Size:               82 KB
Tokens:             25,446
Context usage:      2.54% of Gemini 2.0 Flash (1M token limit)
Architecture:       Full cached corpus (no RAG)
```

## Model Configuration

```
Model:              gemini-2.0-flash-exp
Cache strategy:     Never expire (manual invalidation on document updates)
Cache location:     Vertex AI Cached Content API
Update frequency:   Manual (estimated: monthly or less)
```

## Cost Assumptions

### Token Estimates

```
Cached document:    25,446 tokens (fixed)
Query length:       50 tokens (average user question)
Response length:    300 tokens (average answer with context)
```

### Pricing (Gemini 2.0 Flash - Feb 2026)

```
Input (cached):     $0.0001875 per 1K tokens (75% discount)
Input (fresh):      $0.00075 per 1K tokens (uncached)
Output:             $0.003 per 1K tokens
```

Source: [Vertex AI Pricing](https://cloud.google.com/vertex-ai/generative-ai/pricing)

## Cost Breakdown

### One-Time Setup

```
Cache creation:
25,446 tokens × $0.00075/1K = $0.019 (one-time)

Note: Cache persists until manually deleted or updated
```

### Per-Query Cost

```
Cached input:       25,446 tokens × $0.0001875/1K = $0.00477
Fresh input:        50 tokens × $0.00075/1K = $0.00004
Output:             300 tokens × $0.003/1K = $0.00090
─────────────────────────────────────────────────
Cost per query:     $0.00571
```

### Daily Cost (100 Queries)

```
Cached input:       25,446 × 100 × $0.0001875/1K = $0.477
Fresh input:        50 × 100 × $0.00075/1K = $0.004
Output:             300 × 100 × $0.003/1K = $0.090
─────────────────────────────────────────────────
Daily total:        $0.571
```

### Monthly Cost (3,000 Queries)

```
Cached input:       $14.31
Fresh input:        $0.12
Output:             $2.70
─────────────────────────────────────────────────
Monthly total:      $17.13
```

### Annual Cost (36,500 Queries)

```
Cached input:       $174.09
Fresh input:        $1.46
Output:             $32.85
Cache creation:     $0.02 (amortized, one-time)
─────────────────────────────────────────────────
Annual total:       $208.42
```

## Scaling Projections

| Queries/Day | Queries/Month | Daily Cost | Monthly Cost | Annual Cost |
|-------------|---------------|------------|--------------|-------------|
| 10 | 300 | $0.06 | $1.71 | $20.54 |
| 50 | 1,500 | $0.29 | $8.57 | $102.84 |
| **100** | **3,000** | **$0.57** | **$17.13** | **$205.65** |
| 250 | 7,500 | $1.43 | $42.83 | $514.13 |
| 500 | 15,000 | $2.86 | $85.65 | $1,027.80 |
| 1,000 | 30,000 | $5.71 | $171.30 | $2,055.60 |
| 5,000 | 150,000 | $28.55 | $856.50 | $10,278.00 |
| 10,000 | 300,000 | $57.10 | $1,713.00 | $20,556.00 |

**Linear scaling:** Each additional query costs $0.00571

## Cost Breakdown by Component

### At 100 Queries/Day

```
Cached input:       83.5% ($0.477/day)
Output:             15.8% ($0.090/day)
Fresh input:        0.7% ($0.004/day)
─────────────────────────────────────────────────
Total:              100% ($0.571/day)
```

**Key insight:** Cached document reuse dominates costs. The 75% caching discount keeps this manageable.

## When to Invalidate Cache

**Triggers:**
- Document content updated (PRD revision, new sections)
- Schema changes (different markdown structure)
- Model upgrade (cache tied to specific model version)

**Process:**
```javascript
// Delete old cache
await vertex.deleteCachedContent(cachedContent.name);

// Recreate with updated document
const newCache = await vertex.createCachedContent({
  model: 'gemini-2.0-flash-exp',
  systemInstruction: fs.readFileSync('data/smart-security-prd.md', 'utf-8'),
  displayName: 'smart-security-prd-v2'
});
```

**Cost:** $0.019 per cache refresh

## Optimization Opportunities

### Current State (25,446 tokens)

Already optimal for full-caching architecture:
- ✅ Document < 30K tokens (no "lost in middle" risk)
- ✅ Caching provides 71% cost reduction vs. uncached
- ✅ Simple architecture (no chunking, no vector search, no retrieval failures)

### Future Considerations (If Document Grows)

| Document Size | Recommendation | Why |
|---------------|----------------|-----|
| < 30K tokens | **Full cached corpus** | Optimal cost/performance |
| 30K-50K tokens | **Test for accuracy** | Monitor "lost in middle" degradation |
| 50K-100K tokens | **Consider hybrid** | Cache metadata, RAG for chunks |
| > 100K tokens | **Switch to RAG** | Full caching becomes ineffective |

## Cost Sensitivity Analysis

### If Query Volume Doubles (200/day)

```
Daily cost:         $1.14 (was $0.57)
Monthly cost:       $34.26 (was $17.13)
Annual cost:        $411.30 (was $205.65)
```

### If Response Length Increases (+200 tokens)

```
Output cost/query:  $0.0015 (was $0.0009)
Daily cost (100q):  $0.63 (was $0.57, +10.5%)
Monthly cost:       $18.90 (was $17.13, +10.3%)
```

### If Document Doubles (50K tokens)

```
Cached input/query: $0.00954 (was $0.00477)
Daily cost (100q):  $1.05 (was $0.57, +84%)
Monthly cost:       $31.50 (was $17.13, +84%)

Note: At 50K tokens, consider RAG architecture
```

## Summary

### Current Configuration

```
100 queries/day × $0.00571/query = $17.13/month
```

### Cost Drivers (in order)

1. **Cached document reuse** (83.5% of cost)
2. **Output generation** (15.8% of cost)
3. **Fresh query input** (0.7% of cost)

### Architecture Decision

**Full cached corpus is optimal** for this 25K token document:
- Linear cost scaling ($0.00571 per query)
- No retrieval complexity
- No chunking/embedding costs
- Perfect recall (model sees entire document)

### Next Review Triggers

- Query volume exceeds 1,000/day ($171/month)
- Document grows beyond 40K tokens
- Model pricing changes
- Accuracy degrades (monitor via evals)

---

**Last updated:** 2026-02-09
**Document version:** smart-security-prd.md (extracted 2026-02-10)
**Model:** gemini-2.0-flash-exp
**Cache strategy:** Never expire
