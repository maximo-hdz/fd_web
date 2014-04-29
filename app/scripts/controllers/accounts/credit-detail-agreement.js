'use strict';

angular.module('spaApp')
.controller('CreditDetailAgreementCtrl', function ($scope,$stateParams,$rootScope,creditDetailProvider) {

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

	$scope.operation=100000;
	$scope.amount=100000;
	$scope.from="06/03/2014";
	$scope.to="20/03/2014";
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
