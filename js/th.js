  Router.route('/', {
	  name: 'home',
	  template: 'trails_template'
  });
  
  Tasks = new Mongo.Collection("tasks");
  Trails = new Mongo.Collection("Trails");
  
if (Meteor.isClient) {

  Template.trails_template.onRendered(function(){
  //do your jquery business here!
  $(".parallax").parallax()
  });

  Template.trails_template.helpers({
    trails: function() {
    return Trails.find();
  }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
