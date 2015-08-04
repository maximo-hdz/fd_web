'use strict';

/**
 * The accounts controller. Gets accounts passing auth parameters
 */
angular.module('spaApp')
.controller('AccountsCtrl',['$scope', '$location', 'accountsProviderFD', function($scope, $location, accountsProviderFD) {

	// For searching purposes
	var params = {};
	params.numPage = 0;
	params.size = 100;
	// To make a comparison between today's date and the details dates
	$scope.today = new Date().getTime();

	$scope.danger = {};

	/**
	 * accounts contains all the received accounts and total contains the addition of each kind of balances
	 */
	$scope.accounts = {};
	$scope.total = {};
	// To hide the notifications in accounts
	$scope.hideNotifications = false;

	/**
	 * Receive the accounts from the middleware
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

			for (var i = 0; i < data.length; i++) {
				console.info( data[i] );
				switch ( data[i].account_type ) {
					case 'SAVINGS_ACCOUNT':
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
						console.log("account_type "+ data[i].account_type +" not supported");
				}
			}
		},
		function(error) {
			console.error( error );
			$scope.danger.show = true;
			$scope.danger.message = error;
		}
	);

	/**
	 * Change the view according to the selected account
	 */
	$scope.selectAccount = function(account) {
		// Hide the notifications
		$scope.hideNotifications = true;

		var accountId = account._account_id;
		var type = account.account_type;

		// Both values are shared with the child controllers
		$scope.selectedAccountId = accountId;
		$scope.selectedAccount = account;
		// Request account detail for all kinds of accounts
		getAccountDetail();

		// Request transactions (only for saving and credit accounts)
		if (type === 'SAVINGS_ACCOUNT' || type === 'CREDIT_ACCOUNT')
			$scope.getTransactions('12/06/2014', '14/07/2014');

		switch (type) {
			case 'SAVINGS_ACCOUNT':
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

	/**
   * Request the account detail from the middleware
   */
	var getAccountDetail = function() {
		accountsProviderFD.getAccountDetail( $scope.selectedAccountId ).then(
	    function(detail) {
	       console.info( detail );
	       $scope.detail = detail;
	     },
	     function(error) {
	       console.error( error.status );
				 $scope.danger.show = true;

				 switch (error.status) {
				 	case 401:
				 		$scope.danger.message = 'Tu sesión ha expirado.';
				 		break;
				 	default:
				 		$scope.danger.message = error.response.message;
				 };
	     }
	  );
	};

	/**
   * Request the transactions from the middleware
   * @param startDate
	 * @param endDate
   */
	$scope.getTransactions = function(startDate, endDate) {
		// Complete params
		params.date_start = startDate;
		params.date_end = endDate;

		accountsProviderFD.getTransactions( $scope.selectedAccountId, params ).then(
	    function(transactions) {
	      console.info( transactions );
	      $scope.transactions = transactions;
	    },
	    function(error) {
				console.error( error );
				$scope.danger.show = true;

				switch (error.status) {
				 case 401:
					 $scope.danger.message = 'Tu sesión ha expirado.';
					 break;
				 default:
					 $scope.danger.message = error.response.message;
				};
	    }
	  );
	};

}]);
