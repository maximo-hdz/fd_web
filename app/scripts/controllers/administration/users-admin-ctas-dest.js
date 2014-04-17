'use strict';

angular.module('spaApp')
.controller('UsersAdministrationDestAccCtrl', function ($rootScope,$scope,$http,$location,$sce,$stateParams) {



$scope.specialist =  'David Torres Fernandez';
	$rootScope.titulo = 'Administracion';

	$scope.mySelections = [];

	$scope.gridOptions = {
		data: 'myData',
		multiSelect: false,
		selectedItems: $scope.mySelections,
		showSelectionCheckbox: true,
		columnDefs: [
			{field:'alias', displayName:'Alias'},
			{field:'correo_e', displayName:'Correo Electrónico'},
			{field:'num_cta', displayName:'No. de Cuenta'},
			{field:'banco', displayName:'Banco'},
			{field:'beneficiario', displayName:'Beneficiario'}
			],
		afterSelectionChange: function(data) {

				$location.path( 'administration/detail/mod/'+$scope.mySelections[0].alias ); 
			}
	};

	$scope.amount="100000";
	$scope.from="06/03/2014";
	$scope.to="20/03/2014";


	$http({
		url: '/accounts/dest_acc.json',
		method: 'GET'
	}).
	success(function(data, status, headers) {
		console.log("ya entre");
		$scope.myData = data.accounts;
	}).
	error(function(data, status) {
		console.log("error "+data);
	alert('Error http() de UsersAdministrationCtrl');
		$location.path( '/login' );
	});

});
