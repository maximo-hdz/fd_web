'use strict';

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

		this.register = function(user_login, current_password, new_password, with_token, new_condition_action, image, question1, response1, question2, response2, anti_phishing_statement){
			return $http({
					url: $rootScope.restAPIBaseUrl+'/login',
					method: 'POST',
					data: JSON.stringify({
						"user_login": user_login,
						"password": current_password,
						"new_password": new_password,
						"client_application_id":"SPA",
						"new_condition_action": new_condition_action,
						"with_token" : with_token,
						"post_login_action" : "register",
						"image_id" : image,
						"first_question_id" : question1,
						"first_response" : response1,
						"second_question_id" : question2,
						"second_response" : response2,
						"anti_phishing_statement": anti_phishing_statement
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
