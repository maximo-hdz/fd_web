'use strict';

angular.module('spaApp')
.controller('InternationalCtrl',  function($scope, $log, $http,$location,$rootScope,internationalProvider) {


	internationalProvider.getTransferInternational().then(function(){
		console.log('data');
		$scope.trans = $rootScope.internationalTransfer;
	});

});
