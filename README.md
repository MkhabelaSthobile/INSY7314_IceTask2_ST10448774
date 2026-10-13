# INSY7314_IceTask2_ST10448774

## INSY7314 ICE Task 2 — Structured Backend API (Collection)

A structured Express backend API for managing a Movies resource.

## Tech Stack
- Node.js + Express
- CORS (controlled)
- dotenv

## Setup
```bash
npm install
node index.js

## Server runs on: http://localhost:4000

## Routes/Endpoints Tested in Postman
{{baseUrl}} --> http://localhost:4000 (Added as this collection's variable)

1 --> GET   {{baseUrl}}/
2 --> GET   {{baseUrl}}/health
3 --> GET   {{baseUrl}}/api/movies
4 --> GET   {{baseUrl}}/api/movies/m1
5 --> POST   {{baseUrl}}/api/movies
6 --> POST   {{baseUrl}}/api/movies

