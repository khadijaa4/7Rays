var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

require('dotenv').config();
const ATLAS_URL = process.env.ATLAS_URL;

var indexRouter = require('./routes/index');
var examsRouter = require('./routes/exams');

// Mongoose Connection
const mongoose = require('mongoose');

mongoose.connect(ATLAS_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log(err));

// Initialilze express app
var app = express();

/**
 * Middleware setup
 */

app.use(logger('dev')); // Log requests to the console
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: false })); // Parse incoming requests with urlencoded payloads
app.use(cookieParser()); // Parse cookies attached to the client request
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

/**
 * Routes setup
 */

app.use('/', indexRouter); // Index route
app.use('/exams', examsRouter); // Exams route

/**
 * Error handling
 */

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Send the error as a JSON response
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});


/**
 * Export app
 */

module.exports = app;
