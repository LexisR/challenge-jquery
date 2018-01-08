$(document).ready( function(){
  $('.icon-menu').hide();
  console.log("Funciona");

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"

  
});
 
$('.js-show-recipe').on('click', function(){
  $('.page').removeClass('make');
});

$('.js-show-make').on('click', function(){
  $('.page').addClass('make');
});