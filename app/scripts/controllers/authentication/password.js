'use strict';

angular.module('spaApp')
.controller('PasswordCtrl',['$scope', '$rootScope', '$location', 'authorizeProviderFD', '$window',
	function($scope, $rootScope, $location, authorizeProviderFD, $window) {

	$scope.pass = {};
	$scope.selection = 0;
	$scope.sending = false;

	$scope.forgetPassword = function(){
		if(typeof $scope.pass.user_login == 'undefined' ){
			$window.alert('Ingresa tu usuario');
			return;
		}
		$scope.sending = true;
		authorizeProviderFD.forgetPassword($scope.pass.user_login).then(
			function(data) {
				$scope.sending = false;
				$scope.selection = 1;
				$scope.pass.response = data;
			},
			function(error) {
				$scope.sending = false;
				$scope.status = error;
			}
		);
	}

	$scope.forgetPasswordConfirmation = function(){
		if(typeof $scope.pass.first_question_id == 'undefined'){
			$window.alert('Selecciona la pregunta 1');
			return;
		}
		if(typeof $scope.pass.first_response == 'undefined'){
			$window.alert('Ingresa la respuesta a la pregunta 1');
			return;
		}
		if($scope.pass.second_question_id === $scope.pass.first_question_id ){
			$window.alert('Selecciona dos preguntas distintas');
			return;
		}
		if(typeof $scope.pass.second_question_id == 'undefined'){
			$window.alert('Selecciona la pregunta 2');
			return;
		}
		if(typeof $scope.pass.second_response == 'undefined'){
			$window.alert('Ingresa la respuesta a la pregunta 2');
			return;
		}
		if(typeof $scope.pass.birth_date == 'undefined' ){
			$window.alert('Ingresa tu fecha de nacimiento');
			return;
		}
		$scope.sending = true;
		authorizeProviderFD.forgetPasswordConfirmation($scope.pass.user_login, $scope.pass.first_question_id.id, $scope.pass.first_response, $scope.pass.second_question_id.id, $scope.pass.second_response, $scope.pass.birth_date).then(
			function(data) {
				$scope.sending = false;
				$scope.selection = 2;
			},
			function(error) {
				$scope.sending = false;
				$scope.status = error;
			}
		);
	}

	$scope.logout = function(){
		$location.path('/logout');
	}

}]);
