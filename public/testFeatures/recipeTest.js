

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

let apiResult; //result returned from API


function recipeClicked(){ //once image is clicked, id is returned with the API data of the item
	alert(this.id) //get id of clicked element 
	console.log(this) //use this to get everything out of the clicked item 
	console.log(apiResult.results[this.id]) //retrieves the original info from API for the clicked item 
	
}


function deleteChildrens(){ //clear search results 
	let removeElements = (elms) => elms.forEach(el => el.remove());
	removeElements( document.querySelectorAll(".results") );
	
}
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
				apiResult=data; //save data passed back from the API 
				console.log(apiResult)
				console.log(apiResult.results.length)
				if(apiResult.results.length!=0){
					console.log(apiResult.results.length)
					for(let i=0;i<apiResult.results.length;i++){
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
						y.setAttribute("src", apiResult.results[i].image);  
						y.setAttribute("class", "results"); //add class to delete all results at refresh
						y.setAttribute("id",i);//give each result an id 
						
						y.addEventListener("click", recipeClicked) // click listener triggered when an item is clicked 
						document.body.appendChild(y); 

						/* Makes the checkbox next to each image 
						let x = document.createElement("INPUT");
						x.setAttribute("type", "checkbox");	
						document.body.appendChild(x)
						*/
						
					}
					console.log(document.getElementsByClassName("results"))
				}
			});
		})
		.catch(err => {
			console.log(err);
		});
}
// Brendan's Front end Code goes here
document.getElementById("block").style.marginTop =  "-18vh";
var displaySearch = false;
var string = document.getElementById("block").style.marginTop;
string = parseInt(string.substring(0, string.length - 2), 10);
function showOrHide(){
if(document.getElementById("block").style.marginTop ==  "0vh"){
	var i = 0;
	var int = setInterval(()=>{
		document.getElementById("block").style.marginTop =  i + "vh";
		i--;
		if(i < string){
			clearInterval(int);
		}
	}, 10);
	displaySearch = false;
}else{
	var i = string;
	var int = setInterval(()=>{
		document.getElementById("block").style.marginTop =  i + "vh";
		i++
		if(i > 0){
			clearInterval(int);
		}
	}, 10);
	displaySearch = true;

}
}
document.getElementById("showButton").addEventListener("click", function(){
showOrHide();
if(!displaySearch) //when the search menu is up, then it will submit the result 
searchRecipe();
});
//Brendan's Code is above
