'use strict';

var app = angular.module('spaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngGrid'
]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

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
  .state('login', {
    url: '/login',
    templateUrl: 'views/partials/authentication/login.html',
    controller: 'LoginCtrl'
  })
  .state('dashboard.accounts', {
    url: 'accounts',
    templateUrl: 'views/partials/accounts/accounts.html',
    controller: 'AccountsCtrl',
    breadcrumb: {
      title: 'accounts'
    },
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
    templateUrl: 'views/partials/authorize/pending-operations.html',
    controller: 'AuthorizeOperationsCtrl',
    breadcrumb: {
      title: 'authorize'
    }
  })
  .state('dashboard.authorizeMod', {
    url: 'authorizeMod',
    templateUrl: 'views/partials/authorize/pending-modifications.html',
    controller: 'AuthorizeModCtrl',
    breadcrumb: {
      title: 'Modify'
    }
  })
  .state('dashboard.authorizeChanges', {
    url: 'authorizeChanges',
    templateUrl: 'views/partials/authorize/authorizeAdminChange.html',
    breadcrumb: {
      title: 'Authorize'
    }
  })
  .state('dashboard.transfer', {
    url: 'transfer',
    //templateUrl: 'views/transferAddCount.html',
    //controller: 'transferAddCount',
    templateUrl: 'views/partials/transfers/transfers.html',
    controller: 'TransfersCtrl',
    breadcrumb: {
      title: 'Transfer'
    }
  })
  .state('dashboard.addBeneficiary', {
    url: 'partials/transfer/add/beneficiary',
    templateUrl: 'views/partials/transfers/add-beneficiary.html',
    controller: 'AddBeneficiaryCtrl',
    breadcrumb: {
      title: 'Beneficiary'
    }
  })
  /**news*/
  .state('dashboard.addBeneficiary.physical', {
    url: '/physical',
    templateUrl: 'views/partials/transfers/add-beneficiary-physical.html',
    controller: 'AddBeneficiaryPhysicalCtrl',
    breadcrumb: {
      title: 'Physical'
    }
  })
  .state('dashboard.addBeneficiary.moral', {
    url: '/moral',
    templateUrl: 'views/partials/transfers/add-beneficiary-moral.html',
    controller: 'AddBeneficiaryMoralCtrl',
    breadcrumb: {
      title: 'Moral'
    }
  })
  .state('dashboard.addMoralBeneficiaryConfirm', {
    url: 'transfer/add/moralbeneficiary/confirm',
    templateUrl: 'views/partials/transfers/add-beneficiary-moral-confirm.html',
    controller: 'AddBeneficiaryMoralConfirmCtrl',
    breadcrumb: {
      title: 'Confirm'
    }
  })
  .state('dashboard.addBeneficiaryConfirm', {
    url: 'transfer/add/beneficiary/confirm',
    templateUrl: 'views/partials/transfers/add-beneficiary-confirm.html',
    controller: 'AddBeneficiaryConfirmCtrl',
    breadcrumb: {
      title: 'Confirm'
    }
  })
  .state('dashboard.addMoralBeneficiaryResult', {
    url: 'transfer/add/moralbeneficiary/result',
    templateUrl: 'views/partials/transfers/add-beneficiary-moral-result.html',
    controller: 'AddBeneficiaryMoralResultCtrl',
    breadcrumb: {
      title: 'Beneficiary'
    }
  })
  .state('dashboard.addBeneficiaryResult', {
    url: 'transfer/add/beneficiary/result',
    templateUrl: 'views/partials/transfers/add-beneficiary-result.html',
    controller: 'AddBeneficiaryResultCtrl',
    breadcrumb: {
      title: 'Beneficiary'
    }
  })
  /****END TO VIEWS */
  .state('dashboard.administration', {
    url: 'administration',
/*    templateUrl: 'views/setUpNotifications.html',
    controller: "setUpNotifications"*/
    templateUrl: 'views/partials/administration/admin_front.html',
    controller: 'UsersAdministrationCtrl',
    breadcrumb: {
      title: 'Administration'
    }
  })
  .state('dashboard.administrationuserdetail', {
    url: 'administration/users',
    templateUrl: 'views/partials/administration/users-admin.html',
   controller: 'UsersAdministrationDetailCtrl'
  })
  .state('dashboard.administrationctas', {
    url: 'administration/accounts',
    templateUrl: 'views/partials/administration/accounts-admin.html',
   controller: 'UsersAdministrationCtasCtrl'
  })
  .state('dashboard.administrationctas.customize', {
    url: '/customize',
    templateUrl: 'views/partials/administration/customize.html',
   //controller: 'UsersAdministrationDetailCtrl'
  })
  .state('dashboard.administrationctas_destino', {
    url: 'administration/accounts/dest',
    templateUrl: 'views/partials/administration/admin_ctas_destino.html',
   controller: 'UsersAdministrationDestAccCtrl'
  })
  .state('dashboard.administrationprivileges', {
    url: 'administration/users/privileges',
    templateUrl: 'views/partials/administration/users-and-privileges.html',
   //controller: 'UsersAdministrationDestAccCtrl'
  })
  .state('dashboard.administrationalerts', {
    url: 'administration/users/alerts',
    templateUrl: 'views/partials/administration/alert_configure.html',
   //controller: 'UsersAdministrationDestAccCtrl'
  })
  .state('dashboard.administrationuserdetailmod', {
    url: 'administration/users/mod/:account_usr',
    templateUrl: 'views/partials/administration/addmoduser.html',

  })
  .state('dashboard.administrationuserdetailadd', {
    url: 'administration/users/add',
    templateUrl: 'views/partials/administration/addmoduser.html',

  })
  .state('dashboard.administrationauthorize_change', {
    url: 'administration/users/autorize',
    templateUrl: 'views/partials/administration/authorize_changes.html',
   controller: 'UsersAdministrationAutCtrl'

  })
  .state('dashboard.biometric', {
    url: 'accounts/biometric/:account_id/transacctions',
    templateUrl: 'views/partials/accounts/biometrics.html',
    controller: 'BiometricCtrl',
    breadcrumb: {
      title: 'Biometrics'
    }
  })
  .state('dashboard.biometric_detail', {
    url: 'accounts/biometric/transacction/:transaction_id',
    templateUrl: 'views/partials/accounts/biometric-detail.html',
    controller : 'BiometricDetailCtrl' ,
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
  .state('dashboard.interbankTransfer', {
    url: ':transfer/interbankTransfer',
   templateUrl : 'views/partials/transfers/interbank.html',
   controller: 'InterbankCtrl',
   // breadcrumb: {
      //title: 'Detail'
   // }
  })
  .state('dashboard.confirmInterbankTransfer', {
    url: ':transfer/interbankTransfer/Confirm',
   templateUrl : 'views/partials/transfers/interbank-confirm.html',
   controller: 'InterbankCtrl'
   // breadcrumb: {
      //title: 'Detail'
   // }
  })
  .state('dashboard.internationalTransfer', {
    url: ':transfer/internationalTransfer',
   templateUrl : 'views/partials/transfers/international.html',
   controller: 'InternationalCtrl',
   // breadcrumb: {
      //title: 'Detail'
   // }
  })
  .state('dashboard.confirmInternationalTransfer', {
    url: ':transfer/confirmInternationalTransfer',
   templateUrl : 'views/partials/transfers/international-confirm.html',
   controller: 'InternationalCtrl'
   // breadcrumb: {
      //title: 'Detail'
   // }
  })
  .state('dashboard.same-bank-transfer', {
    url: ':transfer/same-bank-transfer',
   templateUrl : 'views/partials/transfers/same-bank.html',
   controller: 'SameBankCtrl',
   // breadcrumb: {
      //title: 'Detail'
   // }
  })
  .state('dashboard.same-bank-transfer-confirmation', {
    url: ':transfer/same-bank-transfer-confirmation',
   templateUrl : 'views/partials/transfers/same-bank-confirmation.html',
   controller: 'SameBankCtrl'
   // breadcrumb: {
      //title: 'Detail'
   // }
  })
  .state('dashboard.sameAddBeneficiary', {
    url: 'transfer/sameAddBeneficiary',
    templateUrl: 'views/partials/transfers/same-add-beneficiary.html',
      controller:'SameAddBeneficiaryCtrl',
     breadcrumb: {
      title: 'SameBank'
    }
  })
  .state('dashboard.sameConfirmBeneficiary', {
    url: 'transfer/sameConfirmBeneficiary',
    templateUrl: 'views/partials/transfers/same-confirm-beneficiary.html',
      controller:'SameAddBeneficiaryCtrl',
     breadcrumb: {
      title: 'SameBank'
    }
  })
}).factory('ctsCreditPacted', function(){
  return {}
}).factory('ctsBiometricas', function() {
  return {}
});
app.run(function($rootScope){
  $rootScope.restAPIBaseUrl = 'http://projects.anzen.com.mx:8081/mfm/api/v1/';
});

