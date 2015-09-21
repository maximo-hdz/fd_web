'use strict';

var app = angular.module('spaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngGrid',
  'ngIdle',
  'accounts-route',
  'administration-route',
  'authentication-route',
  'transfers-route',
  'ngIdle',
  'uiGmapgoogle-maps',
  'angularUtils.directives.uiBreadcrumbs'
  ]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$keepaliveProvider', '$idleProvider', 'uiGmapGoogleMapApiProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider ,$keepaliveProvider, $idleProvider, uiGmapGoogleMapApiProvider) {
  $httpProvider.interceptors.push('httpInterceptor');
  $idleProvider.idleDuration(5);
  $idleProvider.warningDuration(5);
  $keepaliveProvider.interval(60);

  uiGmapGoogleMapApiProvider.configure({
    //Change the key, this is for mobile.
    key: 'AIzaSyBTLip6mJStAz2siYPyrWjGcx7bk1ju_fc',
    v: '3.17',
    libraries: 'places,geometry,visualization'
  });

  $urlRouterProvider.otherwise("/login");
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
    })

  }]);

app.run(['api', '$rootScope', '$state', '$stateParams', '$window', function(api, $rootScope, $state, $stateParams, $window) {
  api.config();
  api.init();

  $rootScope.requestStack = new Array();
  // To display the loader in the login and register views
  $rootScope.showBGLoader = true;

  $window.onbeforeunload = function(e) {
    var message = "Te vas a salir de Fundación Dondé , ¿estás seguro?";
    e = e || $window.event;
    e.preventDefault = true;
    e.cancelBubble = true;
    if($rootScope.session_token) {
      e.returnValue = message;
      return message;
    }
  }

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on("$stateChangeSuccess",  function(event, toState, toParams, fromState, fromParams) {

/*      if(!$rootScope.session_token && toState.name != 'login'){
        $state.go('login');
      }
      else{
        if(fromState.name != 'login'){
          $rootScope.previousState_name = fromState.name;
          $rootScope.previousState_params = fromParams;
        }
      }*/
    });
  //back button function called from back button's ng-click="back()"
  $rootScope.back = function() {
    $state.go($rootScope.previousState_name,$rootScope.previousState_params);
  };
}]);
