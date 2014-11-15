Template.analytics.helpers({
	userId: function() {
		var userId = Meteor.userId();
		return userId;
	},
	username: function() {
		var user = Meteor.user();
		return user && user.username;
	}
});