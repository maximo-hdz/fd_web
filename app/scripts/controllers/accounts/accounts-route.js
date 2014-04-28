'use strict';

angular.module('accounts-route',['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function ($stateProvider,$urlRouterProvider,$locationProvider,$httpProvider) {
  $stateProvider

  	//main view for show all accounts
	.state('dashboard.accounts', {
    url: 'accounts',
    templateUrl: 'views/partials/accounts/accounts.html',
    controller: 'AccountsCtrl',
	    breadcrumb: {
	      title: 'accounts'
	    }
    })

  /*******************************************
    Biometric Accounts
   *******************************************/
  .state('dashboard.biometric', {
    url: 'accounts/biometric/:account_id/transactions',
    templateUrl: 'views/partials/accounts/biometrics.html',
    controller: 'BiometricCtrl',
    breadcrumb: {
      title: 'Biometrics'
    }
  })
  .state('dashboard.biometric_detail', {
    url: 'accounts/biometric/transaction/:transaction_id',
    templateUrl: 'views/partials/accounts/biometric-detail.html',
    controller : 'BiometricDetailCtrl' ,
    breadcrumb: {
      title: 'Detail'
    }
  })

  /*******************************************
      Investment Accounts
  ********************************************/
  //view for investment bank(menu initial)
  .state('dashboard.investment',{
    url: ':account_id/investment',
    templateUrl: 'views/partials/accounts/investment.html',
    controller: 'InvestmentCtrl',
    breadcrumb: {
      title: 'investment'
    }
  })

  //view for investment detail(menu initial)
  .state('dashboard.detailInvestment',{
    url: ':account_id/detailInvestment',
    templateUrl: 'views/partials/accounts/transactionDetailInvestment.html',
    controller: 'InvestmentDetailCtrl',
    breadcrumb: {
      title: 'detail'
    }
  })

  /*********************************************
    Credit Accounts
  ********************************************/
  //view for detail credit liquidated
  .state('dashboard.detailCredit',{
    url: ':acount_id/detailCredit',
    templateUrl: 'views/partials/accounts/detailLineCredit.html',
    controller: 'CreditDetailCtrl',
    breadcrumb: {
      title: 'detail'
    }
  })
  //view for detail credit pacted
  .state('dashboard.detailCreditPacted',{
    url: ':account_id/detailCreditPacted',
    templateUrl: 'views/partials/accounts/credit-detail-agreement.html',
    controller: 'CreditDetailAgreementCtrl',
    breadcrumb: {
      title: 'detail'
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
    templateUrl: 'views/partials/accounts/credit-transactions.html',
    controller: 'CreditTransactionsCtrl',
    breadcrumb: {
      title: 'Transactions'
    }
  })
  .state('dashboard.credit.dueDate', {
    url: '/dueDate',
    templateUrl: 'views/partials/accounts/credit-duedate.html',
    controller: 'CreditDueDateCtrl',
    breadcrumb: {
      title: 'Due Date'
    }
  })
  .state('dashboard.credit.valueDate', {
    url: '/valueDate',
    templateUrl: 'views/partials/accounts/credit-valuedate.html',
    controller: 'CreditValueDateCtrl',
    breadcrumb: {
      title: 'Value Date'
    }
  })
  .state('dashboard.detailCreditPactedOp', {
    url: ':account_id/detail/operation',
   templateUrl : 'views/partials/accounts/credit-detail-operation.html',
    breadcrumb: {
      title: 'Detail'
    }
  })
}]);
