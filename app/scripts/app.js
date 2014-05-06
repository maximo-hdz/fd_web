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
  'transfers-route'
]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $httpProvider.responseInterceptors.push('httpInterceptor');

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


