angular.module('spaApp')
  .factory('authorizeProviderFD',  ['AuthorizeServiceFD', '$q', function (AuthorizeServiceFD, $q) {

    return {

      checkLogin: function(user_login){
        var deferred = $q.defer();
        AuthorizeServiceFD.checkLogin(user_login).success(function(data){
          deferred.resolve(data);
        }).error(function(data, status){
          var result = {"data" : data, "status" : status};
          deferred.reject(result);
        });
        return deferred.promise;
      },

      register: function(params){
        var deferred = $q.defer();
        AuthorizeServiceFD.register(params).success(function(data, status, headers){
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
        AuthorizeServiceFD.forgetPassword(user_login).success(function(data){
          deferred.resolve(data);
        }).error(function(data, status){
          var result = {"data" : data, "status" : status};
          deferred.reject(result);
        });
        return deferred.promise;
      },

      forgetPasswordConfirmation: function(user_login, first_question_id, first_response, second_question_id, second_response, birth_date){
        var deferred = $q.defer();
        AuthorizeServiceFD.forgetPasswordConfirmation(user_login, first_question_id, first_response, second_question_id, second_response, birth_date).success(function(data){
          deferred.resolve(data);
        }).error(function(data, status){
          var result = {"data" : data, "status" : status};
          deferred.reject(result);
        });
        return deferred.promise;
      },

      logout: function(){
        var deferred = $q.defer();
        AuthorizeServiceFD.logout().success(function(data){
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
