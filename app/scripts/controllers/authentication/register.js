'use strict';

angular.module('spaApp')

.controller('RegisterCtrl',['$scope', '$rootScope', 'authorizeProviderFD', 'dataAuth', '$location', '$window',
	function($scope, $rootScope, authorizeProviderFD, dataAuth, $location, $window) {

	$scope.selection = 0;
	$scope.data = dataAuth;
	$scope.dataRegister = {};

	$scope.register = function(step){

		//todo mejorar esta validación
		if(step === 1){
			if(typeof $scope.dataRegister.password == 'undefined' || typeof $scope.dataRegister.new_password == 'undefined' || typeof $scope.dataRegister.confirm_password == 'undefined' ){
				$window.alert('Favor de llenar todos los campos');
			}else{
				if($scope.dataRegister.new_password !== $scope.dataRegister.confirm_password){
					$window.alert('Las contraseñas no coinciden');
				}else{
					$scope.selection = step;
				}
			}
		}else{
			$scope.selection = step;
		}
	}

	$scope.logout = function(){
		$location.path('/logout');
	}

	$scope.selectImage = function(id){
		$scope.dataRegister.image_id = id;
		console.log('imagen seleccionada '+$scope.dataRegister.image_id )
	}

	$scope.signup = function(){
		var new_condition_action = "N";
		if(typeof $scope.dataRegister['new_condition_action'] !== 'undefined') {
			if($scope.dataRegister['new_condition_action']){
				new_condition_action = "Y";
			}
		}
		authorizeProviderFD.register($scope.data.response.user_login, $scope.dataRegister.password, $scope.dataRegister.new_password, dataAuth.response.with_token, new_condition_action, $scope.dataRegister.image_id, $scope.dataRegister.question1.id, $scope.dataRegister.response1, $scope.dataRegister.question2.id, $scope.dataRegister.response2, $scope.dataRegister.saludo).then(
			function(data) {
				console.log('register succesful');
				$location.path('/accounts');
			},
			function(error) {
				$scope.status = error;
			}
		);
	}

}]);
