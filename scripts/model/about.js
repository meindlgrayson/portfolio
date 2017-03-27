'use strict';

(function(module){
const repos = {};

repos.all = [];

repos.requestRepos = function (callback) {
  $.ajax('https://api.github.com/users/meindlgrayson/repos', {
    method: 'GET',
    headers: {
      Authorization: `token ${{token}}`
    }
  }).then((rep) => {
    repos.all = rep;
    callback();
  }).catch(err => console.error);
};

repos.with = attr => repos.all.filter(repo => repo[attr]);

module.repos = repos;

})(window);