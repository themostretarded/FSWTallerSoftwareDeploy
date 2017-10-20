var http = require('http');

var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("La fecha y hora de hoy chavos!: " + dt.myDateTime());
    res.end('Bienvenidos al infierno');
}).listen(8081);