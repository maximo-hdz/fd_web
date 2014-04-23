'use strict';

angular.module('spaApp')
.factory('biometricProvider',  ['$rootScope', 'biometricService', '$q', function ($rootScope, biometricService, $q) {
    // Service logic
    // ...

  // Public API here
  return {
    getBiometricTransacctionDetail: function () {
      var deferred = $q.defer();

      if(!$rootScope.biometricDetail) {
        console.log('getting biometric detail');
        biometricService.getBiometricTransacctionDetail().success(function(data, status, headers) {
          $rootScope.biometricDetail = data;
          deferred.resolve();
        }).error(function(data, status) {
          console.log(data, status);
          return deferred.reject('Error getting biometric detail');
        });
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }
  };
}]);
