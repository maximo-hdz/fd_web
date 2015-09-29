'use strict';

angular.module('spaApp')
.controller('LoginCtrl',['$scope', '$rootScope', '$location', 'authorizeProviderFD', 'api', '$http', 'dataAuth', 'timerService', 'errorHandler',
function($scope, $rootScope, $location, authorizeProviderFD, api, $http, dataAuth, timerService, errorHandler) {

	$scope.CheckLogin = true;
	$scope.logining = false;
	$scope.auth;
	$scope.warning = {};
	$scope.danger = {};
	$scope.invite = {};

	// Mobile OS evaluation
	if ( (/iPhone|iPod|iPad/).test(navigator.userAgent) ) {
		$scope.invite.show = true;
		$scope.invite.message = 'Descarga la aplicación Móvil desde la <a href="https://itunes.apple.com" target="_blank">App Store</a>';
	} else if ( (/Android/).test(navigator.userAgent) ) {
		$scope.invite.show = true;
		$scope.invite.message = 'Descarga la aplicación Móvil desde <a href="https://play.google.com/store" target="_blank">Google Play</a>';
	}

	$scope.checkLogin = function(){
		$scope.logining = true;
		authorizeProviderFD.checkLogin($scope.auth.user_login).then(
			function(data) {
				$scope.logining = false;
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
					dataAuth.data = data;
					dataAuth.response.user_login = $scope.auth.user_login;
					dataAuth.response.with_token = $scope.auth.with_token;
					$location.path( '/new' );
				}
			},
			function(error, status) {
				$scope.logining = false;
				errorHandler.setError(error);
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
		$scope.logining = true;
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
				$rootScope.core_notification = data.core_notification;
				api.init();
				timerService.start();
				$location.path( '/accounts' );
				$scope.logining = false;
			}
		).error(
			function(data, status) {
				$scope.logining = false;
				var result = {"data" : data, "status" : status};
				errorHandler.setError(result);
			}
		);
	};

	$scope.password = function(){
		$location.path( '/password' );
	}

	$scope.$on('displayError', function(event, error) {
		$scope.danger.show = true;
		$scope.danger.message = error.message;
	});

	$scope.$on('clearError', function(event) {
		$scope.danger.show = false;
		$scope.danger.message = '';
	});

}]);
