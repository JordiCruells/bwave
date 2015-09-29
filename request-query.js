var express = require('express');
var querystring = require('querystring');
var app = express();
app.get('/search', function(req, res){
	var params = {};
	var q = req.query;
	var hasOwn = Object.hasOwnProperty;
	for (var p in q) {
		if (hasOwn.call(q,p)) params[p] = q[p];
	}
	res.send(JSON.stringify(params));
});
app.listen(process.argv[2]) 
