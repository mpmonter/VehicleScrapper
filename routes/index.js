var express = require('express');
var router = express.Router();
var request = require("request");
var cheerio = require("cheerio");
var http = require("http");

// make a module *************************************
var credentials = {
	username: 'logwoo',
	password: 'carl123'
}


console.log(credentials);
// var credentials = require('./manheim.js').credentials

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// Login virtually
request.post({
  	uri: 'https://www.manheim.com/login?WT.svl=m_hdr_gnav_login',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
	body: require('querystring').stringify(credentials)
}, function(err, res, body){
	if(err) {
		callback.call(null, new Error('Login failed'));
		return;
	}
	console.log('success');
	// scapping
	//request url string with search feature
	request('https://www.manheim.com/members/powersearch/searchSubmit.do?vehicleTypes=-1&&vehicleTypes=104000001&&vehicleTypes=104000002&&vehicleTypes=104000003&&vehicleTypes=104000004&&fromYear=2006&&toOdometer=90000&&inventories=56&&conditionInfo=104617&&conditionGrades=8536&&conditionGrades=8532&&conditionGrades=8534&&make=101000063', function(err, res, html) {
		if(err) {
			callback.call(null, new Error('Request failed'));
			console.log('Error has occured ');
			return;
		}
		$ = cheerio.load(html);
		console.log(html + "what Page");

		var title, vin, imageUrl, miles, engine, mmr;

		var JSON = { title: "", vin: "", imageUrl: "", miles: "", engine: "", mmr: "" };


	
    // $("div.span1-3 > img").each(function(i, e) {
    //     console.log($(e).attr("src"));
    //   });

		console.log($('#pageTitle').text());
		
	});



});























module.exports = router;
