var express = require('express');
var router = express.Router();
var request = require("request");
var cheerio = require("cheerio");
var http = require("http");
var querystring = require('querystring');

// make a module *************************************
var user = {
	username: 'logwoo',
	password: 'carl123'
}


//console.log(stringify(user));
// var credentials = require('./manheim.js').credentials

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// Login virtually

// var j = request.jar();
//     var request = request.defaults({ jar : j }) //it will make the session default for every request
//     //...
//     request({
//         url:"https://www.manheim.com/login?WT.svl=m_hdr_gnav_login",
//         method:"POST",
//         form:{username:"logwoo",password:"carl123"}
//     },
//     function(error,response,body){
//         //Do your logic here or even another request like
//         request({
//             url:"https://www.manheim.com/members/powersearch/searchSubmit.do?vehicleTypes=-1&&vehicleTypes=104000001&&vehicleTypes=104000002&&vehicleTypes=104000003&&vehicleTypes=104000004&&fromYear=2006&&toOdometer=90000&&inventories=56&&conditionInfo=104617&&conditionGrades=8536&&conditionGrades=8532&&conditionGrades=8534&&make=101000063",
//             method:"GET",
//         }, function(error, response, body){
//             //Some logic
//             console.log("success")
//         });
//     });




var request = request.defaults({jar: true})

request.post({
  	uri: 'https://www.manheim.com/login',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //form:{"user[username":"logwoo","user[password":"carl123"}
	//body: require('querystring').stringify(user)
	body: "/authenticate/?user[username]=logwoo&&user[password]=carl123&&submit=submit"
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
