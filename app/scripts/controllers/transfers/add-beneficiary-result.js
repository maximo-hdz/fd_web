'use strict';
/**
 * The connection controller
 */
angular.module('spaApp')
.controller('AddBeneficiaryResultCtrl', ['$scope','$http','$location','$rootScope','$log', function($scope,$http,$location,$rootScope,$log) {

	$scope.send=function(){
		$location.path('transfer/add/beneficiary/send');
	};

	$scope.print=function(){
		$location.path('transfer/add/beneficiary/print');
	};

}]);
