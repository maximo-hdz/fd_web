'use strict';

angular.module('spaApp').controller('AdministrationCtrl', ['$scope', 'adminProvider', function ($scope, adminProvider) {

  $scope.page=0
  var size = 10;
  $scope.disableAnt=true;
  $scope.disableSig=true;

  adminProvider.getUserActivity($scope.page, size).then(
    function(data) {
        $scope.userActivity = data.user_activity;
        $scope.disableSig = data.user_activity.length < size ? true : false;
    },
    function(error) {
        $scope.disableAnt = true;
        $scope.disableSig = true;
    }
  );

  $scope.activity = function(option) {
    $scope.page = option == 'ant' ? $scope.page - 1 : $scope.page + 1 ;
    adminProvider.getUserActivity($scope.page, size).then(
      function(data) {
          $scope.userActivity = data.user_activity;
          $scope.disableAnt = $scope.page == 0 ? true : false;
          $scope.disableSig = data.user_activity.length < size ? true : false;
      },
      function(error) {
        $scope.disableAnt = true;
        $scope.disableSig = true;
      }
     );
  };

  $scope.mapUserActivity = function(activity) {
    var activityName = activity;
    var userActions = {
     'checkLogin': 'Pre Login',
     'authenticateUser': 'Login',
     'logout': 'Logout',
     'getAccounts': 'Consulta de Cuentas',
     'setAccountsLimits': 'Modificación de Límites',
     'getFile': 'Consulta de Estado de Cuenta',
     'getInvestmentProductsForUser': 'Consulta de Inversiones',
     'getThirdAccounts': 'Consulta de Cuentas de Terceros',
     'saveThirdAccount': 'Alta de Beneficiario',
     'removeThirdAccount': 'Baja de Beneficiario',
     'activateSecurityToken': 'Activación de Token',
     'disableSecurityToken': 'Baja de Token',
     'synchronizeSecurityToken': 'Sincronización de Token',
     'transfer': 'Transferencia',
     'changePassword': 'Cambio de Password',
     'updateCommunicationInfo': 'Cambio de Medio de Comunicación',
     'updateDigitalBankServicesState': 'Cambio de Status en Banca Digital'
   };
   if(userActions[activity]) {
     activityName = userActions[activity];
   }
   return activityName;
 };

  $scope.mapActivityStatus = function(activityStatus) {
      var statuses = {
        true : 'exitoso',
        false: 'fallo'
      };
    return statuses[activityStatus];
  };

}]);
