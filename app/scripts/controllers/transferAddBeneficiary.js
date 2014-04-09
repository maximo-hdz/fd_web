'use strict';

angular.module('spaApp')
	.controller('transferAddBeneficiaryCtrl', function($scope,$location) {
		$scope.tipo = 'fisica';
		$scope.$watch('tipo',function(){
			if($scope.tipo=='fisica'){
				$location.path('transfer/add/beneficiary/physical');
			}else{
				$location.path('transfer/add/beneficiary/moral');
			}
		});
	});
