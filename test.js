var date = new Date();
var times = "";
//Math.seedrandom("hello");
var color = [];
color[2] = {r: 41,g: 153,b: 29};
color[1] = {r: 240,g: 205,b: 101};
color[.7] = {r: 121,g: 137,b: 213};
color[.5] = {r: 77,g: 112,b: 255};
color[.3] = {r: 25,g: 55,b: 176};
var SimplexNoise = require('simplex-noise');
var simplex = new SimplexNoise(),
    /*Canvas = require('canvas'),
    canvas = new Canvas(1024, 1024),
    ctx = canvas.getContext('2d'),
    imgdata = ctx.getImageData(0, 0, canvas.width, canvas.height),
    data = imgdata.data,*/
    canvas = {width: 1024, height: 1024},
    block = [],
    t = 20;
times += " , " + (new Date().getTime()-date.getTime());
function get(x,y){
    return block[x + y*canvas.width] || 0;
}
function set(x,y,val){
    block[x + y*canvas.width] = val|| 0;
}
for (var x = 0; x < canvas.width; x++) {
    for (var y = 0; y < canvas.height; y++) {
        var r = simplex.noise2D(x / 800, y / 800, t) * 0.5 + 0.5;
        if (r > .9) {
            set(x,y,2);
        } else {
            if (r > .77) set(x,y,1);
            else{
                set(x,y,(r > .7)?.7:((r > .57)?.5:.3));
            }
        }
    }
}
times += " , " + (new Date().getTime()-date.getTime());
/*for (var x = 0; x < canvas.width; x++) {
    for (var y = 0; y < canvas.height; y++) {
        temp = get(x,y);
        data[(x + y * canvas.width) * 4 + 0] = color[temp].r;
        data[(x + y * canvas.width) * 4 + 1] = color[temp].g;
        data[(x + y * canvas.width) * 4 + 2] = color[temp].b;
        data[(x + y * canvas.width) * 4 + 3] = 255;
    }
}
times += " , " + (new Date().getTime()-date.getTime());
t++;*/
//ctx.putImageData(imgdata, 0, 0);
console.log(times);
/*var out = fs.createWriteStream(__dirname + '/state.png')
  , stream = canvas.createPNGStream();

stream.on('data', function(chunk){
  out.write(chunk);
});*/
