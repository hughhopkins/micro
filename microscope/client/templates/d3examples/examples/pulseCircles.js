Deps.autorun(function() {
  Meteor.subscribe('pulseCircles');
});

Template.pulseCircles.rendered = function () {
  var width = 700, height = 250, x;

  var chart = d3.select(".pulseCircles")
    .attr('width', width)
    .attr('height', height);

  var drawPulseCircles = function (update) {
    var data = PulseCircles.findOne().data;
    var circles = svg.selectAll('circle').data(data);
    if (!update) {
      circles = circles.enter().append('circle')
        .attr('cx', function (d, i) { return x(i); })
        .attr('cy', height / 2);
    } else {
      circles = circles.transition().duration(1000);
    }
    circles.attr('r', function (d) { return d; });
  };

  PulseCircles.find().observe({
    added: function () {
      x = d3.scale.ordinal()
        .domain(d3.range(PulseCircles.findOne().data.length))
        .rangePoints([0, width], 1);
      drawPulseCircles(false);
    },
    changed: _.partial(drawPulseCircles, true)
  });
};