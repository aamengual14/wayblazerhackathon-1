var express = require('express');
var router = express.Router();
var request = require('request');


// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Austin' });
});



module.exports = router;


