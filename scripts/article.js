'use strict';
var articles = []; 

function ProjObj(examples) {
  this.name = examples.name,
  this.projUrl = examples.projUrl;
  this.description = examples.description;
  this.author = examples.author;
  this.thumb = examples.thumb;
}

ProjObj.all = [];

ProjObj.prototype.toHtml = function () {
  var source   = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
};

ProjObj.loadAll = function (workData) {

  workData.forEach(function (ele) {
    ProjObj.all.push(new ProjObj(ele));
  })
}

ProjObj.fetchAll = function() {
  if (localStorage.workData) {
    ProjObj.loadAll(JSON.parse(localStorage.workData));
    ProjObj.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
  } else {
    $.ajax({
      url: 'proj.json',
      method: 'GET',
      success: function(d) {
        localStorage.setItem('workData', JSON.stringify(d));
        ProjObj.loadAll(JSON.parse(localStorage.workData));
        ProjObj.all.forEach(function(a){
          $('#projects').append(a.toHtml());
        });
      },
      error: function(error) {
        console.log('in error handler', error);
      }
    });
  }
};

ProjObj.fetchAll();
