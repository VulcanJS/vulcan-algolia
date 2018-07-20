Package.describe({
  name: 'algolia',
});

Package.onUse(function (api) {

  api.use([
    'vulcan:core@1.11.2',
  ]);

  api.mainModule('lib/server/main.js', 'server');
});
