'use strict';

angular.module('spaApp')

.controller('LoginCtrl',['$scope', '$rootScope', '$location', 'authorizeProviderFD', 'api', '$http',
	function($scope, $rootScope, $location, authorizeProviderFD, api, $http) {

	$scope.CheckLogin = true;
	$scope.auth;

	$scope.checkLogin = function(){
		authorizeProviderFD.checkLogin($scope.auth.user_login, $scope.auth.with_token).then(
			function(data) {
				$scope.CheckLogin = false;
				$scope.auth.response = data;
			},
			function(error) {
				$scope.status = error;
			}
		);
	}

	$scope.login = function(){

		$http({
			url: $scope.restAPIBaseUrl + '/login',
			method: 'POST',
			data: JSON.stringify({
				"user_login": $scope.auth.user_login,
				"client_application_id" : "SPA",
				"password": $scope.auth.password,
				"new_condition_action": 'N',
				"with_token" : $scope.auth.with_token,
				"post_login_action" : "login"
			})
		}).success(
			function(data, status, headers) {

				console.log(data);
				console.log(status);
				console.log(headers);

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

}]);
