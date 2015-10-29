Package.describe({
	name: 'mixpanel',
	summary: 'mixpanel Package',
	version: '1.0.0'
});
Package.on_use(function (api) {
	api.versionsFrom('0.9.4');
	api.add_files('mixpanel_loader.js', 'client');
});