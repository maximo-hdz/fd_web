'use strict';

/**
 * The accounts controller. Gets accounts passing auth parameters
 */
angular.module('spaApp')
.controller('AccountsCtrl', function($scope,$http,$location,$rootScope,ctsBiometricas,accountsProvider) {
	$scope.client = 'Ricardo Montemayor Morales';
	$rootScope.titulo = 'Saldos';

    accountsProvider.getBiometricAccounts().then(
      function(data) {
 			$scope.biometricAccounts = $rootScope.biometricAccounts;
      }
    );

    accountsProvider.getCreditAccounts().then(
      function(data) {
 			$scope.creditAccounts = $rootScope.creditAccounts;
      }
    );

    accountsProvider.getInvestmentAccounts().then(
      function(data) {
 			$scope.investmentAccounts = $rootScope.investmentAccounts;
      }
    );

	/*Controller for module invertions   */
	$scope.inversiones=function(){
		$location.path('#investment' );
	}

	/* Credit Account */
	$scope.credit=function(account_id){
		$location.path( account_id + '/credit/transactions');
	}

	/* Mapping for view detail credit operation liquidated */
	$scope.detailCredit=function(account_id){
		$location.path(account_id+ '#/detailCredit');
	}

	/* Mapping for view detail operation pacted */
	$scope.detailCreditPacted=function(account_id){
		$location.path(account_id+ '#/detailCreditPacted');
	}

	$scope.detailCreditPactedOp=function(account_id){
		$location.path( account_id + '#/detailCreditPactedOp');
	}

});
