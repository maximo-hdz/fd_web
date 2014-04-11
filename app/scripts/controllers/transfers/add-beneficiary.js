'use strict';

/**
 * Add beneficiary  controller
 */
angular.module('spaApp')
.controller('AddBeneficiaryCtrl', function($scope,$http,$location,$rootScope,$log) {
		$scope.tipo = 'fisica';
		$scope.$watch('tipo',function(){
			if($scope.tipo=='fisica'){
				$location.path('transfer/add/beneficiary/physical');
			}else{
				$location.path('transfer/add/beneficiary/moral');
			}
		});
	});
