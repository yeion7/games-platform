'use strict';

var $ = require('jquery');


$('#iconPista').click(function(){
  $('.game-card-body-help-text').fadeToggle('show','linear');
});


$('#game-how').click(function(){
  $('.header-menu-nav-items-how').slideToggle('show','linear');
});
