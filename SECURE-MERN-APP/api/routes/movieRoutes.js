// routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const validateMovieInput = require('../middleware/validateMovieInput');

// GET /api/movies
router.get('/', movieController.getAllMovies);

// GET /api/movies/:id
router.get('/:id', movieController.getMovieById);

// POST /api/movies
router.post('/', validateMovieInput, movieController.createMovie);

module.exports = router;