'use strict';

angular.module('accounts-route',['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $stateProvider

    // main view to load all the accounts
    .state('dashboard.accounts', {
      url: 'accounts',
      views: {
          'accountContent': {
            templateUrl: 'views/partials/accounts/accounts.html',
            controller: 'AccountsCtrl',
            breadcrumb: {
      	      title: 'accounts'
            }
          }
      }
    })

    /**
     *
     */
    .state('dashboard.accounts.saving', {
      url: '/:account_id/saving',
      views: {
        'detailSaving': {
          templateUrl: 'views/partials/accounts/saving/saving.html',
          controller: 'SavingDetailCtrl',
          breadcrumb: {
            title: 'saving'
          }
        }
      }
    })

    /**
     *
     */
    .state('dashboard.accounts.investment', {
      url: '/:account_id/investment',
      views: {
        'detailInvestment': {
          templateUrl: 'views/partials/accounts/investment/investment.html',
          controller : 'InvestmentDetailCtrl',
          breadcrumb: {
            title: 'investment'
          }
        }
      }
    })

    /**
     *
     */
    .state('dashboard.accounts.loan', {
      url: '/:account_id/loan',
      views: {
        'detailLoan': {
          templateUrl: 'views/partials/accounts/loan/loan.html',
          controller: 'LoanDetailCtrl',
          breadcrumb: {
            title: 'loan'
          }
        }
      }
    })

    /**
     *
     */
    .state('dashboard.accounts.credit', {
      url: '/:account_id/credit',
      views: {
        'detailCredit': {
          templateUrl: 'views/partials/accounts/credit/credit.html',
          controller: 'CreditDetailCtrl',
          breadcrumb: {
            title: 'credit'
          }
        }
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
    controller: 'CreditDetailAgreementCtrl',
    breadcrumb: {
      title: 'Detail'
    }
  })
}]);
