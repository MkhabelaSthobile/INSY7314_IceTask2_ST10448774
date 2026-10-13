// controllers/movieController.js
// In-memory data store (temporary)
let movies = [
  { id: 'm1', title: 'Inception', director: 'Christopher Nolan', year: 2010, genre: 'Sci-Fi' },
  { id: 'm2', title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972, genre: 'Crime' }
];

// GET all movies
exports.getAllMovies = (req, res) => {
  res.status(200).json({ count: movies.length, data: movies });
};

// GET a single movie by id
exports.getMovieById = (req, res) => {
  const movie = movies.find(m => m.id === req.params.id);
  if (!movie) {
    return res.status(404).json({ message: `Movie with id ${req.params.id} not found` });
  }
  res.status(200).json({ data: movie });
};

// POST - add a new movie
exports.createMovie = (req, res) => {
  const { title, director, year, genre } = req.body;
  const newMovie = {
    id: `m${movies.length + 1}`,
    title,
    director,
    year,
    genre
  };
  movies.push(newMovie);
  res.status(201).json({ message: 'Movie added', data: newMovie });
};