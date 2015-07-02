Template.profile.helpers({
	userId: function() {
		var userId = Meteor.userId();
		return userId;
	},
	username: function() {
		var username = Meteor.user().username;
		return username;
	},
	email: function() {
		var email = Meteor.user().emails[0].address;
		return email;
	},
	createdAt: function() {
		var createdAt = Meteor.user().createdAt;
		return createdAt;
	},
	setttingsJsonTest: function() {
		var setttingsJsonTest = Meteor.settings.settingsTest;
		return setttingsJsonTest;
	},
	// todo: need to match some collections somehow
	numberOfPosts: function() {
		var userID = Meteor.userId();
		var numberOfPosts = "4"
		return numberOfPosts;
		_gs('unidentify');
	}
});

Tracker.autorun(function(){
	if (Meteor.user() && !Meteor.loggingIn()) {

		_gs('unidentify');
	}
});