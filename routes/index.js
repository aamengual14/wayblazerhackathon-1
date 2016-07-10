var express = require('express');
var router = express.Router();
var request = require('request');
var session = require('express-session');

var masterConcepts = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Austin' });
});

router.post('/', function(req, res, next) {
  var masterBanana = req.body.concepts;
  masterConcepts = masterBanana;
  console.log(masterConcepts);
  res.redirect('/');
})

router.get('/results', function(req, res, next) {


  res.render('results');
})

var options = {
  url: 'https://api.wayblazer.com/v1/accommodations/search?adults=2&children=0&rooms=1&destination=Austin,TX&tripType=none&startDate=2016-10-06T05:00:00.000Z&endDate=2016-10-10T05:00:00.000Zconcepts=' + masterConcepts,
  headers: {
    'x-api-key': 'Q6TaYnb0Z48qVIafFEfx481ev598ak1pApM6c0A8'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var temp = JSON.parse(body);
    var info = temp.accommodations;

  }
}

request(options, callback);



module.exports = router;



