//https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var url = "http://www.imdb.com/movies-in-theaters/?ref_=nv_tp_inth_1";

request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $("#main > div > div > div.lister-list").each(function(i,element){
            var i = 0;            
            var contenido = $(this).text();
            
            if(i==1){
                console.log("primera iteracion segun yo :\n ------------");
                console.log(contenido);
            }
        })
        /* escribir todo el documento html
        fs.appendFile('contenido.html', html, function (err) {
            if (err) throw err;
            console.log('Escribiendo');
          });
      console.log("ya se escribio");*/
    }
  });
  