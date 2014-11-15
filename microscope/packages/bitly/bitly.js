Bitly = {}

Bitly.shortenURL = function(url) {
	if(!Meteor.settings.bitly)
		throw new Meteor.Error(500, 'please provide a Bitly token in Meteor.settings');

	var shoretenResponse = Meteor.http.get(
		"https://api-ssl.bitly.com/v3/shorten?",
		{
			timeout: 5000,
			params:{
				"format": "json",
				"access_token": Meteor.settings.bitly,
				"longUrl": url
			}
		}
	);
	if(shoretenResponse.statusCode === 200){
		return shoretenResponse.data.data.url
	} else {
		throw new Meteor.Error(500, "Bitly call failed with an error of some sort, maybe: "+shoretenResponse.status_txt);
	}
}

Bitly.getClicks = function(link){
	if(!Meteor.settings.bitly)
		throw new Meteor.Error(500, 'please pr a Bitly thoken in Meteor.settings');

	var statsResponse = Meteor.http.get(
		"https://api-ssl.bitly.com/v3/link/clicks?",
		{
			timeout: 5000,
			params:{
				"format": "json",
				"access_token": Meteor.settings.bitly,
				"link": link
			}
		}
	);
	if(statsResponse.data.status_code === 200)
		return statsResponse.data.data.link_clicks
}

Meteor.methods({
	'getBitlyClicks': function(link){
		return Bitly.getClicks(link);
	}
});