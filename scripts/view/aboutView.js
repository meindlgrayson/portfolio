'use strict';

(function (module) {
  const repoView = {};

  const showRepos = function () {
    let $about = $('#about');
    $about.find('ul').empty();
    // $about.show().siblings().hide();
    $about.fadeIn();
  };

  function render(repo) {
    var source = $('#about-template').html();
    var template = Handlebars.compile(source);
    return template(repo);
  }

  repoView.display = function () {
    showRepos();
    $('#about ul').append(
      repos.with('name')
        .map(render)
    );

  }

  module.repoView = repoView;
})(window);