'use strict';

angular.module('spaApp')
.controller('UsersAdministrationDetailCtrl', function ($rootScope,$scope,$http,$location,$sce,$stateParams) {



$scope.specialist =  'David Torres Fernandez';
	$rootScope.titulo = 'Administracion';

	$scope.mySelections = [];

	$scope.gridOptions = {
		data: 'myData',
		multiSelect: false,
		selectedItems: $scope.mySelections,
		showSelectionCheckbox: true,
		columnDefs: [
			{field:'account_name', displayName:'Nombre'},
			{field:'account_usr', displayName:'Usuario'},
			{field:'status', displayName:'Estatus'},
			{field:'biometry', displayName:'Biometría'},
			{field:'change_status', displayName:'Cambiar Estatus'}
			],
		afterSelectionChange: function(data) {

				$location.path( 'administration/users/mod/'+$scope.mySelections[0].account_usr ); 
			}
	};

	$scope.amount="100000";
	$scope.from="06/03/2014";
	$scope.to="20/03/2014";


	$http({
		url: '/json/table.json',
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
