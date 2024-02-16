var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('API is working properly!');
});

module.exports = router;

//How come you didn't require the routes here in the index.js file
    // We're not doing much with this file.
    // All the routes we're actually going to use are in exams.js
    // This file is just to show that the API is working properly.
    // It displays the message on line 6 when you go to the root URL of the API. `http://localhost:9000/`