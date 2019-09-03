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
let testParam="262682";
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids="+testParam, {
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
		// document.getElementById("testing").innerHTML=data[0].cuisines
	  });
	  
})
.catch(err => {
	console.log(err);
});


function searchRecipe(){
	let allSearchParams=["food_Type","diet_","intolerances_","include_Ingredients","exclude_Ingredients"] // id of each textbox
	let finalParams={}; //final object that will contain all parameters needed in the fetch 
	for(let i=0;i<allSearchParams.length;i++){
		let term=allSearchParams[i]; //id of the current textbox 
		let textBox=document.getElementById(term).value; //get the content from the id of the textbox
		if(textBox.length>0 && textBox.localeCompare("N/A")!=0){ //check length of content in each textbox and makes sure the user did NOT type N/A inside the textbox
			// finalParams[term]=document.getElementById(allSearchParams[i]).value.split(',')//save each valid parameter to object
			finalParams[term]=document.getElementById(allSearchParams[i]).value.replace(/,/g,"%2C%20"); //take the input from text box, replace commas entered by the user with the proper separating punctuation %2C%20
		}
		else{ //if the user enters N/A in a textbox, or the textbox is left empty, it will be replaced with N%2FA 
			finalParams[term]="N%2FA";
		}
	}
	console.log(finalParams)

	// "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?query=burger&cuisine=american&includeIngredients=onions%2C%20lettuce%2C%20tomato&excludeIngredients=coconut%2C%20mango&intolerances=peanut%2C%20shellfish&type=main%20course&ranking=2&minCalories=150&maxCalories=1500&minFat=5&maxFat=100&minProtein=5&maxProtein=100&minCarbs=5&maxCarbs=100&minAlcohol=0&maxAlcohol=1000&minCaffeine=0&maxCaffeine=1000&minCopper=0&maxCopper=1000&minCalcium=0&maxCalcium=1000&minCholine=0&maxCholine=1000&minCholesterol=0&maxCholesterol=1000&minFluoride=0&maxFluoride=1000&minSaturatedFat=0&maxSaturatedFat=50&minVitaminA=0&maxVitaminA=5000&minVitaminC=0&maxVitaminC=1000&minVitaminD=0&maxVitaminD=1000&minVitaminE=0&maxVitaminE=1000&minVitaminK=0&maxVitaminK=1000&minVitaminB1=0&maxVitaminB1=1000&minVitaminB2=0&maxVitaminB2=1000&minVitaminB3=0&maxVitaminB3=1000&minVitaminB5=0&maxVitaminB5=1000&minVitaminB6=0&maxVitaminB6=1000&minVitaminB12=0&maxVitaminB12=1000&minFiber=0&maxFiber=1000&minFolate=0&maxFolate=1000&minFolicAcid=0&maxFolicAcid=1000&minIodine=0&maxIodine=1000&minIron=0&maxIron=1000&minMagnesium=0&maxMagnesium=1000&minManganese=0&maxManganese=1000&minPhosphorus=0&maxPhosphorus=1000&minPotassium=0&maxPotassium=1000&minSelenium=0&maxSelenium=1000&minSodium=0&maxSodium=1000&minSugar=0&maxSugar=1000&minZinc=0&maxZinc=1000&equipment=pan&limitLicense=false&offset=0&number=10"
	fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?query="+finalParams.food_Type+"&limitLicense=false&offset=0&number=10", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
			"x-rapidapi-key": "9966bea103msh0223a37803d871bp18fb9djsn1b904a1380b2"
		}
	})
		.then(response => {
			console.log(response);
			response.json().then(data => {
				console.log(data)
			});
		})
		.catch(err => {
			console.log(err);
		});
}