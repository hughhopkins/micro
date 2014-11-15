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