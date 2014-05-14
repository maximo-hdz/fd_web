'use strict';

angular.module('spaApp')
.controller('SameBankCtrl', ['$scope', '$log', '$http','$location','$rootScope', 'sameBankProvider', function($scope, $log, $http,$location,$rootScope, sameBankProvider) {


	sameBankProvider.getSameBank().then(function(){
		console.log('Petition in same bank controller'+$rootScope.sameBankTransfer);
		$scope.same=$rootScope.sameBankTransfer;
		$scope.currencySymbol='$';

	});

	sameBankProvider.getAddBeneficiary().then(function(){
		console.log('Petition to getAddBeneficiary');
		$scope.beneficiary = $rootScope.sameBankAddBeneficiary;
	});


	sameBankProvider.getConfirmationBeneficiary().then(function(){
		console.log('Petition to getConfirmationBeneficiary');
		$scope.confirmation=$rootScope.sameBankConfirmation;
	});
	
}]);
