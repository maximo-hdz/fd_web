'use strict';

angular.module('SpaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute' ,
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/home', {
        templateUrl: 'views/accounts.html',
        controller: 'AccountsCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
