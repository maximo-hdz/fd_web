'use strict';

angular.module('spaApp')
.controller('AuthorizeModCtrl', ['$scope','$location','$rootScope','authorizeProvider', function($scope,$location,$rootScope,authorizeProvider) {

		$scope.mySelections = [];
		$scope.gridOptions = {
			data: 'myData',
			multiSelect: false,
			selectedItems: $scope.mySelections,
			showSelectionCheckbox: true,
			columnDefs: [
				{field:'_account_id', displayName:'No. de Operación'}, 
				{field:'account_type', displayName:'Fecha de Operación'},
				{field:'name', displayName:'Descripcion Modificación'},
				{field:'alias', displayName:'Usuario'}],
				afterSelectionChange: function(data) {
					$location.path( '/administration/users/autorize' );
				}	
		};

		authorizeProvider.getAuthorizeMod().then(
			function(data) {
				$scope.myData = $rootScope.authorizeMod;
			}
		);
	}]
);
