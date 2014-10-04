if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'boom boom boom',
    author: 'Sacha',
    url: 'http://www.google.com'
  });

  Posts.insert({
    title: 'lal alal al alal',
    author: 'Hugh',
    url: 'http://www.pirac.co.uk'
  });

  Posts.insert({
    title: 'macbook pro',
    author: 'steve',
    url: 'http://www.apple.com'
  });

}
