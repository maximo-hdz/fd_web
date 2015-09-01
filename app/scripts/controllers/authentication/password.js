'use strict';

angular.module('spaApp')
.controller('PasswordCtrl',['$scope', '$rootScope', '$location', 'authorizeProviderFD', '$window', 'errorHandler',
	function($scope, $rootScope, $location, authorizeProviderFD, $window, errorHandler) {

	$scope.pass = {};
	$scope.selection = 0;
	$scope.sending = false;
	$scope.warning = {};
	$scope.danger = {};

	$scope.forgetPassword = function(){
		$scope.sending = true;
		authorizeProviderFD.forgetPassword($scope.pass.user_login).then(
			function(data) {
				$scope.sending = false;
				$scope.selection = 1;
				$scope.pass.response = data;
			},
			function(error) {
				$scope.sending = false;
				errorHandler.setError(error.status);
			}
		);
	}

	$scope.forgetPasswordConfirmation = function(){
		if($scope.pass.second_question_id === $scope.pass.first_question_id ){
			$window.alert('Selecciona dos preguntas distintas');
			return;
		}
		$scope.sending = true;
		authorizeProviderFD.forgetPasswordConfirmation($scope.pass.user_login, $scope.pass.first_question_id.id, $scope.pass.first_response, $scope.pass.second_question_id.id, $scope.pass.second_response, 				$scope.pass.birth_date.split('/')[2]+'-'+$scope.pass.birth_date.split('/')[0]+'-'+$scope.pass.birth_date.split('/')[1]).then(
			function(data) {
				$scope.sending = false;
				$scope.selection = 2;
			},
			function(error) {
				$scope.sending = false;
				errorHandler.setError(error.status);
			}
		);
	}

	$scope.logout = function(){
		$location.path('/logout');
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
