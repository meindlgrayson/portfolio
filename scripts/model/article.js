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
  
    ProjObj.all = workData.map(ele => new ProjObj(ele));
  }

ProjObj.fetchAll = function() {
  if (localStorage.workData) {
    ProjObj.loadAll(JSON.parse(localStorage.workData));
    ProjObj.all.forEach(a => $('#projects').append(a.toHtml()));
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


//FIGURE OUT WHAT TO DO WITH REDUCE WHEN MORE IS ADDED
var requiredReduce = function() {
  var worthlessCount = ProjObj.all.reduce(function(sum, title){
    return sum + title.name.length;
  }, 0);
  console.log(worthlessCount);
}

requiredReduce();

