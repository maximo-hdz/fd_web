'use strict';

angular.module('spaApp')
.controller('UsersAdministrationAutCtrl', function ($rootScope,$scope,$http,$location,$sce,$stateParams,usersAdminUsersAutProvider) {



$scope.specialist =  'David Torres Fernandez';
	$rootScope.titulo = 'Administracion';

	$scope.mySelections = [];

	$scope.gridOptions = {
		data: 'myData',
		multiSelect: false,
		selectedItems: $scope.mySelections,
		showSelectionCheckbox: true,
		columnDefs: [
			{field:'operacion', displayName:'Operacion'},
			{field:'fechaop', displayName:'Fecha Operacion'},
			{field:'descripcion', displayName:'Descripcion Modificación'},
			{field:'user', displayName:'Usuario'}
			],
		afterSelectionChange: function(data) {

			//	$location.path( 'administration/detail/mod/'+$scope.mySelections[0].alias ); 
			}
	};

	$scope.amount="100000";
	$scope.from="06/03/2014";
	$scope.to="20/03/2014";

	usersAdminUsersAutProvider.getUsersAdminUsersAut().then(function(){

		$scope.myData = $rootScope.usersAdminUsersAut;

	});

});
