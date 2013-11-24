var mapgen = require('./map-gen.js').mapgen;
//mapgen(1);
var fs = require('fs')
var port = 8000;
var express = require('express');
var app = express();
app.use(app.router);
app.use(express.static(__dirname));
app.get("/make", function(request, response){ //root dir
    console.log(request.query);
    var seed = request.query['seed'] || Math.random();
    if(!fs.existsSync('../map/' + seed+'.png'))
        mapgen(seed);
    response.send("Hello!!");
});
app.listen(port);
