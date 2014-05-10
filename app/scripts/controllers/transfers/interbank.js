'use strict';

angular.module('spaApp')
.controller('InterbankCtrl', ['$scope', '$log', '$http', '$rootScope', 'interBankProvider', function($scope, $log, $http, $rootScope, interBankProvider ) {

	interBankProvider.getTransferInterBank().then(function(){
		$scope.interBank= $rootScope.interBank;
	});
}]);
