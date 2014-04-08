'use strict';
/**
 * The connection controller
 */
angular.module('spaApp')
.controller('transferAddBeneficiaryCtrl', function($scope,$http,$location,$rootScope,$log) {

	$scope.addBeneficiary=function(){
		$location.path('transfer/add/beneficiary/confirm');
	};

});
