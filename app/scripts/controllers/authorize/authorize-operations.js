'use strict';

angular.module('spaApp')
.controller('AuthorizeOperationsCtrl',
	function($scope,$location,$rootScope,authorizeProvider) {

		$scope.mySelections = [];
		$scope.gridOptions = {
			data: 'myData',
			multiSelect: false,
			selectedItems: $scope.mySelections,
			showSelectionCheckbox: true,
			columnDefs: [
				{field:'_account_id', displayName:'No. de Operación'},
				{field:'account_type', displayName:'Fecha de Operación'},
				{field:'name', displayName:'Importe'},
				{field:'alias', displayName:'Divisa'},
				{field:'currency', displayName:'Estatus'}],
				afterSelectionChange: function(data) {
					if($scope.mySelections[0].account_type=="CREDIT_CARD"){
						$location.path( $scope.mySelections[0]._account_id+'/detailCreditPacted');
					}
					else{
						$location.path( $scope.mySelections[0]._account_id+'/detail/operation');
					}
				}
		};

		authorizeProvider.getAuthorizeOp().then(
			function(data) {
				$scope.myData = $rootScope.authorizeOp;
			}
		);
	}
);
