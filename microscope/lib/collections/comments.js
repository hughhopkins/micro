Comments = new Mongo.Collection('comments');

Meteor.methods({
	commentInsert: function(commentAtributes) {
		check(this.userId, String);
		check(commentAtributes, {
			postId: String,
			body: String
		});
		var user = Meteor.user();
		var post = Posts.findOne(commentAtributes.postId);
		if (!post)
			throw new Meteor.Error('invalid-comment', 'you must comment on a post');
		comment = _.extend(commentAtributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date()
		});
		return Comments.insert(comment);
	}
});