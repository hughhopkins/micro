Tracker.autorun(function(){
	if (Meteor.user() && !Meteor.loggingIn()) {
		var intercomSettings = {
		  name: Meteor.user().username,
		  email: Meteor.user().emails[0].address,
		  created_at: Math.round(Meteor.user().createdAt/1000),
		  favourite_color: _.sample(['blue','red','green','yellow']),
		  user_id: Meteor.user()._id,
		  user_hash: Meteor.user().intercomHash,
		  app_id: "ohhv3jt0"
		};
		Intercom('boot', intercomSettings)
	}
});

Tracker.autorun(function(){
	if (Meteor.user() && !Meteor.loggingIn()) {
		mixpanel.track("Logged in");
		mixpanel.identify("1234");
		mixpanel.identify("4321");
	}
});

Tracker.autorun(function(){
	if (Meteor.user() && !Meteor.loggingIn()) {

		var userID = Meteor.userId();

		var user = {
		  name: Meteor.user().username,
		  email: Meteor.user().emails[0].address,
		  createdAt: Meteor.user().createdAt,
		  // phone: Math.floor((Math.random() * 100000000) + 1),
		  company_size: 12,
		  custom: { 
		  	/* 
		  	numberPosts: 79,
		  	test1: 8393,
		  	MRR: 1000000000,
		  	location: "London",
		  	simon: 99,
		  	*/
		  	site: "https://www.gosquared.com/",
		  	personalSite: "http://hughhopkins.meteor.com"
		   }
		};

		_gs('identify', userID, user);
		mixpanel.identify(userID);
	}
});