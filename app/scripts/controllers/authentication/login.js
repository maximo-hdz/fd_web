'use strict';

angular.module('spaApp')
.controller('LoginCtrl',['$scope', '$rootScope', '$location', 'authorizeProviderFD', 'api', '$http', 'dataAuth',
	function($scope, $rootScope, $location, authorizeProviderFD, api, $http, dataAuth) {

	$scope.CheckLogin = true;
	$scope.auth;

	$scope.checkLogin = function(){
		authorizeProviderFD.checkLogin($scope.auth.user_login).then(
			function(data) {
				$scope.auth.with_token = data.role_id===1?'Y':'N';
				if(data.post_login_action === 'login'){
					$scope.CheckLogin = false;
					$scope.auth.response = data;
				}else if(data.post_login_action === 'register'){
					dataAuth.data = data;
					dataAuth.response.user_login = $scope.auth.user_login;
					dataAuth.response.with_token = $scope.auth.with_token;
					$location.path( '/register' );
				}else if(data.post_login_action === 'change_password'){
					//TODO change password
				}
			},
			function(error) {
				$scope.status = error;
			}
		);
	}

	$scope.login = function(){
		var new_condition_action = "N";
		if(typeof $scope.auth['new_condition_action'] !== 'undefined') {
			if($scope.auth['new_condition_action']){
				new_condition_action = "Y";
			}
		}
		$http({
			url: $scope.restAPIBaseUrl + '/login',
			method: 'POST',
			data: JSON.stringify({
				"user_login": $scope.auth.user_login,
				"client_application_id" : "SPA",
				"password": $scope.auth.password,
				"new_condition_action": new_condition_action,
				"with_token" : $scope.auth.with_token,
				"post_login_action" : "login"
			})
		}).success(
			function(data, status, headers) {
				$scope.CheckLogin = true;
				var token = headers('X-AUTH-TOKEN');
				$rootScope.session_token = token;
				$rootScope.last_access_date = data.last_access_date
				$rootScope.last_access_media = data.last_client_application_id;
				$rootScope.client_name = data.client_name;
				api.init();
				$location.path( '/accounts' );
			}
		).error(
			function(errorObject, status) {
				$scope.status = error;
			}
		);
	};

	$scope.password = function(){
		$location.path( '/password' );
	}

	$scope.map = function(){
		$location.path( '/map' );
	}

}]);
