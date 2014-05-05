'use strict';

angular.module('spaApp')
.factory('accountsProvider',  ['$rootScope', 'accountsService', '$q', function ($rootScope, accountsService, $q) {

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
          return deferred.reject('Error getting biometric Accounts');
        });
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    },
    getBiometricPaged: function(){
      if(!$rootScope.biometricPaged) {
        console.log('Paged accounts');
        accountsService.getBiometricPaged().success(function(data, status, headers) {
          $rootScope.biometricAccountsPaged = data;
          deferred.resolve();
        }).error(function(data, status) {
          console.log(data, status);
          return deferred.reject("Error getting biometric pagined");
        });
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    },
    getCreditAccounts: function () {
      var deferred = $q.defer();

      if(!$rootScope.creditAccounts) {
        console.log('getting credit accounts');
        accountsService.getCreditAccounts().success(function(data, status, headers) {
          $rootScope.creditAccounts = data;
          deferred.resolve();
        }).error(function(data, status) {
          console.log(data, status);
          return deferred.reject('Error getting credit Accounts');
        });
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    },
    getInvestmentAccounts: function () {
      var deferred = $q.defer();

      if(!$rootScope.investmentAccounts) {
        console.log('getting investment accounts');
        accountsService.getInvestmentAccounts().success(function(data, status, headers) {
          $rootScope.investmentAccounts = data;
          deferred.resolve();
        }).error(function(data, status) {
          console.log(data, status);
          return deferred.reject('Error getting investment Accounts');
        });
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    },
  };
}]);
