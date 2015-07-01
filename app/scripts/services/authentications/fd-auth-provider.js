'use strict';

angular.module('spaApp')
  .factory('authorizeProvider',  ['$rootScope', 'AuthorizeServiceFD', '$q', function ($rootScope, AuthorizeServiceFD, $q) {

    return {

      checkLogin: function(user_login, with_token){
        var deferred = $q.defer();
        AuthorizeService.checkLogin(user_login, with_token).success(function(data, status, headers){
          deferred.resolve(data);
        }).error(function(data, status){
          deferred.reject(status);
        });
        return deferred.promise ;
      },

      login: function(user_login, password, new_condition_action, with_token){
        var deferred = $q.defer();
        AuthorizeService.login(user_login, password, new_condition_action, with_token).success(function(data, status, headers){
          deferred.resolve(data);
        }).error(function(data, status){
          deferred.reject(status);
        });
        return deferred.promise ;
      },

      change_password: function(user_login, password, new_condition_action, with_token){
        var deferred = $q.defer();
        AuthorizeService.change_password(user_login, password, new_condition_action, with_token){
          deferred.resolve(data);
        }).error(function(data, status){
          deferred.reject(status);
        });
        return deferred.promise ;
      },

      register: function(user_login, password, with_token, new_condition_action, image, question1, response1, question2, response2){
        var deferred = $q.defer();
        AuthorizeService.register(user_login, password, with_token, new_condition_action, image, question1, response1, question2, response2){
          deferred.resolve(data);
        }).error(function(data, status){
          deferred.reject(status);
        });
        return deferred.promise ;
      },

      logout: function(){
        var deferred = $q.defer();
        AuthorizeService.logout(){
          deferred.resolve(data);
        }).error(function(data, status){
          deferred.reject(status);
        });
        return deferred.promise ;
      },

      forgetPassword: function(user_login){
        var deferred = $q.defer();
        AuthorizeService.forgetPassword(user_login){
          deferred.resolve(data);
        }).error(function(data, status){
          deferred.reject(status);
        });
        return deferred.promise ;
      },

      forgetPasswordConfirmation: function(user_login, first_question_id, first_response, second_question_id, second_response, birth_date){
        var deferred = $q.defer();
        AuthorizeService.forgetPasswordConfirmation(user_login, first_question_id, first_response, second_question_id, second_response, birth_date){
          deferred.resolve(data);
        }).error(function(data, status){
          deferred.reject(status);
        });
        return deferred.promise ;
      },
    };
  }
]);
