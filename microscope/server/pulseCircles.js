Meteor.startup(function () {
  if (PulseCircles.find().count() === 0) {
    PulseCircles.insert({data: [59, 89, 119, 149, 179, 199]});
  }
});

Meteor.setInterval(function () {
  var newData = _.shuffle(PulseCircles.findOne().data);
  PulseCircles.update({}, {data: newData});
}, 500);