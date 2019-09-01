
var unirest = require("unirest");

var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk");

req.query({
	"ids": "262682,227961,602708,630255,759739,479732,541691,34035,766301,761774"
});

req.headers({
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"x-rapidapi-key": "9966bea103msh0223a37803d871bp18fb9djsn1b904a1380b2"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

    console.log(res.body);
    console.log('hi')
});
