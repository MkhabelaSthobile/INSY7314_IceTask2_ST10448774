// middleware/errorHandler.js
// Central error handler - catches all errors passed via next(err)
module.exports = (err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};