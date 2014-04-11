'use strict';

angular.module('spaApp')
.controller('CreditDetailAgreementCtrl', function ($scope,$http,$location,$sce,$stateParams,ctsCreditPacted) {


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
				$location.path( $scope.mySelections[0].acount+'/detailCreditPactedOp' );
			}


	};

	$scope.amount=100000;
	$scope.from="06/03/2014";
	$scope.to="20/03/2014";

	$http({
		url: 'accounts/detailCredit.json',
		method: 'GET'
	}).
	success(function(data, status, headers) {
		$scope.myData = data.detail;
	}).
	error(function(data, status) {
		$log.error('Error: '+data, status);
		$location.path( '/login' );
	});

	    $scope.authorized = [
      {name:'Rafa Marquez'},
      {name:'Memo Ochoa'},
      {name:'Cristiano(Hala)'}
    ];
    $scope.metodo = [
      {name:'551234567'},
      {name:'5512345678'},
      {name:'prueba@anzen.com.mx'}    
    ];
});
