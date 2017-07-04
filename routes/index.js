var express = require('express');
var router = express.Router();
var elastic = require('../elasicsearch.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	elastic.getSearch("books", "book", "동급생");

  res.render('index', { title: 'Express' });
});

module.exports = router;
