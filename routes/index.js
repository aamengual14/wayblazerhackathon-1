var express = require('express');
var router = express.Router();
var request = require('request');
var session = require('express-session');



// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Austin' });
});


var options = {
  url: 'https://api.wayblazer.com/v1/accommodations/search?adults=2&children=0&rooms=1&destination=Austin,TX&tripType=none&startDate=2016-10-06T05:00:00.000Z&endDate=2016-10-10T05:00:00.000Z',
  headers: {
    // 'accept': 'application/json'
    // 'accept-encoding': 'gzip, deflate'
    // 'accept-language: en-US,en;q=0.8'
    // 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
    'x-api-key': 'Q6TaYnb0Z48qVIafFEfx481ev598ak1pApM6c0A8'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var temp = JSON.parse(body);
    var info = temp.accommodations;

    for (var j = 0; j < info.length; j++){

    console.log(info[j]);

}

  }
}

request(options, callback);


module.exports = router;


