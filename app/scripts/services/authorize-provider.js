'use strict';

angular.module('spaApp')
  .factory('authorizeProvider',  ['$rootScope', 'AuthorizeService', '$q', function ($rootScope, AuthorizeService, $q) {

    return {

      getAuthorizeOp: function () {
        var deferred = $q.defer();

        if(!$rootScope.authorizeOp) {
          AuthorizeService.getAuthorizeOp().success(function(data, status, headers){
            $rootScope.authorizeOp = data.accounts;
            deferred.resolve();
          }).error(function(data, status) {
            return deferred.reject("Error getting authorize operations");
          });
        } else {
          deferred.resolve();
        }
        return deferred.promise;
      },


      getAuthorizeMod: function () {
        var deferred = $q.defer();

        if(!$rootScope.authorizeMod) {
          AuthorizeService.getAuthorizeMod().success(function(data, status, headers){
            $rootScope.authorizeMod = data.accounts;
            deferred.resolve();
          }).error(function(data, status) {
            return deferred.reject("Error getting authorize modifications");
          });
        } else {
          deferred.resolve();
        }
        return deferred.promise;
      },

    };
  }
]);
