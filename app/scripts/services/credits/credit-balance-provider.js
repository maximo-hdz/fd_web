'use strict';

angular.module('spaApp')
  .factory('creditBalanceProvider',  ['$rootScope', 'CreditBalanceService', '$q', function ($rootScope, CreditBalanceService, $q) {

    return {

      getCreditBalance: function () {
        var deferred = $q.defer();

        if(!$rootScope.creditBalance) {
          CreditBalanceService.getCreditBalance().success(function(data, status, headers){
            //$rootScope.creditDetail = data.respuesta.page;
            $rootScope.creditBalance = data;

            deferred.resolve();
          }).error(function(data, status) {
            return deferred.reject("Error getting credit balance");
          });
        } else {
          deferred.resolve();
        }
        return deferred.promise;
      },
    };
}]);
