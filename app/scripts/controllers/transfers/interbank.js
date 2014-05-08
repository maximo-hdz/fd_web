'use strict';

angular.module('spaApp')
.controller('InterbankCtrl', function($scope, $log, $http, $rootScope, interBankProvider ) {

	interBankProvider.getTransferInterBank().then(function(){
		$scope.interBank= $rootScope.interBank;
	});
});
