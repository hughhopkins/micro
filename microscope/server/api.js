Meteor.methods({
  checkGS: function () {
      this.unblock();
      return Meteor.http.call("GET", "https://api.gosquared.com/now/v3/concurrents?api_key=demo&site_token=GSN-106863-S");
  }
});