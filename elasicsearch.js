var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

function getSearch(index, type, query) {
	client.search({
	  index: index,
	  type: type,
	  body: {
	    query: {
	      match: {
	        title: query
	      }
	    }
	  }
	}).then(function (resp) {
	    var hits = resp.hits.hits;
	    console.log(hits);
	}, function (err) {
	    console.trace(err.message);
	});
}

module.exports = {
  getSearch: getSearch
};