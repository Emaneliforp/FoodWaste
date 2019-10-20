const FIREBASE_DATABASE = firebase.database();
let apiResult; //result object returned from API (further processing is needed to see actual text data )

/*
FIREBASE_DATABASE.auth().onAuthStateChanged(function(user) { //waits until current user is fully initialized, before trying to capture user ID
    if (user) { //tests to make sure current user is not null
      console.log("user successful!!");
      userId=FIREBASE_DATABASE.auth().currentUser.uid; //get the current user's id
      console.log(userId)
    }
    else{ //if current user is not detected
      console.log("user error!")
    }
  });
*/
function recipeClicked(){ //once image is clicked, id is returned with the API data of the item
	console.log(this) //use this to get everything out of the clicked item
	console.log(apiResult.results[this.id]) //retrieves the original info from API for the clicked item
	/*
	requestedItems.push({
		foodType: apiResult.results[this.id],
		servings: 0,
	});
	*/
	requestedItems={
		foodType: apiResult.results[this.id],
		servings: 0,
	}
	console.log(requestedItems)
	postFood(); //call on the function stored in variable postFood
	modalPopup(apiResult.results[this.id].title)

}


function deleteChildrens(){ //clear search results
	let removeElements = (elms) => elms.forEach(el => el.remove());
	removeElements( document.querySelectorAll(".results") );

}

function searchRecipe(){
	/* Firebase testing works!!
	FIREBASE_DATABASE.ref('test/').set({
		username:'hi'
	})
	*/
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

		        let item = document.createElement('div');
		        item.classList.add('item');
		        let title = document.createElement('div');
		        title.classList.add('itemName');
						var apiTitle = apiResult.results[i].title;
						if(apiTitle.length < 45){
		        	title.innerHTML = apiTitle;
						}else{
							title.innerHTML = apiTitle.substring(0, 40) + "...";
						}
						let buffer = document.createElement("br");
		        let pic = document.createElement('img');
		        pic.classList.add('pic');
		        pic.src = apiResult.results[i].image;
						let infoButton = document.createElement("button");
						infoButton.classList.add("infoButton");
						infoButton.innerHTML = "Info";
						let button = document.createElement("button");
						button.classList.add("add");
						button.innerHTML = "+";

						item.setAttribute("class", "results");
						button.setAttribute("id", i);
		        item.appendChild(title);
						item.appendChild(buffer);
						item.addEventListener("click", recipeClicked);
		        item.appendChild(pic);

						item.appendChild(button);
						item.appendChild(infoButton);
		        document.getElementsByClassName("container")[0].appendChild(item);
						/*
						let y=document.createElement("img");
						y.setAttribute("src", apiResult.results[i].image);
						y.setAttribute("class", "results"); //add class to delete all results at refresh
						y.setAttribute("id",i);//give each result an id
						y.addEventListener("click", recipeClicked) // click listener triggered when an item (search result) is clicked
						document.getElementsByClassName("container")[0].appendChild(y);

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
// Brendan's Front end (and i guess some back end stuff too) Code goes here
// var foodtoBase = [];
var requestedItems = {};
document.getElementById("block").style.marginTop =  "-18vh";
var displaySearch = false;
function showOrHide(){
	if(displaySearch){
		document.getElementById("block").style.marginTop =  "-18vh";
		displaySearch = false;
	}else{
		document.getElementById("block").style.marginTop = "-0vh";
		displaySearch = true;
	}
}
document.getElementById("showButton").addEventListener("click", function(){
showOrHide();
if(!displaySearch) //when the search menu is up, then it will submit the result
searchRecipe();
});
var modal = document.getElementById("foodModal");
function modalPopup(foodTitle){
  document.getElementById("modalTitle").innerHTML = foodTitle;
  modal.style.display = "inline-block";
}

var postFood = () =>{
	alert('testing getting specific info for food')
	let foodId=requestedItems.foodType.id;
	fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+foodId+"/information", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "9966bea103msh0223a37803d871bp18fb9djsn1b904a1380b2"
	}
	})
	.then(response => {
		response.json().then(data => {
		let ingredientsList=data.extendedIngredients; //array of ingredients from API
		console.log(data)
		console.log(ingredientsList)
		/*
		let finalIngredientPush=[]; //final ingredient list
		ingredientsList.forEach(ingredient=>{
			let currIngredient={
				name:ingredient.original, //name of the ingredient
				amountUS: ingredient.measures.us, //amount of ingredient in US
				amountMetric: ingredient.measures.metric //amount of ingredient in metric
			}
			finalIngredientPush.add(currIngredient);
		})
		*/
		})

		/*
		requestedItems.servings = document.getElementById("number").value;
		modal.style.display = "none";
		FIREBASE_DATABASE.ref("recipesSent").push(requestedItems).then(function(){
			console.log("pushed yay");
		});
		*/
	})
	.catch(err => {
		console.log(err);
	});

}
window.onclick = function(event) {
  if (event.target !== modal && (event.target).parentNode.id !== "foodModal" && event.target.className !== "inModal" && event.target.id == "numbersPeople") {
    modal.style.display = "none";
		console.log(event.target.parentNode);
  }
}

//Brendan's Code is above
