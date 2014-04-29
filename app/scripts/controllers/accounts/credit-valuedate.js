'use strict';

angular.module('spaApp')
.controller('CreditValueDateCtrl', function ($scope,$rootScope,creditValueProvider) {

	$scope.gridOptions = {
			data: 'myData',
			multiSelect: false,
			selectedItems: $scope.mySelections,
			columnDefs: [
				{field:'op_num', displayName:'No. de Operación'},
				{field:'status', displayName:'Estatus'},
				{field:'client', displayName:'Cliente'},
				{field:'value_date', displayName:'Fecha Valor'},
				{field:'mount', displayName:'Monto a Disponer'},
				{field:'currency', displayName:'Divisa'}]
	};

  creditValueProvider.getCreditValue().then(
    function(data) {
      $scope.myData = $rootScope.creditValue;
    }
  );

	$scope.today = function() {
		$scope.dateFrom = new Date();
		$scope.dateTo = new Date();
	};

	$scope.today();
	$scope.from="06/03/2014";
	$scope.to="20/03/2014";
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

	$scope.openTo = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();
	    $scope.openedto = true;
	};

});
