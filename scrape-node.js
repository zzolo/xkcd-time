var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var http = require('http');


var gag = process.argv[2];
var url = 'http://www.explainxkcd.com/wiki/index.php?title=' + gag;

// Make directory if needed
fs.mkdir('images', function(e) {});

// Get page
request(url, function(err, resp, body) {
  if (resp.statusCode !== 200) {
    console.log('Fail to get the page: ' + url);
    return;
  }

  // Parse HTML with cheerio
  $ = cheerio.load(body);
  
  // Go through links
  var links = $('#mw-content-text a');
  $(links).each(function(i, link) {
    var href = $(link).attr('href');

    if (href.indexOf('images') !== -1 && href.indexOf('/time') !== -1 && href.indexOf('.png') !== -1) {
      // Pad zeroes to keep order
      var match = href.match(/time([0-9]*)([A-z]*).png/i);
      var number = match[1];
      while (number.length < 5) number = "0" + number;
      // There are a few that have a suffix.  Not sure what
      // to do with that yet.
      if (match[2]) {
        return;
      }
      
      // Check if full URL
      if (href.indexOf('http') !== 0) {
        href = 'http://www.explainxkcd.com' + href;
      }

      // Get each file
      var file = fs.createWriteStream('images/' + number + '.png');
      var request = http.get(href, function(response) {
        if (resp.statusCode == 200) {
          response.pipe(file);
        }
        else {
          console.log('Fail to get the page: ' + 'http://www.explainxkcd.com' + href);
        }
      });
    }
  });
});
