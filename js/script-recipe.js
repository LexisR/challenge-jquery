$(document).ready( function(){
	$('.icon-menu').hide();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});
 //   $('.slider li:first').show();
  // $('.pagination li:first').css({'color':'#CD6E2E'});