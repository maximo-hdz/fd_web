'use strict';

angular.module('spaApp')
.controller('valueDateCtrl', function ($scope,$http,$location,$rootScope,$log,$stateParams) {
	
	$scope.gridOptions = { 
			data: 'myData',
			multiSelect: false,
			selectedItems: $scope.mySelections,
			columnDefs: [
				{field:'_account_id', displayName:'No. de Operación'}, 
				{field:'account_type', displayName:'Estatus'},
				{field:'name', displayName:'Cliente'},
				{field:'alias', displayName:'Fecha Valor'},
				{field:'currency', displayName:'Monto a Disponer'},
				{field:'last_digits', displayName:'Divisa'}]
	};	

	$http({
		url: $rootScope.restAPIBaseUrl + 'accounts/1',
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
