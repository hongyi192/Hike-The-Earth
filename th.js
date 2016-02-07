Tasks = new Mongo.Collection("tasks");
Trails = new Mongo.Collection("Trails");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
  }});

  Template.task.helpers({
    tasks: function() {
		return Tasks.find({});
	}
  });

  Template.trails.helpers({
    trails: function() {
    return Trails.find({});
  }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
