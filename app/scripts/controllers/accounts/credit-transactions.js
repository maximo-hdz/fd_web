'use strict';

angular.module('spaApp')
.controller('CreditTransactionsCtrl', function($scope,$rootScope,$location,creditMovementProvider) {

	$scope.mySelections = [];
	$scope.gridOptions = {
			data: 'myData',
			multiSelect: false,
			selectedItems: $scope.mySelections,
			columnDefs: [
				{field:'date', displayName:'Fecha'},
				{field:'operation', displayName:'Operación'},
				{field:'description', displayName:'Descripcion'},
				{field:'charge', displayName:'Cargo'},
				{field:'payment', displayName:'Abono'},
				{field:'amount', displayName:'Saldo'}],
			afterSelectionChange: function(data) {
				if($scope.mySelections[0].description=="Literal"){
					$location.path( $scope.mySelections[0].charge+'/detailCreditPacted');
				}
				else{
					$location.path( $scope.mySelections[0].charge+'/detail/operation');
				}
			}
	};

	creditMovementProvider.getCreditMovement().then(
		function(data) {
			$scope.myData = $rootScope.creditMovement;
		}
	);

});

