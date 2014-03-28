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
    templateUrl: 'views/transactionDetailInvestment.html',
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
    templateUrl: 'views/detailLineCredit.html',
    controller: 'detailCreditPactedCtrl'
  })
  .state('dashboard.connection', {
    url: 'connection',
    templateUrl: 'views/connection.html',
    controller: 'ConnectionCtrl'
  })
  .state('dashboard.authorize', {
    url: 'authorize',
    templateUrl: 'views/authorizePendingOperations.html',
    controller: 'AuthorizeCtrl'
  })
  .state('dashboard.authorizeMod', {
    url: 'authorizeMod',
    templateUrl: 'views/authorizePendingModifications.html',
    controller: 'AuthorizeModCtrl'
  })
  .state('dashboard.transfer', {
    url: 'transfer',
    templateUrl: 'views/transferAddCount.html',
    controller: 'transferAddCount'
  })
  .state('dashboard.authorizeChanges', {
    url: 'authorizeChanges',
    templateUrl: 'views/authorizeAdminChange.html',
    controller: "authorizeChanges"
  })
  .state('dashboard.administration', {
    url: 'administration',
/*    templateUrl: 'views/setUpNotifications.html',
    controller: "setUpNotifications"*/
    templateUrl: 'views/user_administration.html',
    controller: 'user_administration'
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
  })

}).factory('ctsBiometricas', function() {
  return {}
});

app.run(function($rootScope){
  $rootScope.restAPIBaseUrl = 'http://projects.anzen.com.mx:3000/api/';
});
