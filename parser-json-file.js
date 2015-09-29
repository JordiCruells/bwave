var express = require('express');
var fs = require('fs');
var app = express();
var jsonBooks = JSON.parse(fs.readFileSync(process.argv[3])); 

app.get('/books', function(req, res){
	res.send(JSON.stringify(jsonBooks));
});

app.listen(process.argv[2]) 
