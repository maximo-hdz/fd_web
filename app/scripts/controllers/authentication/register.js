angular.module('spaApp')

.controller('RegisterCtrl',['$scope', '$rootScope', 'authorizeProviderFD', 'dataAuth', '$location', 'api', 'errorHandler', 'ngDialog',
	function($scope, $rootScope, authorizeProviderFD, dataAuth, $location, api, errorHandler, ngDialog) {

	$scope.selection = 0;
	$scope.data = dataAuth;
	$scope.dataRegister = {};
	$scope.sending = false;
	$scope.warning = {};
	$scope.danger = {};
	$scope.warning.show = false;
	$scope.danger.show = false;

	$scope.saltar = function(step){
		if(step === $scope.selection){
			return;
		}

		if($scope.selection === 0){
			if($scope.register1.$invalid){
				$scope.warning.show = true;
				$scope.warning.message = '001';
				return;
			}
			if($scope.dataRegister.new_password.length <= 7 ){
				$scope.warning.show = true;
				$scope.warning.message = '002';
				return;
			}
			if($scope.dataRegister.new_password !== $scope.dataRegister.confirm_password){
				$scope.warning.show = true;
				$scope.warning.message = '003';
				return;
			}
			$scope.warning.show = false;
			$scope.selection = step;
			return;
		}

		if($scope.selection === 1){
			if($scope.register2.$invalid){
				$scope.warning.show = true;
				$scope.warning.message = '001';
				return;
			}
			if(typeof $scope.dataRegister.image_id === 'undefined'){
				$scope.warning.show = true;
				$scope.warning.message = '004';
				return;
			}
			$scope.warning.show = false;
			$scope.selection = step;
			return;
		}

		if($scope.selection === 2){
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
			$scope.warning.message = '005';
			return;
		}
		var new_condition_action = "N";
		if(typeof $scope.dataRegister['new_condition_action'] !== 'undefined' && $scope.dataRegister['new_condition_action']) {
			new_condition_action = "Y";
		}
		$scope.sending = true;
		var params = {};
		params.user_login = $scope.data.response.user_login;
		params.current_password = $scope.dataRegister.password;
		params.new_password = $scope.dataRegister.new_password;
		params.new_condition_action = new_condition_action;
		params.with_token = dataAuth.response.with_token;
		params.image = $scope.dataRegister.image_id;
		params.question1 = $scope.dataRegister.question1.id;
		params.response1 = $scope.dataRegister.response1;
		params.question2 = $scope.dataRegister.question2.id;
		params.response2 = $scope.dataRegister.response2;
		params.anti_phishing_statement = $scope.dataRegister.saludo;

		authorizeProviderFD.register(params).then(
			function(result) {
				var urlDoc = "<div class='contenido'><h4>AVISO</h4><p>Registro Exitoso</p></div><div class='contenido gris'><button ng-click='closeThisDialog();' class='w47'>Aceptar</button></div>";
				ngDialog.openConfirm({ template: urlDoc, showClose: false, plain: true, closeByNavigation: true }).then(function(){}, function(){
					$scope.CheckLogin = true;
					$rootScope.session_token = result.headers('X-AUTH-TOKEN');
					var data = result.data;
					$rootScope.last_access_date = data.last_access_date;
					$rootScope.last_access_media = data.last_client_application_id;
					$rootScope.client_name = data.client_name;
					api.init();
					$location.path( '/accounts' );
				});
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

	$scope.$on('clearError', function() {
		$scope.danger.show = false;
		$scope.danger.message = '';
	});

}]);
