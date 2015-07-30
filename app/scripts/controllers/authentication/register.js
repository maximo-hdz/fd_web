'use strict';

angular.module('spaApp')

.controller('RegisterCtrl',['$scope', '$rootScope', 'authorizeProviderFD', 'dataAuth', '$location', '$window', 'api',
	function($scope, $rootScope, authorizeProviderFD, dataAuth, $location, $window, api) {

	$scope.selection = 0;
	$scope.data = dataAuth;
	$scope.dataRegister = {};

	$scope.register = function(step){
		//TODO Cambiar alerts por otra cosa
		if(step === 1){
			if(typeof $scope.dataRegister.password == 'undefined' || typeof $scope.dataRegister.new_password == 'undefined' || typeof $scope.dataRegister.confirm_password == 'undefined' ){
				$window.alert('Favor de llenar todos los campos');
				return;
			}
			if($scope.dataRegister.new_password !== $scope.dataRegister.confirm_password){
				$window.alert('Las contraseñas no coinciden');
				return;
			}
			$scope.selection = step;
		}else{
			if(typeof $scope.dataRegister.saludo == 'undefined'){
				$window.alert('Ingresa tu saludo secreto');
				return;
			}
			if(typeof $scope.dataRegister.image_id == 'undefined'){
				$window.alert('Selecciona una imagen');
				return;
			}
			$scope.selection = step;
		}
	}

	$scope.logout = function(){
		$location.path('/logout');
	}

	$scope.selectImage = function(id){
		$scope.dataRegister.image_id = id;
	}

	$scope.signup = function(){

		if(typeof $scope.dataRegister.question1 == 'undefined'){
			$window.alert('Selecciona la pregunta 1');
			return;
		}
		if(typeof $scope.dataRegister.response1 == 'undefined'){
			$window.alert('Ingresa la respuesta a la pregunta 1');
			return;
		}
		if($scope.dataRegister.question2 === $scope.dataRegister.question1 ){
			$window.alert('Selecciona dos preguntas distintas');
			return;
		}
		if(typeof $scope.dataRegister.question2 == 'undefined'){
			$window.alert('Selecciona la pregunta 2');
			return;
		}
		if(typeof $scope.dataRegister.response2 == 'undefined'){
			$window.alert('Ingresa la respuesta a la pregunta 2');
			return;
		}
		if(typeof $scope.dataRegister.terms == 'undefined' ){
			$window.alert('Acepta los términos y condiciones');
			return;
		}

		var new_condition_action = "N";
		if(typeof $scope.dataRegister['new_condition_action'] !== 'undefined') {
			if($scope.dataRegister['new_condition_action']){
				new_condition_action = "Y";
			}
		}
		authorizeProviderFD.register($scope.data.response.user_login, $scope.dataRegister.password, $scope.dataRegister.new_password, dataAuth.response.with_token, new_condition_action, $scope.dataRegister.image_id, $scope.dataRegister.question1.id, $scope.dataRegister.response1, $scope.dataRegister.question2.id, $scope.dataRegister.response2, $scope.dataRegister.saludo).then(
			function(result) {
				$window.alert('Registro Exitoso');
				/*$scope.CheckLogin = true;
				$rootScope.session_token = result.headers('X-AUTH-TOKEN');
				var data = result.data;
				$rootScope.last_access_date = data.last_access_date
				$rootScope.last_access_media = data.last_client_application_id;
				$rootScope.client_name = data.client_name;
				api.init();*/
				$location.path( '/login' );
			},
			function(error) {
				$scope.status = error;
			}
		);
	}

}]);
