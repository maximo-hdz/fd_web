'use strict';

angular.module('spaApp')
.controller('NewCtrl',['$scope', '$rootScope', '$location', 'authorizeProviderFD', 'dataAuth', '$window', 'api',
	function($scope, $rootScope, $location, authorizeProviderFD, dataAuth, $window, api) {

	$scope.data = dataAuth;
	$scope.pass = {};
	$scope.changing_pass = false;

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
		$scope.changing_pass = true;
		authorizeProviderFD.reset_password(dataAuth.response.user_login, $scope.pass.old, new_condition_action, $scope.pass.password, $scope.pass.confirm).then(
			function(result) {
				$window.alert('Contraseñas cambiada exitosamente');
				$location.path( '/login' );
			},
			function(error) {
				$window.alert('Error al cambiar la contraseña, inténtelo más tarde');
				$scope.changing_pass = false;
				$scope.status = error;
			}
		);
	}

}]);
