// Router Setup

App.Router.map(function() {
  this.route('places');
});

// Home Routes

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('title', 'RampitApp');
  }
});

// Places Routes

App.PlacesRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON(App.apiPathFor('places'));
  }
});
