var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var http = require('http');


var gag = process.argv[2];
var url = 'http://www.explainxkcd.com/wiki/index.php?title=' + gag;

fs.mkdir('images', function(e) {});

request(url, function(err, resp, body) {

  if (resp.statusCode !== 200) {
    console.log('Fail to get the page: ' + url);
    return;
  }

  fs.mkdir('images/', function(e) {});

  $ = cheerio.load(body);
  var links = $('#mw-content-text dl a');

  $(links).each(function(i, link) {
    var href = $(link).attr('href');

    if (href.indexOf('images') !== -1 && href.indexOf('/time') !== -1 && href.indexOf('.png') !== -1) {
      var match = href.match(/time([0-9]*).png/i);
      var number = match[1];
      while (number.length < 5) number = "0" + number;

      var file = fs.createWriteStream('images/' + number + '.png');
      var request = http.get('http://www.explainxkcd.com' + href, function(response) {
        response.pipe(file);
      });

    }

  });
});
