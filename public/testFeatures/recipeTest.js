/*
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
*/

function searchRecipe(){
	let allSearchParams=["food_Type","diet_","intolerances_","include_Ingredients","exclude_Ingredients"] // id of each textbox
	let finalParams={}; //final object that will contain all parameters needed in the fetch 
	let x;
	for(let i=0;i<allSearchParams.length;i++){
		let term=allSearchParams[i]; //id of the current textbox 
		let textBox=document.getElementById(term).value; //get the content from the id of the textbox
		if(textBox.length>0 && textBox.localeCompare("N/A")!=0){ //check length of content in each textbox and makes sure the user did NOT type N/A inside the textbox
			// finalParams[term]=document.getElementById(allSearchParams[i]).value.split(',')//save each valid parameter to object
			finalParams[term]=document.getElementById(allSearchParams[i]).value.replace(/,/g,"%2C%20"); //take the input from text box, replace commas entered by the user with the proper separating punctuation %2C%20
		}
		else{ //if the user enters N/A in a textbox, or the textbox is left empty, an empty string is sent for the parameter
			finalParams[term]="";
		}
	}
	console.log(finalParams)

	fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?query="+finalParams.food_Type+"&diet="+finalParams.diet_+"&includeIngredients="+finalParams.include_Ingredients+"&excludeIngredients="+finalParams.exclude_Ingredients+"&intolerances="+finalParams.intolerances_+"&limitLicense=false&offset=0&number=10", {
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
			});
		})
		.catch(err => {
			console.log(err);
		});
}