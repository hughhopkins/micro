Meteor.startup(function () {
  if (Circles.find().count() === 0) {
    Circles.insert({data: [50, 80, 110, 140, 170, 200]});
  }
});

Meteor.startup(function () {
	if (Dots.find().count() === 0) {
  	Dots.insert({data: [33, 44, 33, 140, 170, 300]});
  }
});


Meteor.setInterval(function () {
  var newData = _.shuffle(Circles.findOne().data);
  Circles.update({}, {data: newData});
}, 500);

Meteor.setInterval(function () {
  var newData = _.shuffle(Dots.findOne().data);
  Dots.update({}, {data: newData});
}, 500);