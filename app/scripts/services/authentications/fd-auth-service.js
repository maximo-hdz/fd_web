angular.module('spaApp')
	.service('AuthorizeServiceFD',['$http','$rootScope', function($http, $rootScope) {

		this.checkLogin = function(user_login){
			return $http({
					url: $rootScope.restAPIBaseUrl+'/checkLogin',
					method: 'POST',
					data: JSON.stringify({
						'user_login': user_login,
						'client_application_id': 'SPA'
					})
			});
		}

		this.register = function(params){
			return $http({
					url: $rootScope.restAPIBaseUrl+'/login',
					method: 'POST',
					data: JSON.stringify({
						"user_login": params.user_login,
						"password": params.current_password,
						"new_password": params.new_password,
						"client_application_id":"SPA",
						"new_condition_action": params.new_condition_action,
						"with_token" : params.with_token,
						"post_login_action" : "register",
						"image_id" : params.image,
						"first_question_id" : params.question1,
						"first_response" : params.response1,
						"second_question_id" : params.question2,
						"second_response" : params.response2,
						"anti_phishing_statement": params.anti_phishing_statement
					})
			});
		}

		this.forgetPassword = function(user_login){
			return $http({
					url: $rootScope.restAPIBaseUrl+'/unlockPasswordPrerequest',
					method: 'POST',
					data: JSON.stringify({
						'user_login': user_login,
						'client_application_id': 'SPA'
					})
			});
		}

		this.forgetPasswordConfirmation = function(user_login, first_question_id, first_response, second_question_id, second_response, birth_date){
			return $http({
					url: $rootScope.restAPIBaseUrl+'/unlockPasswordRequest',
					method: 'POST',
					data: JSON.stringify({
						"user_login" : user_login,
						"client_application_id":"SPA",
						"first_question_id": first_question_id,
						"first_response": first_response,
						"second_question_id": second_question_id,
						"second_response": second_response,
						"birth_date": birth_date
					})
			});
		}

		this.logout = function(){
			return $http({
					url: $rootScope.restAPIBaseUrl+'/logout',
					method: 'GET'
			});
		}

	}
]);
