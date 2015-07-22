'use strict';

angular.module('spaApp')

.controller('RegisterCtrl',['$scope', '$rootScope', 'authorizeProviderFD', 'dataAuth', '$location',
	function($scope, $rootScope, authorizeProviderFD, dataAuth, $location) {

	$scope.selection = 0;
	console.log(dataAuth);
	$scope.data = dataAuth;
	$scope.register;

	$scope.register = function(step){
		$scope.selection = step;
	}

	$scope.logout = function(){
		$location.path('/logout');
	}

}]);
