'use strict';

(function (module) {
  const workController = {};

  workController.render = function() {
    $('.tab-content').hide();
    $('#projects').fadeIn('slow');
  }

  module.workController = workController;
})(window);