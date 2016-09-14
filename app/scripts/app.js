angular
  .module('spaApp', [
    'ui.router',
    'accounts-route',
    'administration-route',
    'authentication-route',
    'transfers-route',
    'ngIdle',
    'ngCookies',
    'uiGmapgoogle-maps',
    'angularUtils.directives.uiBreadcrumbs',
    'pascalprecht.translate',// angular-translate
    'tmh.dynamicLocale',// angular-dynamic-locale
    'ngSanitize',
    'ngDialog'
  ])
  .constant('LOCALES', {
    'locales': {
      'es_MX': 'Español',
      'en_US': 'English'
    },
    'preferredLocale': 'es_MX'
  })
  .config(function ($translateProvider) {
    $translateProvider.useMissingTranslationHandlerLog();
  })
  .config(function ($translateProvider) {
    //The language property returns the language version of the browser.
    var languageOfBrowser = navigator.language.substr(0, 2);
    switch (languageOfBrowser) {
      case 'es':
        $translateProvider.preferredLanguage('es_MX');
        break;
      case 'en':
        $translateProvider.preferredLanguage('en_US');
        break;
      default:
        $translateProvider.preferredLanguage('es_MX');
    }
  })
  /*
  .config(function ($translateProvider) {
    // Enable escaping of HTML
    $translateProvider.useSanitizeValueStrategy('sanitize');
  })
  */
  .config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'resources/locale-',// path to translations files
      suffix: '.json'// suffix, currently- extension of the translations
    });
    //$translateProvider.preferredLanguage('es_MX');// is applied on first load
    //$translateProvider.useLocalStorage();// saves selected language to localStorage
  })
  .config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  })
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$keepaliveProvider', '$idleProvider', 'uiGmapGoogleMapApiProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider ,$keepaliveProvider, $idleProvider, uiGmapGoogleMapApiProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
    $idleProvider.idleDuration(5);
    $idleProvider.warningDuration(5);
    $keepaliveProvider.interval(60);

    uiGmapGoogleMapApiProvider.configure( {
      //Change the key, this is for mobile.
      key: 'AIzaSyBTLip6mJStAz2siYPyrWjGcx7bk1ju_fc',
      v: '3.17',
      libraries: 'places,geometry,visualization'
    });

    $urlRouterProvider.otherwise('/login');
      $stateProvider
        .state('dashboard', {
          abstract: true,
          url: '/',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl',
          breadcrumb: {
            title: 'dashboard'
          }
        })
        .state('map',{
        url: '/map',
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
        })
        .state('aclarations',{
          url: '/aclarations',
          templateUrl: 'views/static/aclarations.html'
        })
        .state('contact',{
          url: '/contact',
          templateUrl: 'views/static/contact.html'
        })
        .state('contracts',{
          url: '/contracts',
          templateUrl: 'views/static/contracts.html'
        })
        .state('privacy',{
          url: '/privacy',
          templateUrl: 'views/static/privacy.html'
        })
        .state('report',{
          url: '/report',
          templateUrl: 'views/static/report.html'
        })
        .state('security',{
          url: '/security',
          templateUrl: 'views/static/security.html'
        })
        .state('terms',{
          url: '/terms',
          templateUrl: 'views/static/terms.html'
        });
  }])
  .run(['api', '$rootScope', '$state', '$stateParams', '$window', function(api, $rootScope, $state, $stateParams, $window) {
    api.config();
    api.init();

    $rootScope.requestStack = [];
    // To display the loader in the login and register views
    $rootScope.showBGLoader = true;

    $window.onbeforeunload = function(e) {
      var message = 'Te vas a salir de Fundación Dondé , ¿estás seguro?';
      e = e || $window.event;
      e.preventDefault = true;
      e.cancelBubble = true;
      if($rootScope.session_token) {
        e.returnValue = message;
        return message;
      }
    };

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.back = function() {
      $state.go($rootScope.previousState_name,$rootScope.previousState_params);
    };
  }]);
