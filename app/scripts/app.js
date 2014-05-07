'use strict';

var app = angular.module('spaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngGrid',
  'accounts-route',
  'administration-route',
  'authorize-route',
  'authentication-route',
  'connection-route',
  'transfers-route'
]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $httpProvider.responseInterceptors.push('httpInterceptor');

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
  });

app.run(['api','$rootScope', function(api,$rootScope) {
  api.config();
  api.init();
}]);

<<<<<<< HEAD
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
    //  controller:'SameAddBeneficiaryCtrl',
    controller: 'SameBankCtrl',
     breadcrumb: {
      title: 'SameBank'
    }
  })
  .state('dashboard.sameConfirmBeneficiary', {
    url: 'transfer/sameConfirmBeneficiary',
    templateUrl: 'views/partials/transfers/same-confirm-beneficiary.html',
     // controller:'SameAddBeneficiaryCtrl',
     controller: 'SameBankCtrl',
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
=======
>>>>>>> 2e65d64c7701689fc61d74104bd9c6bf6968606c

