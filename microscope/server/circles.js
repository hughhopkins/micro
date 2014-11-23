Meteor.startup(function () {
    if (Circles.find().count() === 0) {
      Circles.insert({data: [50, 80, 110, 140, 170, 200]});
  }
});

Meteor.setInterval(function () {
  var newData = _.shuffle(Circles.findOne().data);
  Circles.update({}, {data: newData});
}, 500);