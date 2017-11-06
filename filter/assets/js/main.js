$(document).ready(function() {


// Add jQuery here


$('.nav_hu').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.hu').removeClass('hide');
  $('.item.hu').addClass('show');

  $('.nav_clear').addClass('show')
});

$('.nav_an').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.an').removeClass('hide');
  $('.item.an').addClass('show');

});


$('.nav_me').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.me').removeClass('hide');
  $('.item.me').addClass('show');

});

$('.nav_gr').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.gr').removeClass('hide');
  $('.item.gr').addClass('show');

  $('.nav_clear').addClass('show')
});


$('.nav_ta').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.ta').removeClass('hide');
  $('.item.ta').addClass('show');

  $('.nav_clear').addClass('show')
});

$('.nav_ar').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.ar').removeClass('hide');
  $('.item.ar').addClass('show');

  $('.nav_clear').addClass('show')
});

$('.nav_di').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.di').removeClass('hide');
  $('.item.di').addClass('show');

  $('.nav_clear').addClass('show')
});




$('.nav_clear').click(function(event){
  $('.nav_clear').addClass('hide')
  $('.nav_clear').removeClass('show')

  $('.item').removeClass('hide');

});



$('.nav_thumbnail').click(function(event){
  $('.item').addClass('thumbnail')
});

$('.nav_large').click(function(event){
  $('.item').removeClass('thumbnail')
});














  });
