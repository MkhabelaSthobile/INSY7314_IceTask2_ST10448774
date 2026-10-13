// index.js - Entry point of the Structured Backend API
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// ---------- Imports ----------
const movieRoutes = require('./routes/movieRoutes');       // ← import routes
const errorHandler = require('./middleware/errorHandler'); // ← import error handler

const app = express();
const PORT = process.env.PORT || 4000;

// ---------- Controlled CORS ----------
const allowedOrigins = ['http://localhost:3000', 'http://localhost:4000'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Body parser
app.use(express.json());

// ---------- Root Route ----------
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Movies API' });
});

// ---------- Health Route ----------
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', uptime: process.uptime() });
});

// ---------- API Routes ----------
app.use('/api/movies', movieRoutes);   // ← now movieRoutes is defined

// ---------- Central Error Handler (must be last) ----------
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});