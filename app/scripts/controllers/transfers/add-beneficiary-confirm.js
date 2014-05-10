'use strict';
/**
 * The connection controller
 */
angular.module('spaApp')
.controller('AddBeneficiaryConfirmCtrl', ['$scope','$http','$location','$rootScope','$log', function($scope,$http,$location,$rootScope,$log) {

	$scope.confirm=function(){
		$location.path('transfer/add/beneficiary/result');
	};

}]);
