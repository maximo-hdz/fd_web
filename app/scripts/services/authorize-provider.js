'use strict';

angular.module('spaApp')
  .factory('authorizeProvider',  ['$rootScope', 'AuthorizeService', '$q', function ($rootScope, AuthorizeService, $q) {

    return {

      getAuthorize: function () {
        var deferred = $q.defer();

        if(!$rootScope.authorize) {
          AuthorizeService.getAuthorize().success(function(data, status, headers){
            $rootScope.authorize = data.accounts;
            deferred.resolve();
          }).error(function(data, status) {
            return deferred.reject("Error getting credit detail");
          });
        } else {
          deferred.resolve();
        }
        return deferred.promise;
      },
    };
}]);
