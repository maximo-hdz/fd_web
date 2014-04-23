'use strict';

/**
 * api initializer factory
 */

angular.module('spaApp')
.service('accountsService',['$http','$rootScope', function ($http, $rootScope) {
    this.getBiometricAccounts = function () {
        return $http.get('/json/account.json');
    };

    this.getCreditAccounts = function (accountId,numPage, size) {
        return $http.get('/json/account2.json');
    };

    this.getInvestmentAccounts = function (accountId,numPage, size) {
        return $http.get('/json/account3.json');
    };
}]);
