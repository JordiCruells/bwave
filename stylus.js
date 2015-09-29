var express = require('express');
var app = express();
var dir = process.argv[3]||path.join(__dirname, 'public');
app.use(express.static(dir));
app.use(require('stylus').middleware(dir));
app.listen(process.argv[2]) 
