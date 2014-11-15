Tracker.autorun(function(){
	if (Meteor.user() && !Meteor.loggingIn()) {
		var intercomSettings = {
		  name: Meteor.user().username,
		  email: Meteor.user().emails[0].address,
		  created_at: Math.round(Meteor.user().createdAt/1000),
		  favourite_color: _.sample(['blue','red','green','yellow']),
		  app_id: "ohhv3jt0"
		};
		Intercom('boot', intercomSettings)
	}
});

Tracker.autorun(function(){
	if (Meteor.user() && !Meteor.loggingIn()) {

		var userID = Meteor.userId();

		var user = {
		  name: Meteor.user().username,
		  email: Meteor.user().emails[0].address,
		  createdAt: Meteor.user().createdAt,
		  phone: Math.floor((Math.random() * 100000000) + 1)
		};

		_gs('identify', userID, user);
	}
});