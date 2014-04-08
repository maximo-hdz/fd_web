'use strict';

angular.module('spaApp')
.controller('CreditCtrl', function($scope,$http,$location,$rootScope,$log,$stateParams) {
	$rootScope.titulo = 'Saldos - Línea de Crédito - Cuenta ####';
	$scope.account_id = $stateParams.account_id;

	$http({
		//send with $stateParams.account_id
		url: $rootScope.restAPIBaseUrl + 'accounts/1',
		method: 'GET'
	}).
	success(function(data) {
		$scope.credit = data.credit;
	}).
	error(function(data, status) {
		$log.error('Error: '+data, status);
		$location.path( '/login' );
	});


 $scope.gridOptions ={data: 'myData',
      columnDefs: [{field:'name',displayName:'Nombre del beneficiario'},
      {field:'monto',displayName:'Monto'},
      {field:'acount',displayName:'Cuenta'}]
    };

    $http({
      url:'/accounts/detailCredit.json',
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

   $scope.producto="*******";
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
});
