'use strict';
var articles = []; 

function ProjObj(examples) {
  this.name = examples.name,
  this.projUrl = examples.projUrl;
  this.description = examples.description;
  this.author = examples.author;
  this.thumb = examples.thumb;
}

ProjObj.prototype.toHtml = function () {
  var source   = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
};

projArray.forEach(function(ele) {
  articles.push(new ProjObj(ele));
});

articles.forEach(function(a){
  $('#projects').append(a.toHtml());
});