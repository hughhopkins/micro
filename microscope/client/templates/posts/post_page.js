Template.postPage.helpers({
	comments: function() {
		return comments.find({postId: this._id});
	}
});