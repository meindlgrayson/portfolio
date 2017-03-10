'use strict';

function ProjObj(examples) {
  this.name = examples.name,
  this.projUrl = examples.projUrl;
  this.description = examples.description;
  this.author = examples.author;
  this.thumb = examples.thumb;
}

ProjObj.prototype.toHtml = function () {
  var $newProj = $('article.template').clone();
}