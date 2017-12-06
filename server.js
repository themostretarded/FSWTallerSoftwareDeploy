var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Nada');
});

app.get('/comedia', function (req, res) {
  res.send('api lista');
});

app.use('/static', express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

/*var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

  fs.readFile('./public/index.html', function (err, data) {

    res.writeHead(200, {
      'Content-Type': 'text/html'

    });
    res.write(data);
    res.end();

  });

}).listen(8080);*/