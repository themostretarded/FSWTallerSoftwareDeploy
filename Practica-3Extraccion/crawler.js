var request = require('request');
var cheerio = require('cheerio');

request('http://www.imdb.com/movies-coming-soon/?ref_=inth_cs', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      console.log(html);
    }
  });