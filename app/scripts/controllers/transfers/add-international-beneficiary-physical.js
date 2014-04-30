'use strict';

/**
 * Add beneficiary  controller
 */
angular.module('spaApp')
.controller('AddInternationalBeneficiaryPhysical', function($scope,$http,$location,$rootScope,$log) {
		$scope.beneficiaryAccount="#####";
		$scope.mainName="????";
		$scope.lastName="????";
		$scope.secondLastName="????";
		$scope.option="####";
		$scope.eMail="beneficiario@correo.com";
		$scope.alias="????";
		$scope.dailyLimit="$000,000.00";
		$scope.monthlyLimit="$000,000.00";
		$scope.address="????";
		$scope.city="????";
		$scope.country="????";
		$scope.coin="USD/EUR";
		$scope.beneficiaryBank="????";
		$scope.bankAddress="????";
		$scope.bankCity="????";
		$scope.bankCountry="????";

		$scope.x=true;

		$scope.switch = function(){
			$scope.x = false;
			
}
	});
