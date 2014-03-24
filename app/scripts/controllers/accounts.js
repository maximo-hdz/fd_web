'use strict';

/**
 * The accounts controller. Gets accounts passing auth parameters
 */
angular.module('spaApp')
.controller('AccountsCtrl', function($scope,$http,$location,ctsBiometricas,$rootScope,$log) {
	$scope.client = 'Ricardo Montemayor Morales';

	// Get Biometric Accounts
	$http({
		url: $rootScope.restAPIBaseUrl + 'accounts/1',
	 	method: 'GET'
	}).
	success(function(data, status, headers) {
	 	$scope.biometricAccounts = data;
	 	ctsBiometricas.accounts = data;
	}).
	error(function(data, status) {
		//put an error message in the scope
		$log.error('Error: '+data, status);
		$scope.errorMessage = 'operation failed';
	});

	// Get Credit Accounts
	$http({
		url: $rootScope.restAPIBaseUrl + 'accounts/2',
		method: 'GET'
	}).
	success(function(data, status, headers) {
		$scope.creditAccounts = data;
	}).
	error(function(data, status) {
		//put an error message in the scope
		$log.error('Error: '+data, status);
		$scope.errorMessage = 'operation failed';
	});

	 // Get Investment Accounts
	$http({
		url: $rootScope.restAPIBaseUrl + 'accounts/3',
	 	method: 'GET'
	}).
	success(function(data, status, headers) {
		$scope.investmentAccounts = data;
	}).
	error(function(data, status) {
		//put an error message in the scope
		$log.error('Error: '+data, status);
		$scope.errorMessage = 'operation failed';
	});
});
