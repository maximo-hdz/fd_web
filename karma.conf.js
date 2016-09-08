// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    'plugins' : [
        'karma-mocha',
        'karma-chai',
        'karma-sinon',
        'karma-phantomjs-launcher',
        'karma-coverage',
        'karma-junit-reporter'
    ],
    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['mocha','chai','sinon'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/jquery/jquery.min.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-scenario/angular-scenario.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/ng-idle/angular-idle.js',
      'app/bower_components/angular-google-maps/dist/angular-google-maps.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/spec/controllers/accounts/test-account.js'
      ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    reporters: ['progress', 'junit','coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/scripts/*.js': ['coverage'],
      'app/scripts/controllers/**/*.js': ['coverage'],
      'app/scripts/directives/**/*.js': ['coverage'],
      'app/scripts/services/**/*.js': ['coverage']
    },

    coverageReporter: {
        reporters:[
            {type: 'lcov', dir: 'reports', subdir: '.'}
        ]
    },

    junitReporter: {
        outputFile: 'reports/TESTS-xunit.xml',
        useBrowserName: false,
    },

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
