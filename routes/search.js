var express = require('express');
var router = express.Router();
var elastic = require('../elasicsearch.js');

/* GET search listing. */
router.get('/', function(req, res) {
	var totalCount = 0;
	var pageNum = 1;
	var perPage = 10;
	var pageCount = 1;
	var query = req.query.query;
	query = (typeof query === 'undefined') ? '' : query;

	if (query != "") {
		 elastic.getSearch("books", "book", query, pageNum, perPage, function (results) {
		 	totalCount = results.length;
			pageCount = Math.ceil(totalCount / perPage);	        

	        res.render('search', { query: query, totalCount: totalCount, pageCount: pageCount, results: results});
	    });
	} else {
		res.render('search', { query: query, totalCount: totalCount, pageCount: pageCount});
	}  
});

module.exports = router;
