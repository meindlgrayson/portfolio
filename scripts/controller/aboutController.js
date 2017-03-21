'use strict';

(function(module){
const aboutController = {};

aboutController.render = function() {
  $('.tab-content').hide();
  $('#about').fadeIn('slow');
}

module.aboutController = aboutController;
})(window);