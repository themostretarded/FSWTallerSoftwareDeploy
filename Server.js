var http = require('http');

var dt = require('./myfirstmodule');
// var modulo1 = require('./Practica-2WebCrawler/crawler');
// var modulo2 = require('./Practica-3Extraccion/index');
var PORT = process.env.PORT || 8081;
http.createServer(function (requerie, respuesta) {
    respuesta.writeHead(200, {'Content-Type': 'text/html'});
    respuesta.write("La fecha y hora de hoy chavos!: " + dt.myDateTime());
    respuesta.end('Bienvenidos al infierno');
}).listen(PORT);