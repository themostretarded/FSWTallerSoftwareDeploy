var http = require('http');

var dt = require('./myfirstmodule');
var modulo1 = require('./Practica-2WebCrawler/crawler');
var modulo2 = require('./Practica-3Extraccion/index');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("La fecha y hora de hoy chavos!: " + dt.myDateTime());
    res.end('Bienvenidos al infierno');
}).listen(8081);