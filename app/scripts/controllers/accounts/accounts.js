'use strict';

/**
 * The accounts controller. Gets accounts passing auth parameters
 */
angular.module('spaApp')
.controller('AccountsCtrl',['$scope', '$location', 'accountsProviderFD', function($scope, $location, accountsProviderFD) {

	$scope.accounts = {};
	$scope.total = {};

	$scope.hideNotifications = false;

	/**
	 * Get accounts.
	 */
	accountsProviderFD.getAccounts().then(
		function(data) {
			$scope.accounts.saving = [];
			$scope.total.saving = 0;
			$scope.accounts.investment = [];
			$scope.total.investment = 0;
			$scope.accounts.credit = [];
			$scope.total.credit = 0;
			$scope.accounts.loan = [];
			$scope.total.loan = 0;
			//console.log( JSON.stringify(data) );

			for (var i = 0; i < data.length; i++) {
				switch ( data[i].account_type ) {
					case 'SAVING_ACCOUNT':
						$scope.accounts.saving.push( data[i] );
						$scope.total.saving += +data[i].available_balance;
						break;
					case 'INVESTMENT_ACCOUNT':
						$scope.accounts.investment.push( data[i] );
						$scope.total.investment += +data[i].amount_invested;
						break;
					case 'LOAN_ACCOUNT':
						$scope.accounts.loan.push( data[i] );
						$scope.total.loan += +data[i].min_payment;
						break;
					case 'CREDIT_ACCOUNT':
						$scope.accounts.credit.push( data[i] );
						$scope.total.credit += +data[i].min_payment;
						break;
					default:
						break;
				}
			}
		},
		function(error) {
			// TODO: handle error
			console.error( error );
		}
	);

	/**
	 *
	 */
	$scope.selectAccount = function(account) {
		$scope.hideNotifications = true;
		var accountId = account._account_id;
		console.info( account );
		var type = account.account_type;

		$scope.selectedAccountId = accountId;
		$scope.selectedAccount = account;

		switch (type) {
			case 'SAVING_ACCOUNT':
					$location.path('/accounts/'+ accountId +'/saving');
					break;
			case 'INVESTMENT_ACCOUNT':
					$location.path('/accounts/'+ accountId +'/investment');
					break;
			case 'LOAN_ACCOUNT':
					$location.path('/accounts/'+ accountId +'/loan');
					break;
			case 'CREDIT_ACCOUNT':
					$location.path('/accounts/'+ accountId +'/credit');
					break;
			default:
					break;
		}
	};

}]);
