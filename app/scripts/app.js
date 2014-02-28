'use strict';

angular.module('spaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngGrid'
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
    controller: 'Dashboard'
  })
  .state('dashboard.accounts', {
    url: 'accounts',
    templateUrl: 'views/accounts.html',
    controller: 'AccountsCtrl'
  })

//view for investment bank(menu initial)
  .state('dashboard.investment',{
    url: ':account_id/investment',
    templateUrl: 'views/investment.html' ,
    controller: 'InvestmentCtrl'
  })
  //view for detail credit
  //investment(investmentAccount._account_id)
  //detailCredit(detailCreditAccount._account_id))
  .state('dashboard.detailCredit',{
    url: ':acount_id/detailCredit',
    templateUrl: 'views/detailLineCredit.html',
    controller: 'detailCreditCtrl'
  })

  //end detail credit
  .state('dashboard.connection', {
    url: 'connection',
    templateUrl: 'views/connection.html',
    controller: 'ConnectionCtrl'
  })
  .state('dashboard.authorize', {
    url: 'authorize'
  })
  .state('dashboard.transfer', {
    url: 'transfer',
  })
  .state('dashboard.administration', {
    url: 'administration',
  })
  .state('dashboard.biometrics', {
    url: ':account_id/biometrics',
    templateUrl: 'views/biometrics.html',
    controller: 'BiometricsCtrl'
  })
  .state('dashboard.detail', {
    url: ':account_id/detail',
    templateUrl: 'views/detail.html'
  });
})
.factory('ctsBiometricas', function() {
  return {}
});