Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    Meteor.subscribe('currentUser')
    return [Meteor.subscribe('notifications')]
    // removing this for now as it's creating a custom path: return _gs('track');
  },
});

/*
Router.configure({
  onRun: function() {
    var name = this.route.getName();
    return _gs('track', 'window.location.pathname');
  },
});
*/

PostsListController = RouteController.extend({
  template: 'postsList',
  increment: 5, 
  postsLimit: function() { 
    return parseInt(this.params.postsLimit) || this.increment; 
  },
  findOptions: function() {
    return {sort: this.sort, limit: this.postsLimit()};
  },
  subscriptions: function() {
    this.postsSub = Meteor.subscribe('posts', this.findOptions());
  },
  posts: function() {
    return Posts.find({}, this.findOptions());
  },
  data: function() {
    var hasMore = this.posts().count() === this.postsLimit();
    return {
      posts: this.posts(),
      ready: this.postsSub.ready,
      nextPath: hasMore ? this.nextPath() : null
    };
  }
});

NewPostsListController = PostsListController.extend({
  sort: {submitted: -1, _id: -1},
  nextPath: function() {
    return Router.routes.newPosts.path({postsLimit: this.postsLimit() + this.increment})
  }
});

BestPostsListController = PostsListController.extend({
  sort: {votes: -1, submitted: -1, _id: -1},
  nextPath: function() {
    return Router.routes.bestPosts.path({postsLimit: this.postsLimit() + this.increment})
  }
});

Router.map(function() {
  this.route('home', {
    path: '/',
    controller: NewPostsListController
  });
  
  this.route('newPosts', {
    path: '/new/:postsLimit?',
    controller: NewPostsListController
  });
  
  this.route('bestPosts', {
    path: '/best/:postsLimit?',
    controller: BestPostsListController
  });
  
  this.route('postPage', {
    path: '/posts/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('singlePost', this.params._id),
        Meteor.subscribe('comments', this.params._id)
      ];
    },
    data: function() { return Posts.findOne(this.params._id); }
  });

  this.route('postEdit', {
    path: '/posts/:_id/edit',
    waitOn: function() { 
      return Meteor.subscribe('singlePost', this.params._id);
    },
    data: function() { return Posts.findOne(this.params._id); }
  });
  
  Router.route('/submit', {name: 'postSubmit'});

  this.route('dashboard', {
    path: '/dashboard'
  });

  this.route('profile', {
    path: '/profile'
  });

  this.route('d3examples', {
    path: '/d3examples'
  });

  this.route('meteorTips', {
    path: '/meteorTips'
  });

  this.route('pw', {
    path: '/pw'
  });

  this.route('vis', {
    path: '/vis'
  });

  this.route('plans', {
    path: '/plans'
  });

  this.route('product', {
    path: '/product'
  });

  this.route('enterprise', {
    path: '/enterprise'
  });

});

Router.route('/feed.xml', {
  where: 'server',
  name: 'rss',
  action: function() {
    var feed = new RSS({
      title: "New Microsopy Posts",
      description: "the latest posts from the Microscope, the smallest new aggregator."
    });

    Posts.find({}, {sort: {submitted: -1}, limit: 20}).forEach(function(post) {
      feed.item({
        title: post.title,
        description: post.body,
        author: post.author,
        date: post.submitted,
        url: '/posts/' + post._id
      })
    });

    this.response.write(feed.xml());
    this.response.end();
  }
});

Router.route('/api/posts', {
  where: 'server',
  name: 'apiPosts',
  action: function () {
    var parameters = this.request.query,
    limit = !!parameters.limit ? parseInt(parameters.limit) : 20,
    data = Posts.find({}, {limit: limit, fields: {title: 1, author: 1, url: 1, submitted: 1, }}).fetch();
    this.response.write(JSON.stringify(data));
    this.response.end();
  }
});

Router.route('/api/posts/:_id', {
  where: 'server',
  name: 'apiPost',
  action: function() {
    var post = Posts.findOne(this.params._id);
    if(post){
      this.response.write(JSON.stringify(post));
    } else {
      this.response.writeHead(404, {'Content-Type': 'text/html'});
      this.response.write("Post not found.");
    }
    this.response.end();
  }
});

var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    } 
  } else {
      this.next();
  }
}

if (Meteor.isClient){
  Router.onBeforeAction('dataNotFound', {only: 'postPage'});
  Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
}
