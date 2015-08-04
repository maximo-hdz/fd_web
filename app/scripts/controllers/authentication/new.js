'use strict';

angular.module('spaApp')
.controller('NewCtrl',['$scope', '$rootScope', '$location', 'authorizeProviderFD', 'dataAuth', '$window', 'api',
	function($scope, $rootScope, $location, authorizeProviderFD, dataAuth, $window, api) {

	$scope.data = dataAuth;
	$scope.pass = {};

	var new_condition_action = "N";
	if(typeof $scope.data.response['new_condition_action'] !== 'undefined') {
		if($scope.data.response['new_condition_action']){
			new_condition_action = "Y";
		}
	}

	$scope.logout = function(){
		$location.path('/logout');
	}

	$scope.change_password = function(){
		if(typeof $scope.pass.password == 'undefined'){
			$window.alert('Introduce tu contraseña');
			return;
		}
		if(typeof $scope.pass.confirm == 'undefined'){
			$window.alert('Confirma la contraseña');
			return;
		}
		if($scope.pass.confirm != $scope.pass.password ){
			$window.alert('Las contraseñas no coinciden');
			return;
		}
		authorizeProviderFD.change_password(dataAuth.response.user_login, $scope.pass.password, new_condition_action, dataAuth.response.with_token).then(
			function(result) {
				$scope.CheckLogin = true;
				console.log(result)
				$rootScope.session_token = result.headers('X-AUTH-TOKEN');
				var data = result.data;
				$rootScope.last_access_date = data.last_access_date
				$rootScope.last_access_media = data.last_client_application_id;
				$rootScope.client_name = data.client_name;
				api.init();
				$location.path( '/accounts' );
			},
			function(error) {
				$scope.status = error;
			}
		);
	}

}]);
