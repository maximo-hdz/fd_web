'use strict';

angular.module('spaApp')
  .service('Accounts',['$http','$rootScope', function ($http, $rootScope) {

  	this.getBiometricAccounts = function () {

    	$http({
    		url: $rootScope.restAPIBaseUrl + 'accounts/1',
    		method: 'GET'
    	});
  	}

  	this.getCreditAccounts = function () {
        $http({
            url: $rootScope.restAPIBaseUrl + 'accounts/2',
            method: 'GET'
        }).
        success(function(data, status, headers) {
            $scope.creditAccounts = data;
        }).
        error(function(data, status) {
            //put an error message in the scope
            $log.error('Error: '+data, status);
            $scope.errorMessage = 'operation failed';
        });
  	}

  	this.getInvestmentAccounts = function () {
        $http({
            url: $rootScope.restAPIBaseUrl + 'accounts/3',
            method: 'GET'
        }).
        success(function(data, status, headers) {
            $scope.investmentAccounts = data;
        }).
        error(function(data, status) {
            //put an error message in the scope
            $log.error('Error: '+data, status);
            $scope.errorMessage = 'operation failed';
        });

        $scope.logout=function(){
            $location.path( '/login' );
        }
  	}
}]);
