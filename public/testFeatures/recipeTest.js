

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
let arrTest=[];
arrTest.push("hello")
console.log(arrTest[1])

function deleteChildrens(){ //clear search results 
	let removeElements = (elms) => elms.forEach(el => el.remove());
	removeElements( document.querySelectorAll(".results") );
	
}
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
				deleteChildrens(); //clear search results
				x=data;
				console.log(x)
				console.log(data.results.length)
				if(data.results.length!=0){
					console.log(data.results.length)
					for(let i=0;i<data.results.length;i++){
						deleteChildrens()
						/*
						let x=document.createElement("img");
						x.setAttribute("src", data.results[i].image);
						document.body.appendChild(x)
						*/

						//x.setAttribute("type","checkbox")
						//x.setAttribute("class", "results"); //give each result the same className
						//x.setAttribute("id","result "+i);//give each result an id 
						// let y=document.createElement("checkbox")
						
						
						
						let y=document.createElement("img");
						y.setAttribute("src", data.results[i].image);  	
						document.body.appendChild(y);
						let x = document.createElement("INPUT");
						x.setAttribute("type", "checkbox");	
						document.body.appendChild(x)
						
					}
					console.log(document.getElementsByClassName("results"))
				}
			});
		})
		.catch(err => {
			console.log(err);
		});
}