'use strict';

angular.module('spaApp')
.controller('BiometricCtrl', function($scope,$http,$location,ctsBiometricas,$rootScope,$log,$stateParams) {

	$scope.today = function() {
		$scope.dateFrom = new Date();
		$scope.dateTo = new Date();
	};

	$scope.today();
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
			{field:'balance', displayName:'Saldo'}],

		afterSelectionChange: function(data) {
				console.log($scope.mySelections[0].transaction_id);
				$location.path("accounts/biometric/transacction/" + $scope.mySelections[0].transaction_id);
			}
	};

	//TODO: Get temporal json for transacctions
	$http({
		url: 'json/biometric-transacctions.json',
		method: 'GET'
	}).
	success(function(data, status, headers) {
		$scope.myData = data.transacctions;
	}).
	error(function(data, status) {
		$log.error('Error: '+data, status);
		$location.path( '/login' );
	});


	$scope.accountNumber = $stateParams.account_id;
	$scope.amount=100000;
	$scope.from="06/03/2014";
	$scope.to="20/03/2014";
  	$scope.format = 'dd/MM/yyyy';
	/** functions for datepicker **/

	// Disable weekend selection
	$scope.disabled = function(date, mode) {
	 	return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	};

	$scope.openFrom = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();
	    $scope.openedfrom = true;
	}

	$scope.openTo = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();
	    $scope.openedto = true;
	};
});
