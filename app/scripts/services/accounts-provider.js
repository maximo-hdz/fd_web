'use strict';

angular.module('spaApp')
  .factory('accountsProvider', function ($rootScope, accountsService, $q) {
    // Service logic
    // ...

    // Public API here
    return {
      getBiometricAccounts: function () {
          var deferred = $q.defer();

          accounts.getBiometricAccounts.sucess(function(data, status, headers) {
          $rootScope.biometricAccounts = data;
        }).error(function(data, status) {
                console.log(data, status);
        });
        return deferred.promise;
      }
    };
  });
