'use strict';

(function(module) {
  const mainController = {};

  mainController.render = function() {
    $('.tab-content').hide();
    $('#home').fadeIn('slow');
  }

  module.mainController = mainController;
})(window);