Template.postsList.helpers({
  posts:function() {
    // orders the posts by timstamp which is done in posts.js
    return Posts.find({}, {sort: {submitted: -1}});
  }
});
