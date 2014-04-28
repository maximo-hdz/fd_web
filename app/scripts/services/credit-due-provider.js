'use strict';

angular.module('spaApp')
  .factory('creditDueProvider',  ['$rootScope', 'CreditDueService', '$q', function ($rootScope, CreditDueService, $q) {

    return {

      getCreditDue: function () {
        var deferred = $q.defer();

        if(!$rootScope.creditValue) {
          CreditDueService.getCreditDue().success(function(data, status, headers){

            //$rootScope.creditDue = data.respuesta.page;
            $rootScope.creditDue = data.accounts

            deferred.resolve();
          }).error(function(data, status) {
            return deferred.reject("Error getting credit due date");
          });
        } else {
          deferred.resolve();
        }
        return deferred.promise;
      },
    

    };
}]);
