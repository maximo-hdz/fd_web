'use strict';

angular.module('spaApp')
.controller('CreditDueDateCtrl', function ($scope,$rootScope,creditDueProvider) {

	$scope.mySelections = [];
	$scope.gridOptions = {
			data: 'myData',
			multiSelect: false,
			selectedItems: $scope.mySelections,
			columnDefs: [
				{field:'op_num', displayName:'No. de Operación'},
				{field:'client', displayName:'Cliente'},
				{field:'due_date', displayName:'Fecha Vencimiento'},
				{field:'mount', displayName:'Monto a Pagar'},
				{field:'currency', displayName:'Divisa'}]
	};

  creditDueProvider.getCreditDue().then(
    function(data) {
      $scope.myData = $rootScope.creditDue;
    }
  );
});
