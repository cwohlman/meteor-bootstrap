Package.describe({
  name: "cwohlman:bootstrap",
  summary: "Highly configurable bootstrap integration.",
  version: "3.3.1_1",
  git: "https://github.com/cwohlman/meteor-bootstrap"
});


Package._transitional_registerBuildPlugin({
  name: 'bootstrap-configurator',
  use: [
    'underscore',
    'cwohlman:bootstrap-data@3.3.1_1'
  ],
  sources: [
    'module-definitions.js',
    'distributed-configuration.js',
    'bootstrap-configurator.js'
  ],
  npmDependencies: {}
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.2.2");
  api.use([
    'jquery',
    'cwohlman:bootstrap-data@3.3.1_1'
  ], 'client');
});
