var mapgen = require('./map-gen.js').mapgen;
mapgen(1);
var port = 8000;
var express = require('express');
var app = express();
app.use(app.router);
app.use(express.static(__dirname));
app.listen(port);
