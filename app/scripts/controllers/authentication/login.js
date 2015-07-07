'use strict';

angular.module('spaApp')
.controller('LoginCtrl',['$scope', '$rootScope', '$location', 'authorizeProviderFD', function($scope, $rootScope, $location, authorizeProviderFD) {

	$scope.CheckLogin = true;
	$scope.auth;

	$scope.checkLogin = function(){
		authorizeProviderFD.checkLogin($scope.auth.user_login, $scope.auth.with_token).then(
			function(data) {
				$scope.CheckLogin = false;
				$scope.auth.response = data;
			}
		);
	}

	$scope.login=function(){
		authorizeProviderFD.login($scope.auth.user_login, $scope.auth.password, 'N', $scope.auth.with_token).then(
			function(data) {
				$scope.CheckLogin = true;
				$scope.myData = data;
			}
		);
	};

}]);
