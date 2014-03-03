'use strict';

angular.module('spaApp')
.controller('CreditCtrl', function ($scope,$http,$log,$location,$stateParams) {
	
	$scope.account_id = $stateParams.account_id;

	$http({
		//Enviar con $stateParams.account_id
		url: 'http://127.0.0.1:9000/accounts/credit.json',
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