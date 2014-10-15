Package.describe({
  summary: "A pattern to display application errors to the user",
  version: "1.0.0"
});

Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@0.9.0');

  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.add_files(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export) 
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('hugh:errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');  

  api.add_files('errors_tests.js', 'client');
});