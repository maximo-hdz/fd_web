'use strict';

angular.module('spaApp')
  .factory('creditValueProvider',  ['$rootScope', 'CreditValueService', '$q', function ($rootScope, CreditValueService, $q) {

    return {

      getCreditValue: function () {
        var deferred = $q.defer();

        if(!$rootScope.creditValue) {
          CreditValueService.getCreditValue().success(function(data, status, headers){

            //$rootScope.creditValue = data.respuesta.page;
            $rootScope.creditValue = data.accounts

            deferred.resolve();
          }).error(function(data, status) {
            return deferred.reject("Error getting credit value date");
          });
        } else {
          deferred.resolve();
        }
        return deferred.promise;
      },
    

    };
}]);
