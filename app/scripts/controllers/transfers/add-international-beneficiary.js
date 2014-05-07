'use strict';

/**
 * Add beneficiary  controller
 */
angular.module('spaApp')
.controller('AddInternationalBeneficiary', function($scope,$http,$location,$rootScope,$log) {
		$scope.tipo = 'fisica';

		$scope.$watch('tipo',function(){
			if($scope.tipo=='fisica'){
				$location.path('transfer/AddBeneficiaryInternational/AddBeneficiaryInternationalPhysical');
			}else{
				$location.path('transfer/AddBeneficiaryInternational/AddBeneficiaryInternationalMoral');
				
			}
		});

	});
