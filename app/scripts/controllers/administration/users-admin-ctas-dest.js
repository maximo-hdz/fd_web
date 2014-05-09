'use strict';
/*
Users Administration Destination Accounts Controller
*/

angular.module('spaApp')
.controller('UsersAdministrationDestAccCtrl', ['$rootScope','$scope','$http','$location','$sce','$stateParams','usersAdminCtasDestProvider', function ($rootScope,$scope,$http,$location,$sce,$stateParams,usersAdminCtasDestProvider) {


	/*scope vars*/
	$scope.specialist =  'David Torres Fernandez';
	$rootScope.titulo = 'Administracion';
	$scope.amount="100000";
	$scope.from="06/03/2014";
	$scope.to="20/03/2014";
	$scope.mySelections = [];

	/*Grid Data Request*/
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

				//$location.path( 'administration/detail/mod/'+$scope.mySelections[0].alias ); 
			}
	};

	
	/*Promise Test and Data Assign*/
	usersAdminCtasDestProvider.getUsersAdminCtasDest().then(function(){

			$scope.myData = $rootScope.UsersAdminCtasDest;

	});

}]);
