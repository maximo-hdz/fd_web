'use strict';

angular.module('spaApp')
.controller('PasswordCtrl',['$scope', '$rootScope', '$location', 'authorizeProviderFD',
	function($scope, $rootScope, $location, authorizeProviderFD) {

	$scope.pass;
	$scope.selection = 0;

	$scope.forgetPassword = function(){
		authorizeProviderFD.forgetPassword($scope.pass.user_login).then(
			function(data) {
				$scope.selection = 1;
				$scope.pass.response = data;
			},
			function(error) {
				$scope.status = error;
			}
		);
	}

	$scope.forgetPasswordConfirmation = function(){
		authorizeProviderFD.forgetPasswordConfirmation($scope.pass.user_login, $scope.pass.first_question_id, $scope.pass.first_response, $scope.pass.second_question_id, $scope.pass.second_response, $scope.pass.birth_date).then(
			function(data) {
				$scope.selection = 2;
			},
			function(error) {
				$scope.status = error;
			}
		);
	}

	$scope.logout = function(){
		$location.path('/logout');
	}

}]);
