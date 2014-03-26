'use strict';

angular.module('spaApp')
.controller('BiometricsCtrl', function ($scope,$http,$location,$sce,$stateParams,ctsBiometricas) {
	
	$scope.biometricAccounts = ctsBiometricas.accounts;
	$scope.seleccionTMP = {};
	$scope.mySelections = [];
	for(var x in $scope.biometricAccounts.accounts){
		if($stateParams.account_id == $scope.biometricAccounts.accounts[x]._account_id+'#'){
			$scope.seleccionTMP = $scope.biometricAccounts.accounts[x];
			break;
		}
	}

	$scope.gridOptions = {
		data: 'myData',
		multiSelect: false,
		selectedItems: $scope.mySelections,
		columnDefs: [
			{field:'_account_id', displayName:'Fecha'}, 
			{field:'account_type', displayName:'Operación'},
			{field:'name', displayName:'Descripcion'},
			{field:'alias', displayName:'Cargo'},
			{field:'currency', displayName:'Abono'},
			{field:'last_digits', displayName:'Saldo'}],
		
		afterSelectionChange: function(data) {
				$location.path( $scope.mySelections[0]._account_id+'/detailMovement' );
			}	
		

	};

	$scope.amount=100000;
	$scope.from="06/03/2014";
	$scope.to="20/03/2014";

	$http({
		url: 'http://projects.anzen.com.mx:3000/api/accounts/1',
		method: 'GET'
	}).
	success(function(data, status, headers) {
		$scope.myData = data.accounts;
	}).
	error(function(data, status) {
		$log.error('Error: '+data, status);
		$location.path( '/login' );
	});

});
