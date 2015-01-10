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
	}
}); 