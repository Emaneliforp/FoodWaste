const functions = require('firebase-functions');
const http = require("https");

var options = {
	"method": "GET",
	"hostname": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"port": null,
	"path": "/recipes/informationBulk?ids=262682%2C227961%2C602708%2C630255%2C759739%2C479732%2C541691%2C34035%2C766301%2C761774", //this is where the recipe ids are 
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "9966bea103msh0223a37803d871bp18fb9djsn1b904a1380b2"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    /*
    var options = {
	"method": "GET",
	"hostname": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"port": null,
	"path": "/recipes/informationBulk?ids=262682%2C227961%2C602708%2C630255%2C759739%2C479732%2C541691%2C34035%2C766301%2C761774", //this is where the recipe ids are 
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "9966bea103msh0223a37803d871bp18fb9djsn1b904a1380b2"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
*/
});
