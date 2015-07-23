'use strict';

angular.module('spaApp')
  .factory('authorizeProviderFD',  ['AuthorizeServiceFD', '$q', function (AuthorizeServiceFD, $q) {

    return {

      checkLogin: function(user_login, with_token){
        var deferred = $q.defer();
        AuthorizeServiceFD.checkLogin(user_login, with_token).success(function(data, status, headers){
          deferred.resolve(data);
        }).error(function(data, status){
          deferred.reject(status);
        });
        return deferred.promise;
      },

      change_password: function(user_login, password, new_condition_action, with_token){
        var deferred = $q.defer();
        AuthorizeServiceFD.change_password(user_login, password, new_condition_action, with_token).success(function(data, status, headers){
          deferred.resolve(data);
        }).error(function(data, status){
          deferred.reject(status);
        });
        return deferred.promise;
      },

      register: function(user_login, password, with_token, new_condition_action, image, question1, response1, question2, response2){
        var deferred = $q.defer();
        AuthorizeServiceFD.register(user_login, password, with_token, new_condition_action, image, question1, response1, question2, response2).success(function(data, status, headers){
          deferred.resolve(data);
        }).error(function(data, status){
          deferred.reject(status);
        });
        return deferred.promise;
      },

      forgetPassword: function(user_login){
        var deferred = $q.defer();
        AuthorizeServiceFD.forgetPassword(user_login).success(function(data, status, headers){
          deferred.resolve(data);
        }).error(function(data, status){
          deferred.reject(status);
        });
        return deferred.promise;
      },

      forgetPasswordConfirmation: function(user_login, first_question_id, first_response, second_question_id, second_response, birth_date){
        var deferred = $q.defer();
        AuthorizeServiceFD.forgetPasswordConfirmation(user_login, first_question_id, first_response, second_question_id, second_response, birth_date).success(function(data, status, headers){
          deferred.resolve(data);
        }).error(function(data, status){
          deferred.reject(status);
        });
        return deferred.promise;
      },

      logout: function(){
        var deferred = $q.defer();
        AuthorizeServiceFD.logout().success(function(data, status, headers){
          deferred.resolve(data);
        }).error(function(data, status){
          deferred.reject(status);
        });
        return deferred.promise;
      }

    };
  }
]);