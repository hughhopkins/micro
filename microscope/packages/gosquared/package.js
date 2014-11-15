Package.describe({
	name: 'gosquared',
	summary: 'GoSquared Package',
	version: '1.0.0'
});
Package.on_use(function (api) {
	api.versionsFrom('0.9.4');
	api.add_files('gosquared_loader.js', 'client');
});