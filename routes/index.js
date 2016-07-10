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
  console.log(masterBanana);
  var options = {
  url: 'https://api.wayblazer.com/v1/accommodations/search?adults=2&children=0&rooms=1&destination=Austin,TX&tripType=none&startDate=2016-10-06T05:00:00.000Z&endDate=2016-10-10T05:00:00.000Z&concepts=' + masterBanana,
  headers: {
    'x-api-key': 'Q6TaYnb0Z48qVIafFEfx481ev598ak1pApM6c0A8'
  }
  }
  request(options, function(err, result, body){
    if(!err) {
      var temp = JSON.parse(body);
      var info = temp.accommodations[0];

      console.log(info);
      res.render('results', {body: JSON.parse(body)});
    }

  });
})


module.exports = router;
