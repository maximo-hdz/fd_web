'use strict';

angular.module('spaApp')
  .factory('creditProvider',  ['$rootScope', 'creditService', '$q', function ($rootScope, creditService, $q) {

    return {

      getCreditDetail: function (sessionId,rowId) {
        var deferred = $q.defer();

        if(!$rootScope.creditDetail) {
          creditService.getCreditDetail(sessionId,rowId).success(function(data, status, headers){
            $rootScope.creditDetail = data.creditDetailOutput;
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
