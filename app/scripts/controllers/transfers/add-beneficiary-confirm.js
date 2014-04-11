'use strict';
/**
 * The connection controller
 */
angular.module('spaApp')
.controller('AddBeneficiaryConfirmCtrl', function($scope,$http,$location,$rootScope,$log) {

	$scope.confirm=function(){
		$location.path('transfer/add/beneficiary/result');
	};

});
