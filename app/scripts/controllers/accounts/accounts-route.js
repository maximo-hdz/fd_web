'use strict';
/**
 * StateProvider for the accounts dashboard
 */
angular.module('accounts-route', ['ui.router'])
.config(['$stateProvider', function ($stateProvider) {
  $stateProvider

    // main view to load all the accounts
    .state('dashboard.accounts', {
      url: 'accounts',
      views: {
        'accountContent': {
          templateUrl: 'views/partials/accounts/accounts.html',
          controller: 'AccountsCtrl'
        }
      },
      displayName: 'Cuentas',
      path: 'Cuenta'

    })

    /**
     * Section for saving accounts
     */
    .state('dashboard.accounts.saving', {
      url: '/:account_id/saving',
      views: {
        'detailSaving': {
          templateUrl: 'views/partials/accounts/saving/saving.html',
          controller: 'SavingDetailCtrl'
        }
      },
      displayName: 'Ahorro',
      path: 'Cuenta'
    })

    /**
     * Section for investment accounts
     */
    .state('dashboard.accounts.investment', {
      url: '/:account_id/investment',
      views: {
        'detailInvestment': {
          templateUrl: 'views/partials/accounts/investment/investment.html',
          controller : 'InvestmentDetailCtrl'
        }
      },
        displayName: 'Inversiones',
        path: 'Cuenta'
    })

    /**
     * Section for loan accounts
     */
    .state('dashboard.accounts.loan', {
      url: '/:account_id/loan',
      views: {
        'detailLoan': {
          templateUrl: 'views/partials/accounts/loan/loan.html',
          controller: 'LoanDetailCtrl'
        }
      },
      displayName: 'Prestamos',
      path: 'Cuenta'
    })

    /**
     * Section for credit cards
     */
    .state('dashboard.accounts.credit', {
      url: '/:account_id/credit',
      views: {
        'detailCredit': {
          templateUrl: 'views/partials/accounts/credit/credit.html',
          controller: 'CreditDetailCtrl'
        }
      },
       displayName: 'Creditos',
        path: 'Cuenta'
    })

}]);
