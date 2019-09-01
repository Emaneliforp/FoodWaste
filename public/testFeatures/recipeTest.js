/*
var http = require("https");

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
/*
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=How%20much%20vitamin%20c%20is%20in%202%20apples%3F", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "9966bea103msh0223a37803d871bp18fb9djsn1b904a1380b2"
	}
})
.then(response => {
	response.json().then(data => {
		console.log(data)
	  });
})
.catch(err => {
	console.log(err);
});
*/
let x;
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=262682", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "9966bea103msh0223a37803d871bp18fb9djsn1b904a1380b2"
	}
})
.then(response => {
	response.json().then(data => {
		console.log(data)
		x=data;
		console.log(data[0].cuisines)
		document.getElementById("testing").innerHTML=data[0].cuisines
	  });
	  
})
.catch(err => {
	console.log(err);
});