const errorHandler = (err, req, res, next) => {
  // 500 = server error code
  const statusCode = res.statusCode ? res.statusCode : 500;
  // make status code of the response to statusCode variable
  res.status(statusCode);
  // return the error message, the stack trace (extra info like the line number)
  res.json({
    message: err.message,
    // only show stack if the node enviroment is development
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { errorHandler };
