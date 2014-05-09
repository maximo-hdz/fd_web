'use strict';

/**
 * Add beneficiary  controller
 */
angular.module('spaApp')
.controller('AddBeneficiaryCtrl', ['$scope','$http','$location','$rootScope','$log', function($scope,$http,$location,$rootScope,$log) {
		$scope.tipo = 'fisica';
		$scope.$watch('tipo',function(){
			if($scope.tipo=='fisica'){
				$location.path('partials/transfer/add/beneficiary/physical');
			}else{
				$location.path('partials/transfer/add/beneficiary/moral');
			}
		});
	}]);
