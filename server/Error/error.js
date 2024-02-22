const errorMiddleware = (err, req, res, next) => {
  console.error("Error:", err);
  return res.status(505).json({ error: err.message });
};

module.exports = errorMiddleware;
