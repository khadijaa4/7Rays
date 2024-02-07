var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('API is working properly!');
});

module.exports = router;

//How come you didn't require the routes here in the index.js file

//const express = require('express)
//const router = express.Router()

//require('./routes/standup')(router)

//I think you might have something similary in the exam-controller.js section. 

//module.exports = router;

