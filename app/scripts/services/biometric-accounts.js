'use strict';

/**
 * api initializer factory
 */

angular.module('spaApp')
 .service('biometricService',['$http', function ($http) {
	this.getBiometricTransacctionDetail = function () {
		return $http.get('/json/biometric-detail.json');
	};
}]);
