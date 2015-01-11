Template.profile.helpers({
  password: function() {
	var srv = document.getElementById('srv');
	var pw = document.getElementById('pw');
  var result = srv + pw;
  	var password = result;
  	return result;
  }
});
