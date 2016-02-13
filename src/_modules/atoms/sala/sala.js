'use strict';
var $ = require('jquery');

$('.juego-sala').click(function(){
  $('#juegosDisponibles').fadeToggle('show','linear');
  $(this).toggleClass('rotate');
});
