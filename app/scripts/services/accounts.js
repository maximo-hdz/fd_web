'use strict';

/**
 * api initializer factory
 */

angular.module('spaApp')
.service('accountsService',['$http','$rootScope', function ($http, $rootScope) {
    this.getBiometricAccounts = function () {
        return $http.get($rootScope.restAPIBaseUrl+'accounts/1');
    };

    this.getCreditAccounts = function (accountId,numPage, size) {
        return $http.get($rootScope.restAPIBaseUrl+'accounts/2');
    };

    this.getInvestmentAccounts = function (accountId,numPage, size) {
        return $http.get($rootScope.restAPIBaseUrl+'accounts/3');
    };
}]);
