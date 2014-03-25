'use strict';

/**
 * This controller is  work flow of inventions, obtain a .json to see on the view invertion.html
 */
angular.module('spaApp')
.controller('InvestmentCtrl',
	function($scope,$http,$location,$rootScope,$log) {

		$http({
			url: $rootScope.restAPIBaseUrl + 'accounts/invertions.json',
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
			url: $rootScope.restAPIBaseUrl + 'accounts/investment.json',
			method: 'GET'
		}).
		success(function(data, status, headers) {
			$scope.mxn = data;
		}).
		error(function(data, status) {
			$log.error('Error: '+data, status);
			$scope.errorMessage = 'operation failed';
		});
	}
);
