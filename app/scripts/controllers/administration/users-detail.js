'use strict';

/*
Users Administration Detail Controller
*/
angular.module('spaApp')
.controller('UsersAdministrationDetailCtrl', ['$rootScope','$scope','$http','$location','$sce','$stateParams', 'usersAdminDetailProvider', function ($rootScope,$scope,$http,$location,$sce,$stateParams, usersAdminDetailProvider) {



$scope.specialist =  'David Torres Fernandez';
	$rootScope.titulo = 'Administracion';

	$scope.mySelections = [];

/*Grid Data Request*/
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


/*Scope Vars*/
	$scope.amount="100000";
	$scope.from="06/03/2014";
	$scope.to="20/03/2014";


/*Promise Test and Data Assign*/
	usersAdminDetailProvider.getUsersAdminDetailAccounts().then(

		function(){

			$scope.myData = $rootScope.usersAdminDetailAccounts;
	});



}]);
