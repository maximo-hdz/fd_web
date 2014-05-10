'use strict';

angular.module('spaApp')
.controller('CreditDueDateCtrl', ['$scope','$rootScope','creditDueProvider', function ($scope,$rootScope,creditDueProvider) {

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

	$scope.today = function() {
		$scope.dateFrom = new Date();
		$scope.dateTo = new Date();
	};

	$scope.today();
	$scope.from="06/03/2014";
	$scope.format = 'dd/MM/yyyy';
	/** functions for datepicker **/

	// Disable weekend selection
	$scope.disabled = function(date, mode) {
		return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	};

	$scope.openFrom = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();
	    $scope.openedfrom = true;
	}

}]);
