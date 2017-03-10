'use strict';

var articleView = {};

articleView.handleMainNav = function () {
  $('.burger-nav').on('click', '.tab', function () {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn('slow');
  });
};

articleView.handleMainNav();