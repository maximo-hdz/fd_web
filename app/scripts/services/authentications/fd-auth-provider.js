'use strict';

angular.module('spaApp')
  .factory('authorizeProviderFD',  ['AuthorizeServiceFD', '$q', function (AuthorizeServiceFD, $q) {

    return {

      checkLogin: function(user_login){
        var deferred = $q.defer();
        AuthorizeServiceFD.checkLogin(user_login).success(function(data, status, headers){
          deferred.resolve(data);
        }).error(function(data, status){
          var result = {"data" : data, "status" : status};
          deferred.reject(result);
        });
        return deferred.promise;
      },

      register: function(user_login, current_password, new_password, with_token, new_condition_action, image, question1, response1, question2, response2, anti_phishing_statement){
        var deferred = $q.defer();
        AuthorizeServiceFD.register(user_login, current_password, new_password, with_token, new_condition_action, image, question1, response1, question2, response2, anti_phishing_statement).success(function(data, status, headers){
          var result = {"data" : data, "headers" : headers};
          deferred.resolve(result);
        }).error(function(data, status){
          var result = {"data" : data, "status" : status};
          deferred.reject(result);
        });
        return deferred.promise;
      },

      forgetPassword: function(user_login){
        var deferred = $q.defer();
        AuthorizeServiceFD.forgetPassword(user_login).success(function(data, status, headers){
          deferred.resolve(data);
        }).error(function(data, status){
          var result = {"data" : data, "status" : status};
          deferred.reject(result);
        });
        return deferred.promise;
      },

      forgetPasswordConfirmation: function(user_login, first_question_id, first_response, second_question_id, second_response, birth_date){
        var deferred = $q.defer();
        AuthorizeServiceFD.forgetPasswordConfirmation(user_login, first_question_id, first_response, second_question_id, second_response, birth_date).success(function(data, status, headers){
          deferred.resolve(data);
        }).error(function(data, status){
          var result = {"data" : data, "status" : status};
          deferred.reject(result);
        });
        return deferred.promise;
      },

      logout: function(){
        var deferred = $q.defer();
        AuthorizeServiceFD.logout().success(function(data, status, headers){
          deferred.resolve(data);
        }).error(function(data, status){
          var result = {"data" : data, "status" : status};
          deferred.reject(result);
        });
        return deferred.promise;
      }

    };
  }
]);
