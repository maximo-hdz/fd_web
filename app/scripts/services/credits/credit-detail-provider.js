'use strict';

angular.module('spaApp')
  .factory('creditDetailProvider',  ['$rootScope', 'CreditDetailService', '$q', function ($rootScope, CreditDetailService, $q) {

    return {

      getCreditDetail: function () {
        var deferred = $q.defer();

        if(!$rootScope.creditDetail) {
          CreditDetailService.getCreditDetail().success(function(data, status, headers){

            //$rootScope.creditDetail = data.respuesta.page;
            $rootScope.creditDetail = data.accounts

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
