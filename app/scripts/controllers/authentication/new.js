'use strict';

angular.module('spaApp')
.controller('NewCtrl',['$scope', '$rootScope', '$location', 'dataAuth', '$window', 'api', 'errorHandler', '$http',
	function($scope, $rootScope, $location, dataAuth, $window, api, errorHandler, $http) {

	$scope.data = dataAuth;
	$scope.pass = {};
	$scope.changing_pass = false;
	$scope.warning = {};
	$scope.danger = {};

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
		if($scope.pass.confirm != $scope.pass.password ){
			$scope.warning.show = true;
			$scope.warning.message = 'Las contraseñas no coinciden';
			return;
		}

		if($scope.pass.password.length <= 7){
			$scope.warning.show = true;
			$scope.warning.message = 'La nueva contraseña debe tener al menos 8 caracteres';
			return;
		}

		$scope.warning.show = false;
		$scope.changing_pass = true;


		$http({
			url: $rootScope.restAPIBaseUrl+'/userInformation/password',
			method: 'POST',
			header: {'X-BANK-TOKEN':5},
			data: JSON.stringify({
				"user_login": dataAuth.response.user_login,
				"password": $scope.pass.old,
				"client_application_id":"SPA",
				"new_condition_action": new_condition_action,
				"new_password" : $scope.pass.password,
				"confirmation_password" : $scope.pass.confirm
			})
		}).success(function(result){
				$window.alert('Contraseñas cambiada exitosamente');
				$location.path( '/login' );
		})
		.error(function(error){
				errorHandler.setError(error.status);
				$scope.changing_pass = false;
		});

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
