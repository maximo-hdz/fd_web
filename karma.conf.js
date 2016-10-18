// Karma configuration
// Generated on Wed Sep 28 2016 12:40:22 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    'plugins' : [
        'karma-mocha',
        'karma-chai',
        'karma-sinon',
        'karma-phantomjs-launcher',
        'karma-coverage',
        'karma-junit-reporter'
    ],
    // frameworks to use
    frameworks: ['mocha','chai', 'sinon'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/jquery/jquery.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/ng-idle/angular-idle.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false',
      'app/bower_components/angular-google-maps/dist/angular-google-maps.js',
      'app/bower_components/angular-translate/angular-translate.js',
      'app/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'app/bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
      'app/bower_components/angular-translate-storage-local/angular-translate-storage-local.js',
      'app/bower_components/angular-translate-handler-log/angular-translate-handler-log.js',
      'app/bower_components/angular-dynamic-locale/src/tmhDynamicLocale.js',
      'app/bower_components/ng-dialog/js/ngDialog.js',

      //Scripts
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'app/scripts/**/**/*.js',

      //Tests
      'test/spec/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    reporters: ['progress','junit','coverage'],

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
        outputDir: 'reports',
        outputFile: 'TESTS-xunit.xml',
        useBrowserName: false,
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    });
};
