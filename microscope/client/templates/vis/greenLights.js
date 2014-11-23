/* Deps.autorun(function() {
  Meteor.subscribe('greenLights');
});

Template.greenlights.rendered = function () {
  var svg, width = 700, height = 250, x;

  svg = d3.select('#greenLights').append('svg')
    .attr('width', width)
    .attr('height', height);

  var drawGreenLights = function (update) {
    var data = GreenLights.findOne().data;
    var greenLights = svg.selectAll('greenLights').data(data);
    if (!update) {
      greenLights = greenLights.enter().append('greenLights')
        .attr('cx', function (d, i) { return x(i); })
        .attr('cy', height / 2);
    } else {
      greenLights = greenLights.transition().duration(1000);
    }
    greenLights.attr('r', function (d) { return d; });
  };

  GreenLights.find().observe({
    added: function () {
      x = d3.scale.ordinal()
        .domain(d3.range(GreenLights.findOne().data.length))
        .rangePoints([0, width], 1);
      drawGreenLights(false);
    },
    changed: _.partial(drawGreenLights, true)
  });
};
*/