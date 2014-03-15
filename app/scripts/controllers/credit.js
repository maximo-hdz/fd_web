'use strict';

angular.module('spaApp')
.controller('CreditCtrl', function($scope,$http,$location,$rootScope,$log,$stateParams) {
	
	$scope.account_id = $stateParams.account_id;

	$http({
		//send with $stateParams.account_id
		url: $rootScope.restAPIBaseUrl + 'accounts/credit.json',
		method: 'GET'
	}).
	success(function(data) {
		$scope.credit = data.credit;
	}).
	error(function(data, status) {
		$log.error('Error: '+data, status);
		$location.path( '/login' );
	});	
});