Posts = new Meteor.Collection('posts');

Posts.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Meteor.methods({
  post: function(postAttributes) {
    var user = Meteor.user().
      postWithSameLink = Posts.findOne({url: postAttributes});


    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, 'you need to be logged in to post a story');

    // ensure the post has a title
    if (!postAttributes.title)
      throw new Meteor.Error(422, 'you need to add a title');

    // check there are no previous posts with the same linl
    if (postAttributes.url && postWithSameLink) {
      throw new Meteor.Error(302, 'the link has already been posted, you got there too late', postWithSameLink._id);
    }

    // pick out the whitelisted keys
    var post = _.extend(_.pick(postAttributes, 'url', 'title', 'message'), {
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });

    var postId = Posts.insert(post);

    return postId;
  }
});
