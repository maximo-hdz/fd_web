'use strict';

angular.module('spaApp')
.controller('CreditCtrl', ['$scope','$rootScope','$log','$stateParams','creditProvider', function($scope,$rootScope,$log,$stateParams,creditProvider) {

	$scope.account_id = $stateParams.account_id;

  var sessionId = '0001';
  var rowId = 'id_row';

  creditProvider.getCreditDetail(sessionId,rowId).then(
    function(data) {
      $scope.credit = $rootScope.creditDetail;
    }
  );

/*
 $scope.gridOptions ={data: 'myData',
      columnDefs: [{field:'name',displayName:'Nombre del beneficiario'},
      {field:'monto',displayName:'Monto'},
      {field:'acount',displayName:'Cuenta'}]
    };

    $http({
      url:'/json/detailCredit.json',
      method: 'GET'
    }).
    success(function(data, status) {
        $scope.myData=data.detail;
    }).
    error(function(data, status) {
      //put an error message in the scope
      $log.error('Error: '+data, status);
      $scope.errorMessage = 'operation failed';
    });
*/
/*   $scope.producto="*******";
   $scope.noOperacion="#####";
   $scope.montoEnviar="99,0000.00";
   $scope.date="DD/MM/YYYY";
   $scope.tc="00.00";
   $scope.operacion=45698;
   $scope.autorizaMas="+ 123859";
   $scope.authorized = [
      {name:'Rafa MArquez'},
      {name:'Memo Ochoa'},
      {name:'Cristiano'}
    ];
*/

}]);
