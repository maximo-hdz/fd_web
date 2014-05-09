'use strict';

/**
* api initializer factory
*/

angular.module('spaApp')
.service('accountsService',['$http', function ($http) {
	this.getBiometricAccounts = function () {
		return $http.get('/json/account.json');
	};

	this.getCreditAccounts = function () {
		return $http.get('/json/account2.json');
	};

	this.getInvestmentAccounts = function () {
		return $http.get('/json/account3.json');
	};
}]);
