'use strict';


angular.module('administration-route', ['ui.router'])
.config(['$locationProvider', '$urlRouterProvider', '$stateProvider', '$httpProvider', 	function($locationProvider, $urlRouterProvider, $stateProvider, $httpProvider){
$stateProvider	
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
   controller: 'UsersAdministrationCtasCtrlRedirect'
  })
  .state('dashboard.administrationctas.customize', {
    url: '/customize',
    templateUrl: 'views/partials/administration/customize.html',
   //controller: 'UsersAdministrationDetailCtrl'
  })
  .state('dashboard.administrationctas.main', {
    url: '/',
    templateUrl: 'views/partials/administration/buttons.html',
   controller: 'UsersAdministrationCtasCtrl'
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



}]);
