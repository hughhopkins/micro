Meteor.publish('posts', function(options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Posts.find({}, options);
});

Meteor.publish('singlePost', function(id) {
	check(id, String)
	return Posts.find(id);
});

Meteor.publish('comments', function(postId) {
  check(postId, String);
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
	return Notifications.find({userId: this.userId, read: false});
});

Meteor.publish('currentUser', function() {
  return Meteor.users.find(this.userId, {fields: {createdAt: 1, intercomHash: 1}});
});

Meteor.publish('circles', function () {
  return Circles.find(); // everything
});

/* maybe delete green lights 
Meteor.publish('GreenLights', function () {
  return greenLights.find(); // everything
});
*/
/* not working:
Meteor.publish('dots', function () {
  return Dots.find(); // everything
});
*/

Meteor.publish('pulseCircles', function () {
  return PulseCircles.find(); // everything
});