'use strict';

angular.module('spaApp').controller('AdministrationCtrl', ['$scope', 'adminProvider', function ($scope, adminProvider) {

  $scope.page=0
  $scope.status=true;
  $scope.indexStatus=false;
  var size = 10;

  $scope.activity=function(option) {

  adminProvider.getUserActivity($scope.page, size).then(

    function(data) {
        $scope.userActivity = data.user_activity;

        if(option=='ant'&& $scope.page != 0 ){
          $scope.page--;
          $scope.indexStatus=false;
        }

        if (option=='ant' && $scope.page == 0){
          $scope.indexStatus=false;
          $scope.status=true;
        }

        if(option=='next'){
          $scope.status=false;
          $scope.page++;
        }

        if(option=='next' && $scope.userActivity.length-1){
          $scope.indexStatus=true;
        }
    },
    function(error) {
        $scope.status=true;
        $scope.indexStatus=true;
    }
   );
  };

  adminProvider.getUserActivity($scope.page, size).then(
    function(data) {
        $scope.userActivity = data.user_activity;
    },
    function(error) {
        $scope.status=true;
        $scope.indexStatus=true;
    }
  );

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
  //console.log("Size "+ activityName);
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
