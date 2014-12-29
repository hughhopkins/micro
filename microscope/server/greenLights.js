/* Meteor.startup(function () {
    if (GreenLights.find().count() === 0) {
      GreenLights.insert({data: [50, 80, 110, 140, 170, 200]});
  }
});

Meteor.setInterval(function () {
  var newData = _.shuffle(GreenLights.findOne().data);
  GreenLights.update({}, {data: newData});
}, 500);
*/