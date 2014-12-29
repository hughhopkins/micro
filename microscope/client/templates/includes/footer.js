$.getJSON('https://api.gosquared.com/now/v3/overview?api_key=demo&site_token=GSN-106863-S&limit=10&callback=?', function(data) {
  var html = '';

  console.log("visitors = " + data.visitors);
  console.log("active = " + data.active);
  console.log("returning = " + data.returning);

  html += data.visitors + " Vistors online, " + data.active + " Active vistors online and " + data.returning + " Returning visitors online ";

  $('#footer-concurrents').html(html);
});