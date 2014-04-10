'use strict';

angular.module('spaApp')
.controller('AuthorizeModCtrl',
	function($scope,$http,$location,$rootScope,$log) {

		$scope.gridOptions = {
			data: 'myData',
			multiSelect: false,
			selectedItems: $scope.mySelections,
			showSelectionCheckbox: true,
			columnDefs: [
				{field:'_account_id', displayName:'No. de Operación'}, 
				{field:'account_type', displayName:'Fecha de Operación'},
				{field:'name', displayName:'Descripcion Modificación'},
				{field:'alias', displayName:'Usuario'}],
			afterSelectionChange: function(data) {
					$location.path( $scope.mySelections[0]._account_id+'/detail' );
				}	
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
	}
);
