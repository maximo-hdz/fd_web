'use strict';

angular.module('spaApp')
.controller('transactionsCtrl', function ($scope,$http,$log,$location,$stateParams) {

	$scope.mySelections = [];
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
				$location.path( $scope.mySelections[0]._account_id+'/detail' );
			}
	};	

	$http({
		//Enviar con $stateParams.account_id
		url: 'http://mfm.jit.su/api/accounts/1',
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