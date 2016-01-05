var express = require('express');
var router = express.Router();
var request = require("request");
var cheerio = require("cheerio");

// make a module *************************************
var credentials = {
	username: 'logwoo',
	password: 'carl123'
};

// var credentials = require('./manheim.js').credentials

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 
request.post({
  	uri: 'https://www.manheim.com/login',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
	body: require('querystring').stringify(credentials)
}, function(err, res, body){
	if(err) {
		callback.call(null, new Error('Login failed'));
		return;
	}
	// scapping

	request('http://www.manheim.com/info', function(err, res, body) {
		if(err) {
			callback.call(null, new Error('Request failed'));
			return;
		}

		var $ = cheerio.load(body);
		var text = $('#element').text();
	});



});























module.exports = router;
