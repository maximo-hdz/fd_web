'use strict';

angular.module('spaApp')
.controller('dueDateCtrl', function ($scope,$http,$location,$rootScope,$log,$stateParams) {
	
	$scope.mySelections = [];
	$scope.gridOptions = { 
			data: 'myData',
			multiSelect: false,
			selectedItems: $scope.mySelections,
			columnDefs: [
				{field:'_account_id', displayName:'No. de Operación'}, 
				{field:'account_type', displayName:'Cliente'},
				{field:'name', displayName:'Fecha Vencimiento'},
				{field:'alias', displayName:'Monto a Pagar'},
				{field:'currency', displayName:'Divisa'}]
	};	

	$http({
		url: $rootScope.restAPIBaseUrl + 'accounts/1',
		method: 'GET'
	}).
	success(function(data, status) {
		$scope.myData = data.accounts;
	}).
	error(function(data, status) {
		$log.error('Error: '+data, status);
		$scope.errorMessage = 'operation failed';
	});
});
