#!/bin/bash

# Simple test script for the /ask endpoint

curl -X POST http://localhost:3000/ask \
  -H "Content-Type: application/json" \
  -d '{
    "question": "What is the capital of France?",
    "context": null
  }' | jq

echo ""
echo "---"
echo ""

# Test with context
curl -X POST http://localhost:3000/ask \
  -H "Content-Type: application/json" \
  -d '{
    "question": "What is the population?",
    "context": "Paris is the capital and most populous city of France. It has an estimated population of 2.1 million residents."
  }' | jq
