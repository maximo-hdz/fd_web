'use strict';

angular.module('spaApp')

.controller('RegisterCtrl',['$scope', '$rootScope', 'authorizeProviderFD', 'dataAuth', '$location',
	function($scope, $rootScope, authorizeProviderFD, dataAuth, $location) {

	$scope.selection = 0;
	$scope.data = dataAuth;
	$scope.dataRegister = {};

	$scope.register = function(step){
		$scope.selection = step;
	}

	$scope.logout = function(){
		$location.path('/logout');
	}

	$scope.selectImage = function(id){
		$scope.dataRegister.image_id = id;
	}

	$scope.signup = function(){

		$scope.data.data.questions.forEach(function(question, index){
			if(index === 0){
				$scope.dataRegister.question1 = question.id;
				$scope.dataRegister.response1 = question.resp;
			}
			if(index === 1){
				$scope.dataRegister.question2 = question.id;
				$scope.dataRegister.response2 = question.resp;
			}
		});

		authorizeProviderFD.register($scope.dataRegister.user_login, $scope.dataRegister.password, dataAuth.response.with_token, 'N', $scope.dataRegister.image_id, $scope.dataRegister.question1, $scope.dataRegister.response1, $scope.dataRegister.question2, $scope.dataRegister.response2).then(
			function(data) {
				console.log('register succesful');
				$location.path('/logout');
			},
			function(error) {
				$scope.status = error;
			}
		);
	}

}]);
