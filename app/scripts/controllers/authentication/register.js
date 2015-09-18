'use strict';

angular.module('spaApp')

.controller('RegisterCtrl',['$scope', '$rootScope', 'authorizeProviderFD', 'dataAuth', '$location', '$window', 'api', 'errorHandler',
	function($scope, $rootScope, authorizeProviderFD, dataAuth, $location, $window, api, errorHandler) {

	$scope.selection = 0;
	$scope.data = dataAuth;
	$scope.dataRegister = {};
	$scope.sending = false;
	$scope.warning = {};
	$scope.danger = {};
	$scope.warning.show = false;
	$scope.danger.show = false;

	$scope.saltar = function(step){
		if(step == $scope.selection){
			return;
		}

		if($scope.selection == 0){
			if($scope.register1.$invalid){
				$scope.warning.show = true;
				$scope.warning.message = 'Favor de llenar los campos requeridos';
				return;
			}
			if($scope.dataRegister.new_password.length <= 7 ){
				$scope.warning.show = true;
				$scope.warning.message = 'La nueva contraseña debe tener al menos 8 caracteres';
				return;
			}
			if($scope.dataRegister.new_password !== $scope.dataRegister.confirm_password){
				$scope.warning.show = true;
				$scope.warning.message = 'Las contraseñas no coinciden';
				return;
			}
			$scope.warning.show = false;
			$scope.selection = step;
			return;
		}

		if($scope.selection == 1){
			if($scope.register2.$invalid){
				$scope.warning.show = true;
				$scope.warning.message = 'Favor de llenar los campos requeridos';
				return;
			}
			if(typeof $scope.dataRegister.image_id == 'undefined'){
				$scope.warning.show = true;
				$scope.warning.message = 'Selecciona una imagen';
				return;
			}
			$scope.warning.show = false;
			$scope.selection = step;
			return;
		}

		if($scope.selection == 2){
			$scope.selection = step;
			return;
		}

	}

	$scope.logout = function(){
		$location.path('/logout');
	}

	$scope.selectImage = function(id){
		$scope.dataRegister.image_id = id;
	}

	$scope.signup = function(){
		if($scope.dataRegister.question2 === $scope.dataRegister.question1 ){
			$scope.warning.show = true;
			$scope.warning.message = 'Selecciona dos preguntas distintas';
			return;
		}
		var new_condition_action = "N";
		if(typeof $scope.dataRegister['new_condition_action'] !== 'undefined') {
			if($scope.dataRegister['new_condition_action']){
				new_condition_action = "Y";
			}
		}
		$scope.sending = true;
		authorizeProviderFD.register($scope.data.response.user_login, $scope.dataRegister.password, $scope.dataRegister.new_password, dataAuth.response.with_token, new_condition_action, $scope.dataRegister.image_id, $scope.dataRegister.question1.id, $scope.dataRegister.response1, $scope.dataRegister.question2.id, $scope.dataRegister.response2, $scope.dataRegister.saludo).then(
			function(result) {
				$window.alert('Registro Exitoso');
				$scope.CheckLogin = true;
				$rootScope.session_token = result.headers('X-AUTH-TOKEN');
				var data = result.data;
				$rootScope.last_access_date = data.last_access_date
				$rootScope.last_access_media = data.last_client_application_id;
				$rootScope.client_name = data.client_name;
				api.init();
				$location.path( '/accounts' );
			},
			function(error) {
				$scope.sending = false;
				errorHandler.setError(error.status);
			}
		);
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
