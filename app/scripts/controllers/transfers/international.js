'use strict';

angular.module('spaApp')
.controller('InternationalCtrl',  ['$scope', '$log', '$http','$location','$rootScope','internationalProvider', function($scope, $log, $http,$location,$rootScope,internationalProvider) {


	internationalProvider.getTransferInternational().then(function(){
		
		$scope.transfer = $rootScope.internationalTransfer;
	});

}]);
