$(document).ready( function(){
  $('.icon-menu').hide();
  console.log("Funciona");

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"

  
});
 
$('.js-show-make').click(function(){
  $('.page').addClass('make');
  $('.js-show-make').addClass('active');
  $('.js-show-recipe').removeClass('active');
});

$('.js-show-recipe').click(function(){
  $('.page').removeClass('make');
  $('.js-show-recipe').addClass('active');
  $('.js-show-make').removeClass('active');
});

$('.js-back').click(function(){
  $(this).attr('href', 'index.html');
});