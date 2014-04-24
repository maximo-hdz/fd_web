'use strict';

angular.module('spaApp')
.controller('InvestmentDetailCtrl',	function($scope,$http,$location,$rootScope,$log) {

		$scope.InvestmentDetail = {
			"name":"Juan Pérez",
			"initialAmount":"$5,000,000.00",
			"currency":"MXN",
			"bank":"BANAMEX",
			"targetAccount":"1231357",
			"initialDate":"DD/MM/YYYY",
			"finalDate":"DD/MM/YYYY"
		};

		$scope.gridOptions = {
			data: 'myData',
			multiSelect: false,
			selectedItems: $scope.mySelections,
			columnDefs: [
				{field:'_account_id', displayName:'Fecha'},
				{field:'account_type', displayName:'Interés mensual'},
				{field:'name', displayName:'Retención 0.60%'},
				{field:'alias', displayName:'Interés neto'},
				{field:'currency', displayName:'Retiro de intereses'}],
			afterSelectionChange: function(data) {
					$location.path( $scope.mySelections[0]._account_id+'/detail' );
				}
		};

		$http({
			//url: $rootScope.restAPIBaseUrl + 'accounts/1',
			url:'json/account.json',
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
