// jQuery method of getting API data:
$.getJSON('https://api.gosquared.com/now/v3/concurrents?api_key=demo&site_token=GSN-106863-S', function(data) {
	var html = '';

	console.log("visitors for the chart3 = " + data.visitors);
  console.log("active for the chart3 = " + data.active);
  console.log("returning for the chart3 = " + data.returning);

});

/* code to grab the data and make a pretty chart with*/
Template.gsBarChart.rendered = function () {

  var data = [4, 8]

  var gsBarChartWidth = 420,
			gsBarChartHeight = 100;

	var gsBarChartX = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, gsBarChartWidth]);

	var gsBarChartChart = d3.select(".gsBarChart")
			.attr("width", gsBarChartWidth)
			.attr("height", gsBarChartHeight * data.length);

	var gsBarChartBar = gsBarChartChart.selectAll("g")
		.data(data)
	.enter().append("g")
		.attr("transform", function(d, i) { return "translate(0," + i * gsBarChartHeight + ")"; });

	gsBarChartBar.append("rect")
        .attr("width", gsBarChartX)
        .attr("height", gsBarChartHeight - 1);

  var holyGrail = Meteor.call("checkGS", function(error, results) {
      console.log(results.content); //results.data should be a JSON object
      var grail = results.content;
      console.log("close to the grail " + grail);
  });

  console.log("this might be the holy grail " + holyGrail);

};
