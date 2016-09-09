
angular.module('spaApp').controller('AdministrationCtrl', ['$scope', 'adminProvider', function ($scope, adminProvider) {

  $scope.page = -1;
  $scope.size = 10;
  $scope.totalItems = 0;
  $scope.totalPages = 0;
  $scope.disableAnt = false;
  $scope.disableSig = false;

  $scope.activity = function(option) {
    if(($scope.disableSig && option === 'sig' ) || ($scope.disableAnt && option === 'ant')){
      return;
    }
    $scope.page = option === 'ant' ? $scope.page-1 : $scope.page+1 ;
    adminProvider.getUserActivity($scope.page, $scope.size).then(
      function(data) {
        $scope.userActivities = data.user_activities;
        $scope.totalPages = Math.ceil(data.total_items / $scope.size );
        $scope.disableAnt = $scope.page === 0 ? true : false;
        $scope.disableSig = $scope.page+1 === $scope.totalPages ? true : false;
      },
      function() {
        $scope.disableAnt = true;
        $scope.disableSig = true;
      }
    );
  };
  $scope.activity('sig');

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
