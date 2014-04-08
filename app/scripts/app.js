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
    templateUrl: 'views/partials/authentication/login.html',
    controller: 'LoginCtrl'
  })
  .state('dashboard', {
    abstract: true,
    url: '/',
    templateUrl: 'views/dashboard.html',
    controller: 'Dashboard',
    breadcrumb: {
      title: 'dashboard'
    }
  })
  .state('dashboard.accounts', {
    resolve: {
          accounts: ['accountsProvider', function(accountsProvider) {
            return accountsProvider.getBiometricAccounts();
      }]
    } ,
    url: 'accounts',
    templateUrl: 'views/partials/accounts/accounts.html',
    controller: 'AccountsCtrl',
    breadcrumb: {
      title: 'accounts'
    }
  })
  //view for investment bank(menu initial)
  .state('dashboard.investment',{
    url: ':account_id/investment',
    templateUrl: 'views/partials/accounts/investment.html',
    controller: 'InvestmentCtrl',
    breadcrumb: {
      title: 'investment'
    }
  })

  //view for investment bank(menu initial)
  .state('dashboard.detailInvestment',{
    url: ':account_id/detailInvestment',
    templateUrl: 'views/partials/accounts/transactionDetailInvestment.html',
    controller: 'InvestmentDetailCtrl',
    breadcrumb: {
      title: 'detail'
    }
  })
  //view for detail credit liquidated
  .state('dashboard.detailCredit',{
    url: ':acount_id/detailCredit',
    templateUrl: 'views/partials/accounts/detailLineCredit.html',
    controller: 'detailCreditCtrl',
    breadcrumb: {
      title: 'detail'
    }
  })
  //view for detail credit pacted
  .state('dashboard.detailCreditPacted',{
    url: ':account_id/detailCreditPacted',
    templateUrl: 'views/partials/accounts/detailOperationPactada.html',
    controller: 'detailCreditPactedCtrl',
    breadcrumb: {
      title: 'detail'
    }
  })
  .state('dashboard.connection', {
    url: 'connection',
    templateUrl: 'views/partials/connection/connection.html',
    controller: 'ConnectionCtrl',
    breadcrumb: {
      title: 'connection'
    }
  })
  .state('dashboard.authorize', {
    url: 'authorize',
    templateUrl: 'views/partials/accounts/authorizePendingOperations.html',
    controller: 'AuthorizeCtrl',
    breadcrumb: {
      title: 'authorize'
    }
  })
  .state('dashboard.authorizeMod', {
    url: 'authorizeMod',
    templateUrl: 'views/partials/accounts/authorizePendingModifications.html',
    controller: 'AuthorizeModCtrl',
    breadcrumb: {
      title: 'Modify'
    }
  })
  .state('dashboard.transfer', {
    url: 'transfer',
    //templateUrl: 'views/transferAddCount.html',
    //controller: 'transferAddCount',
    templateUrl: 'views/partials/transfers/transfer.html',
    controller: 'transferCtrl',
    breadcrumb: {
      title: 'Transfer'
    }
  })
  .state('dashboard.addBeneficiary', {
    url: 'transfer/add/beneficiary',
    templateUrl: 'views/partials/transfers/addBeneficiary.html',
    controller: 'transferAddBeneficiaryCtrl',
    breadcrumb: {
      title: 'Beneficiary'
    }
  })
  .state('dashboard.authorizeChanges', {
    url: 'authorizeChanges',
    templateUrl: 'views/partials/authorize/authorizeAdminChange.html',
    controller: "authorizeChanges",
    breadcrumb: {
      title: 'Authorize'
    }
  })
  .state('dashboard.administration', {
    url: 'administration',
/*    templateUrl: 'views/setUpNotifications.html',
    controller: "setUpNotifications"*/
    templateUrl: 'views/partials/administration/user_administration.html',
    controller: 'user_administration',
    breadcrumb: {
      title: 'Administration'
    }
  })
  .state('dashboard.biometrics', {
    url: ':account_id/biometrics',
    templateUrl: 'views/partials/accounts/biometrics.html',
    controller: 'BiometricsCtrl',
    breadcrumb: {
      title: 'Biometrics'
    }
  })
  .state('dashboard.detailMovement', {
    url: ':account_id/detailMovement',
    templateUrl: 'views/partials/accounts/detailMovement.html',
    breadcrumb: {
      title: 'Detail'
    }
  })
  .state('dashboard.credit', {
    url: ':account_id/credit',
    templateUrl: 'views/partials/accounts/credit.html',
    controller: 'CreditCtrl',
    breadcrumb: {
      title: 'Credit'
    }
  })
  .state('dashboard.credit.transactions', {
    url: '/transactions',
    templateUrl: 'views/partials/accounts/creditTransactions.html',
    controller: 'transactionsCtrl',
    breadcrumb: {
      title: 'Transactions'
    }
  })
  .state('dashboard.credit.dueDate', {
    url: '/dueDate',
    templateUrl: 'views/partials/accounts/creditDueDate.html',
    controller: 'dueDateCtrl',
    breadcrumb: {
      title: 'Due Date'
    }
  })
  .state('dashboard.credit.valueDate', {
    url: '/valueDate',
    templateUrl: 'views/partials/accounts/creditValueDate.html',
    controller: 'valueDateCtrl',
    breadcrumb: {
      title: 'Value Date'
    }
  })
  .state('dashboard.detailCreditPactedOp', {
    url: ':account_id/partials/detailCreditPactedOp',
   templateUrl : 'views/accounts/detailLineCredit.html',
    breadcrumb: {
      title: 'Detail'
    }
  })
}).factory('ctsCreditPacted', function(){
  return {}
}).factory('ctsBiometricas', function() {
  return {}
});
app.run(function($rootScope){
  $rootScope.restAPIBaseUrl = 'http://projects.anzen.com.mx:3000/api/';
});
