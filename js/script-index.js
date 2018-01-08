$(document).ready( function(){
	$('.icon-arrow-left-alt').hide();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activities);
});

function printNews() {
	$('#information-news').text('NUEVAS RECETAS');
}

printNews();// llamar a la funcion
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/

	function renderHighlightedRecipes(recipesArray) {
	 for ( var i = 0; i<recipesArray.length; i++){
		 if (recipesArray[i].hasOwnProperty('highlighted') === true){
			 renderRecipe(recipesArray[i])
		 }
	 }
	/*		console.log('Recipes: ', recipesArray);
			console.log('Voy a pintar la receta: ', recipe); */
}


//highlighted


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	function renderRecipe(recipe) {
		//console.log('Voy a pintar la receta: ', recipe);
		$('.list-recipes').append("<a class='item-recipe' href='#'>" +
		"<span class='attribution'>" +
		"<span class='title-recipe'>" + recipe.title + "</span>" +
		"<span class='metadata-recipe'>" +
		"<span class='author-recipe'>" + recipe.source.name + "</span>" +
		"<span class='bookmarks-recipe'>" +
		"<span class='icon-bookmark'></span>" +
				"</span>" +
			"</span>" +
		"</span>" +
		"<img src='" + recipe.source.url + "' />" +
		"</a>")
		}
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);

 for ( var i = 0; i< activitiesArray.length; i++){
	renderActivity(activitiesArray[i]);
	 if (activitiesArray.length > 0){
		 $('.wrapper-message').hide();
	 }
	
	}
}


/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {

	$('.list-activities').append("<a href='#' class='item-activity'>"+
  "<span class='attribution'>"+
  "<span class='avatar'>"+
  	"<img src='"+ recipe.userAvatar+"' class='image-avatar'>"+
  "</span>"+
  "<span class='meta'>"+
  "<span class='author'>"+recipe.userName+" </span> made"+
  "<span class='recipe'>"+recipe.recipeName+"</span>: "+recipe.text+""+
	"<span class='location'>&mdash;"+recipe.place+"</span>"+
  "</span>"+
  
  "</span>"+

  "<div class='bg-image' style='background-image: url('"+recipe.image+"')'></div>"+

"</a>");
	
}


