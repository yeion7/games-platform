// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');

require('../_modules/molecules/score/score');
require('../_modules/organisms/header/header');
require('../_modules/atoms/sala/sala');
require('../_modules/molecules/card/card');

$('body').resize(function () {
  if ($('.header').width() > 1200) {
    $('.header-menu-nav-items').css('display', 'flex');
  }

});
