exports.config = {
  //directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.

  /*
  //If you would like to test against multiple browsers, use the multiCapabilities configuration option.

  multiCapabilities: [{
    'browserName': 'firefox'
  }, {
    'browserName': 'chrome'
  }],
  */

  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  },

  // Framework to use.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['spec/*.spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 50000
  },
  onPrepare: function() {
    var width = 1024;
    var height = 600;
    browser.driver.manage().window().setSize(width, height);
  }
};
