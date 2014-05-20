'use strict';

var app = angular.module('spaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngGrid',
  'accounts-route',
  'administration-route',
  'authorize-route',
  'authentication-route',
  'connection-route',
  'transfers-route',
  'ngIdle'
]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $keepaliveProvider, $idleProvider) {
  $httpProvider.responseInterceptors.push('httpInterceptor');
  $idleProvider.idleDuration(5);
  $idleProvider.warningDuration(5);
  $keepaliveProvider.interval(10);

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
  });

app.run(['api','$rootScope', function(api,$rootScope) {
  api.config();
  api.init();
}]);


