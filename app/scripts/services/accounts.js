'use strict';

/**
* api initializer factory
*/

angular.module('spaApp')
.service('accountsService',['$http', function ($http) {
	this.getBiometricAccounts = function () {
		return $http.get('../app/json/account.json');
	};

	this.getCreditAccounts = function () {
		return $http.get('../app/json/account2.json');
	};

	this.getInvestmentAccounts = function () {
		return $http.get('../app/json/account3.json');
	};
}]);
