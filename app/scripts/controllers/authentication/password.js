angular.module('spaApp')
.controller('PasswordCtrl',['$scope', '$rootScope', '$location', 'authorizeProviderFD', 'ngDialog', 'errorHandler',
	function($scope, $rootScope, $location, authorizeProviderFD, ngDialog, errorHandler) {

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
			var urlDoc = "<div class='contenido'><h4>AVISO</h4><p>Selecciona dos preguntas distintas</p></div><div class='contenido gris'><button ng-click='closeThisDialog();' class='w47'>Aceptar</button></div>";
			ngDialog.open({ template: urlDoc, showClose: false, plain: true, closeByNavigation: true });
			return;
		}
		$scope.sending = true;
		authorizeProviderFD.forgetPasswordConfirmation($scope.pass.user_login, $scope.pass.first_question_id.id, $scope.pass.first_response, $scope.pass.second_question_id.id, $scope.pass.second_response, 				$scope.pass.birth_date.split('/')[2]+'-'+$scope.pass.birth_date.split('/')[0]+'-'+$scope.pass.birth_date.split('/')[1]).then(
			function() {
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

	$scope.$on('clearError', function() {
		$scope.danger.show = false;
		$scope.danger.message = '';
	});

}]);
