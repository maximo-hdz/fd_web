'use strict';
/**
 * The connection controller
 */
angular.module('spaApp')
.controller('AddBeneficiaryResultCtrl', function($scope,$http,$location,$rootScope,$log) {

	$scope.send=function(){
		$location.path('transfer/add/beneficiary/send');
	};

	$scope.print=function(){
		$location.path('transfer/add/beneficiary/print');
	};

});
