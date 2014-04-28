'use strict';

/**
 * This controller is  work flow of inventions, obtain a .json to see on the view invertion.html
 */
angular.module('spaApp')
.controller('InvestmentCtrl',function($scope,$http,$location,$rootScope,$log) {
	
	$scope.moneda = [
	    {name:'MXN - Pesos '},
	    {name:'USD - Dólares'}    
  	];
  	$scope.tipoDivisa = $scope.moneda[0]; 



	$http({
		url:'json/data-investment.json',
		method: 'GET'
	}).
		success(function(data, status, headers) {

		$scope.myData = data.transacctions;
	}).
		error(function(data, status) {
		//put an error message in the scope
		$log.error('Error: '+data, status);
		$scope.errorMessage = 'operation failed';
	});

	$scope.gridOptions = {

		data: 'myData',
		columnDefs: [
			{field:'alias', displayName:'Alias'},
			{field:'date', displayName:'Fecha'},
			{field:'typeInvertion', displayName:'Tipo Inversion'},
			{field:'mount', displayName:'Monto'},
			{field:'rate', displayName:'Tasa'},
			{field:'periodicityCoupons', displayName:'Periocidad de cupones'},
			{field:'dueDate', displayName:'Fecha Vencimiento'},
			{field:'remainingCoupons', displayName:'Cupones Restantes'}
			]		
	};

	$http({
		url:'json/investment.json',
		method: 'GET'
	}).
		success(function(data, status, headers) {
		$scope.invertions = data;
	}).
		error(function(data, status) {
		//put an error message in the scope
		$log.error('Error: '+data, status);
		$scope.errorMessage = 'operation failed';
	});

	$http({
		url: 'json/investment.json',
		method: 'GET'
	}).
		success(function(data, status, headers) {
		$scope.mxn = data;
	}).
		error(function(data, status) {
		$log.error('Error: '+data, status);
		$scope.errorMessage = 'operation failed';
	});
});//End controller
