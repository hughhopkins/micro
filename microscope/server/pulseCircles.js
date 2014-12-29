Meteor.startup(function () {
  if (PulseCircles.find().count() === 0) {
    PulseCircles.insert({data: [59, 69, 49, 39, 79, 29]});
  }
});

Meteor.setInterval(function () {
  var newData = _.shuffle(PulseCircles.findOne().data);
  PulseCircles.update({}, {data: newData});
}, 500);