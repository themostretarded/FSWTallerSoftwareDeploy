//https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var url = "http://www.imdb.com/movies-coming-soon/?ref_=inth_cs";

request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('div:has(div.list detail)').each(function(i,element){
            var a = $(this).next();
            console.log(a.text());
        })
        /* escribir todo el documento html
        fs.appendFile('contenido.html', html, function (err) {
            if (err) throw err;
            console.log('Escribiendo');
          });
      console.log("ya se escribio");*/
    }
  });