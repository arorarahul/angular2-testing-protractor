exports.config = {
  directConnect: true,

  //This tells Protractor to directly connect to the webdriver (instead of connecting to a local selenium server)

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  //used to mention the browser on which test should be executed. For multiple browsers we need multiCapabilities
  //option

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  //mocha is also supported by protractor

  // Spec patterns are relative to this config file
  specs: ['./e2e/**/*.e2e-spec.js'],
  //these are the specs we want to run. In this example we are running all the tests present in the e2e directory
  // and .e2e-spec.js suffix and extension

  //we are not mentioning the ts files. That is the red to run the typscript compiler before running protractor test

  baseUrl: 'http://localhost:8080',
  //this is the url on which the test will run

  // For angular tests
  useAllAngular2AppRoots: true
  
};