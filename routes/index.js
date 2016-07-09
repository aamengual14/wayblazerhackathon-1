var express = require('express');
var router = express.Router();
var request = require('request');
var session = require('express-session');



var options = {
  host: 'https://api.wayblazer.com/v1/accommodations/search?adults=1&children=2&rooms=1&destination=Austin,TX&tripType=none&concepts=nature&startDate=2016-10-06T05:00:00.000Z&endDate=2016-10-10T05:00:00.000Z',
  port: 80,
  method: 'GET',
  headers: {
    'x-api-key': 'Q6TaYnb0Z48qVIafFEfx481ev598ak1pApM6c0A8'
  }
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Austin' });
});


request(options, function(error, response, body) {
  console.log(error);
})


module.exports = router;



