'use strict';

var app = angular.module('spaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngGrid'
]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

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
    templateUrl: 'views/investment.html',
    controller: 'InvestmentCtrl'
  })

  //view for investment bank(menu initial)
  .state('dashboard.detailInvestment',{
    url: ':account_id/detailInvestment',
    templateUrl: 'views/MFMPortal_11_1.html',
    controller: 'InvestmentDetailCtrl'
  })
  //view for detail credit liquidated  
  .state('dashboard.detailCredit',{
    url: ':acount_id/detailCredit',
    templateUrl: 'views/detailLineCredit.html',
    controller: 'detailCreditCtrl'
  })
  //view for detail credit pacted
  .state('dashboard.detailCreditPacted',{
    url: ':account_id/detailCreditPacted',
    templateUrl: 'views/detailOperationPactada.html',
    controller: 'detailCreditPactedCtrl'
  })

  .state('dashboard.connection', {
    url: 'connection',
    templateUrl: 'views/connection.html',
    controller: 'ConnectionCtrl'
  })
  .state('dashboard.authorize', {
    url: 'authorize',
    templateUrl: 'views/MFMPortal_15_2.html',
    controller: 'AuthorizeCtrl'
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
  })
  .state('dashboard.credit', {
    url: ':account_id/credit',
    templateUrl: 'views/credit.html',
    controller: 'CreditCtrl'
  })
  .state('dashboard.credit.transactions', {
    url: '/transactions',
    templateUrl: 'views/creditTransactions.html',
    controller: 'transactionsCtrl'
  })
  .state('dashboard.credit.dueDate', {
    url: '/dueDate',
    templateUrl: 'views/creditDueDate.html',
    controller: 'dueDateCtrl'
  })
  .state('dashboard.credit.valueDate', {
    url: '/valueDate',
    templateUrl: 'views/creditValueDate.html',
    controller: 'valueDateCtrl'
  });
});

app.factory('ctsBiometricas', function() {
  return {}
});

app.run(function($rootScope){
  $rootScope.restAPIBaseUrl = 'http://projects.anzen.com.mx:3000/api/';
});
