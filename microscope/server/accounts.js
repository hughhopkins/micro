Accounts.onCreateUser(function(options, user) {
	user.intercomHash = IntercomHash(user, 'Qq2hThxN2PbxC-xG2blrbc5jzgjXuAiLJmTRyZss');

	if(options.profile)
		user.profile = options.profile;

	return user;
});