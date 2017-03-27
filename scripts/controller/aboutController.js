'use strict';

(function(module){
const aboutController = {};

aboutController.render = function() {
  $('.tab-content').hide();
  $('#about').fadeIn();

  repos.requestRepos(repoView.display);
};

module.aboutController = aboutController;
})(window);