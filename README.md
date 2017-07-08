# Elasticsearch-node.js
This is a sample for Elasticsearch clien with node.js.

## Installation
* [Download](https://www.elastic.co/downloads/elasticsearch) and unzip the Elasticsearch official distribution.
* Run bin\elasticsearch
* Run curl -X GET http://localhost:9200/
* [Sampe data](https://github.com/junglestory/elasticsearch-sample-books.git)

## Soruce code clone
git clone https://github.com/junglestory/elasticsearch-node.js.git
<pre><code>
$ cd elasticsearch-node.js
</code></pre>

## Configuration
* elasticsearch.js
<pre><code>
var client = new elasticsearch.Client({
  host: '[your host]',
  log: 'trace'
});
</code></pre>
* /routes/search.js
<pre><code>
elastic.getSearch([index], [type], query, pageNum, perPage, function (results) {
		 	totalCount = results.length;
			pageCount = Math.ceil(totalCount / perPage);	        
	        res.render('search', { query: query, totalCount: totalCount, pageCount: pageCount, results: results});
	    });
</code></pre>

## Run
<pre><code>
$ npm install
$ npm start
</pre></code>
