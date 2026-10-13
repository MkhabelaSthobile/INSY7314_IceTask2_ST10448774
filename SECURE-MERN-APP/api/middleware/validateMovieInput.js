// middleware/validateMovieInput.js
// Validates the body when creating a new movie
module.exports = (req, res, next) => {
  const { title, director, year, genre } = req.body;
  const errors = [];

  if (!title || typeof title !== 'string' || title.trim() === '') {
    errors.push('title is required and must be a non-empty string');
  }
  if (!director || typeof director !== 'string' || director.trim() === '') {
    errors.push('director is required and must be a non-empty string');
  }
  if (!year || typeof year !== 'number' || year < 1888 || year > 2100) {
    errors.push('year is required and must be a number between 1888 and 2100');
  }
  if (!genre || typeof genre !== 'string' || genre.trim() === '') {
    errors.push('genre is required and must be a non-empty string');
  }

  if (errors.length > 0) {
    return res.status(400).json({ message: 'Validation failed', errors });
  }
  next();
};