'use strict';

angular.module('spaApp')
	.service('AuthorizeServiceFD',['$http','$rootScope', function($http, $rootScope) {

		this.checkLogin = function(user_login, with_token){
			return $http({
					url: $rootScope.restAPIBaseUrl+'/checkLogin',
					method: 'POST',
					data: JSON.stringify({
						'user_login': user_login,
						'with_token': with_token,
						'client_application_id': 'SPA'
					})
			});
		}

		this.change_password = function(user_login, password, new_condition_action, with_token){
			return $http({
					url: $rootScope.restAPIBaseUrl+'/login',
					method: 'POST',
					data: JSON.stringify({
						"user_login": user_login,
						"password": password,
						"client_application_id":"SPA",
						"new_condition_action": new_condition_action,
						"with_token" : with_token,
						"post_login_action" : "change_password"
					})
			});
		}

		this.register = function(user_login, password, with_token, new_condition_action, image, question1, response1, question2, response2){
			return $http({
					url: $rootScope.restAPIBaseUrl+'/login',
					method: 'POST',
					data: JSON.stringify({
						"user_login": user_login,
						"password": password,
						"client_application_id":"SPA",
						"new_condition_action": new_condition_action,
						"with_token" : with_token,
						"post_login_action" : "login_registro",
						"image" : image,
						"question1" : question1,
						"response1" : response1,
						"question2" : question2,
						"response2" : response2
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
