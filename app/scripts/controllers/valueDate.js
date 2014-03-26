'use strict';

angular.module('spaApp')
.controller('valueDateCtrl', function ($scope,$http,$log,$location,$stateParams) {
	
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
		//Enviar con $stateParams.account_id
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
