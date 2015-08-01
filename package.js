Package.describe({
  git: 'https://github.com/arillo/meteor-flow-router-helpers.git',
  name: 'arillo:flow-router-helpers',
  summary: 'Template helpers for flow-router',
  version: '0.3.2'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'check',
    'coffeescript',
    'templating',
    'underscore'
  ]);

  api.use([
    'kadira:flow-router',
    'zimme:active-route@2.2.0'
  ], ['client', 'server']);

  api.imply('zimme:active-route', ['client', 'server']);

  api.addFiles('client/helpers.coffee', 'client');
});
