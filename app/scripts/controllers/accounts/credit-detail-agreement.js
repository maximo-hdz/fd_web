'use strict';

angular.module('spaApp')
.controller('CreditDetailAgreementCtrl', function ($scope,$stateParams,$rootScope,creditDetailProvider,creditBalanceProvider) {

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
	};

	creditDetailProvider.getCreditDetail().then(
		function(data) {
			$scope.myData = $rootScope.creditDetail;
		}
	);

	creditBalanceProvider.getCreditBalance().then(
		function(data) {
			$scope.balance = $rootScope.creditBalance;
		}
	);

	$scope.operacion="159159";

	$scope.authorized = [
      {name:'Autorizador 1'},
      {name:'Autorizador 2'},
      {name:'Autorizador 3'}
    ];
    $scope.metodo = [
      {name:'5512345679'},
      {name:'5512345678'}
    ];

});
