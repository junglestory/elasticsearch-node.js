var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

function getSearch(index, type, query, pageNum, perPage, callback) {
	return client.search({
	  index: index,
	  type: type,
	  from: (pageNum - 1) * perPage,
  	  size: perPage,
	  body: {
	    query: {
	      match: {
	        "_all": query
	      }
	    }
	  }
	}).then(function (resp) {
		var newArray = resp.hits.hits.map(function(hit) {
		 return hit._source;
		});
		callback(newArray);
	}, function (err) {
		callback(err.message)

	    console.trace(err.message);
	});
}

module.exports = {
  getSearch: getSearch
};