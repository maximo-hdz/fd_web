'use strict';

angular.module('spaApp')
.factory('accountsProviderFD',  ['accountsServiceFD', '$q', function (accountsServiceFD, $q) {

  return {

    getAccounts: function () {
      var deferred = $q.defer();
      
      accountsServiceFD.getAccounts().success(function(data, status, headers) {
        deferred.resolve( data.accounts );
      }).error(function(data, status) {
        var result = {'response' : data, 'status': status};
        deferred.reject(result);
      });

      return deferred.promise;
    },

    getAccountDetail: function(accountId) {
      var deferred = $q.defer();

      accountsServiceFD.getAccountsDetail(accountId).success(function(data, status, headers) {
        deferred.resolve(data);
      }).error(function(data, status) {
        var result = {'response' : data, 'status': status};
        deferred.reject(result);
      });

      return deferred.promise;
    },

    getTransactions: function(accountId, params) {
      var deferred = $q.defer();

      accountsServiceFD.getTransactions(accountId, params).success(function(data, status, headers) {
        deferred.resolve( data.transactions );
      }).error(function(data, status) {
        var result = {'response' : data, 'status': status};
        deferred.reject(result);
      });

      return deferred.promise;
    }

  };

}]);
