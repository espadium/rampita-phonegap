// App Setup

App = Ember.Application.create();

// API Config

App.apiBaseURL = 'http://dummy-grapi.herokuapp.com';

App.apiPaths = {
  'places': '/foo/bar'
}

App.apiPathFor = function(pathName) {
  return App.apiBaseURL + App.apiPaths[pathName];
}
