'use strict';
/**
 * The connection controller
 */
angular.module('spaApp')
.controller('AddBeneficiaryCtrl', function($scope,$http,$location,$rootScope,$log) {

	$scope.addBeneficiary=function(){
		$location.path('transfer/add/beneficiary/physical');
	};

});
