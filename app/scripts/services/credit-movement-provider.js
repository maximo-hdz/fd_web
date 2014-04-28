'use strict';

angular.module('spaApp')
  .factory('creditMovementProvider',  ['$rootScope', 'CreditMovementService', '$q', function ($rootScope, CreditMovementService, $q) {

    return {

      getCreditMovement: function () {
        var deferred = $q.defer();

        if(!$rootScope.creditValue) {
          CreditMovementService.getCreditMovement().success(function(data, status, headers){

            //$rootScope.creditDue = data.respuesta.page;
            $rootScope.creditMovement = data.accounts

            deferred.resolve();
          }).error(function(data, status) {
            return deferred.reject("Error getting credit movement");
          });
        } else {
          deferred.resolve();
        }
        return deferred.promise;
      },
    

    };
}]);
