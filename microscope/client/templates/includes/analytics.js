Template.analytics.helpers({
	userId: function() {
		var userId = Meteor.userId();
		return userId;
	},
	user: function() {
		var user = Meteor.user();
		return user;
	},
	username: function() {
		var user = Meteor.user();
		return user && user.username;
	}
});