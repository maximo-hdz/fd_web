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

});
