'use strict';

/**
 * api initializer factory
 */

angular.module('spaApp')
.service('biometricService',['$http','$rootScope', function ($http, $rootScope) {
    this.getBiometricTransacctionDetail = function () {
        return $http.get('/json/biometric-detail.json');
    };
}]);
