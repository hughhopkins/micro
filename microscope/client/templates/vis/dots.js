Deps.autorun(function() {
	Meteor.subscribe('dots')
});
/*
Template.dots.rendered = function () {
	var svg, width = 700, height = 250, x;

	svg = d3.select('#dots').append('svg')
		.attr('width', width)
		.attr('height', height);

	var drawDots = function (update) {
		var data = Dots.findOne().data;
		var dots = svg.selectAll('circle').data(data);
		if (!update) {
			dots = dots.eneter().append('circle')
				.attr('cx', function (d, i) { return x(i); })
				.attr('cy', height / 2);
		} else {
			dots = dots.transition().duration(1000);
		}
		dots.attr('r', function (d) { return d; })
	};

	Dots.find().observe({
		added: function () {
			x = d3.scale.ordinal()
				.domain(d3.range(Dots.findOne().data.length))
				.rangePoints([0, width], 1);
			drawDots(false);
		},
		changed: _.partial(drawDots, true)
	});
};
*/