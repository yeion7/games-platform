'use strict';

var $ = require('jquery');

$('#login').click(function(){
  $('.form-container').slideToggle('show','linear');
});

$('#toggleNav').click(function(){
  $('.header-menu-nav-items').toggleClass('hidden');
});
