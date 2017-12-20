var express = require('express');
var app = express();
var rutaschileras = require('./src/rutas')
var port = process.env.PORT || 3000

app.use(express.static('public'));

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

app.use('/api', rutaschileras);

app.get('/algo', function (req, res) {
  res.send('Nada');
});