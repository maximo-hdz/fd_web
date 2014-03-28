'use strict';

angular.module('spaApp')
.controller('user_administration', function ($scope,$http,$location,$sce,$stateParams) {

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
				$location.path( $scope.mySelections[0]._account_id+'/detail' );
			}	
	};

	$scope.amount="100000";
	$scope.from="06/03/2014";
	$scope.to="20/03/2014";

	$http({
		url: 'http://127.0.0.1:9000/accounts/table.json',
		method: 'GET'
	}).
	success(function(data, status, headers) {
		console.log("ya entre");
		$scope.myData = data.accounts;
	}).
	error(function(data, status) {
		console.log("error "+data);
		$location.path( '/login' );
	});

});
