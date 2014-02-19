'use strict';

angular.module('spaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
  ])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

  $urlRouterProvider.otherwise("/login");

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .state('dashboard', {
    abstract: true,
    url: '/',
    templateUrl: 'views/dashboard.html',
    controller: 'HomeCtrl'
  })
  .state('dashboard.accounts', {
    url: 'accounts',
    templateUrl: 'views/accounts.html',
    controller: 'AccountsCtrl'
  })
  .state('dashboard.connection', {
    url: 'connection',
    templateUrl: 'views/connection.html',
    controller: 'ConnectionCtrl'
  });
});