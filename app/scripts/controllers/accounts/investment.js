'use strict';

/**
 * This controller is  work flow of inventions, obtain a .json to see on the view invertion.html
 */
angular.module('spaApp')
.controller('InvestmentCtrl',function($scope,$http,$location,$rootScope,$log, investmentProvider) {
	
	$scope.moneda = [
	    {name:'MXN - Pesos '},
	    {name:'USD - Dólares'}    
  	];
  	$scope.tipoDivisa = $scope.moneda[0]; 


  	investmentProvider.getInvestmentAccounts().then(function(){
  		console.log('ok1');

  		$scope.myData = $rootScope.investAccounts;
  	
	});

  	$scope.mySelections = [];
	$scope.gridOptions = {
		data: 'myData',
		selectedItems: $scope.mySelections,
		columnDefs: [
			{field:'alias', displayName:'Alias'},
			{field:'date', displayName:'Fecha'},
			{field:'typeInvertion', displayName:'Tipo Inversion'},
			{field:'mount', displayName:'Monto'},
			{field:'rate', displayName:'Tasa'},
			{field:'periodicityCoupons', displayName:'Periocidad de cupones'},
			{field:'dueDate', displayName:'Fecha Vencimiento'},
			{field:'remainingCoupons', displayName:'Cupones Restantes'}
			],		

		afterSelectionChange: function(data){
				$location.path($scope.mySelections[0].rate+'/detailInvestment');
		}

	};

});//End controller
