'use strict';

angular.module('spaApp')
.controller('LoginCtrl',function ($scope,$location,AuthenticationService) {
	/**
	 * the login function connect the Rest-API: if the response status is OK, redirect to route "homePage",
	 * else put an error message in the scope
	 */
	 $scope.login=function(username,password){
	 	AuthenticationService.login(username,password)
	 	.then(function(data){
	 		$location.path('/accounts');
	 	}, function(error){
	 		$scope.errorMessage = 'Login failed';
	 		$scope.status = error;
	 	});
	 };
});
