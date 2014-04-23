'use strict';

angular.module('spaApp')
.factory('accountsProvider',  ['$rootScope', 'accountsService', '$q', function ($rootScope, accountsService, $q) {
    // Service logic
    // ...

  // Public API here
  return {
    getBiometricAccounts: function () {
      var deferred = $q.defer();

      if(!$rootScope.biometricAccounts) {
        console.log('getting accounts');
        accountsService.getBiometricAccounts().success(function(data, status, headers) {
          $rootScope.biometricAccounts = data;
          deferred.resolve();
        }).error(function(data, status) {
          console.log(data, status);
          return deferred.reject("Error getting biometric Accounts");
        });
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }
  };
}]);
