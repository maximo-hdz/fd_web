'use strict';

/**
 * The accounts controller. Gets accounts passing auth parameters
 */
angular.module('spaApp')
.controller('AccountsCtrl',['$scope', '$rootScope', '$location', 'accountsProviderFD', 'errorHandler',
function($scope, $rootScope, $location, accountsProviderFD, errorHandler) {

	// For searching purposes
	var params = {};
	params.numPage = 0;
	params.size = 100;
	// To make a comparison between today's date and the details dates
	$scope.today = new Date().getTime();
	// To separate the first four accounts
	$scope.notifications = [];
	// To contain the start and end dates
	$scope.searchParams = {};

	/**
	 * accounts contains all the received accounts and total contains the addition of each kind of balances
	 */
	$scope.accounts = {};
	$scope.total = {};
	// To hide the notifications in accounts
	$scope.hideNotifications = false;
	// Clear error
	errorHandler.reset();

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
			// To stop displaying the big
			delete $rootScope.showBGLoader;

			for (var i = 0; i < data.length; i++) {
				// Take the first four accounts for notifications
				if ( i < 4 )
					evaluateDate( data[i] );
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
			// To stop displaying the big loader
			delete $rootScope.showBGLoader;
			errorHandler.setError( error.status );
		}
	);

	/**
	 * Evaluate payment_date or cut_date to determine if the the account should be displayed in notifications
	 * @param account
	 */
	var evaluateDate = function(account) {
		//console.error(account);
		switch (account.account_type) {
			case 'LOAN_ACCOUNT':
			case 'CREDIT_ACCOUNT':
				if ( account.payment_date < $scope.today ) {
					$scope.notifications.push( account );
				}
				break;
			case 'SAVINGS_ACCOUNT':
			case 'INVESTMENT_ACCOUNT':
				if ( account.cut_date < $scope.today ) {
					$scope.notifications.push( account );
				}
				break;
			default:
				console.log("account_type "+ data[i].account_type +" not supported");
		}
	};

	/**
	 * Change the view according to the selected account
	 */
	$scope.selectAccount = function(account) {
		errorHandler.reset();
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
			$scope.getTransactions();

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
		errorHandler.reset();
		accountsProviderFD.getAccountDetail( $scope.selectedAccountId ).then(
	    function(detail) {
	       console.info( detail );
	       $scope.detail = detail;
	     },
	     function(error) {
				 console.error( error );
				 errorHandler.setError( error.status );
	     }
	  );
	};

	/**
	 * Search transactions using the datepicker values
	 */
	$scope.searchTransactions = function() {
    var todaysDate = new Date();
    var dd = todaysDate.getDate();      // day
    var mm = todaysDate.getMonth()+1;   // month (January is 0!)
    var yy = todaysDate.getFullYear();  // year
    dd = dd < 10 ? '0' + dd : dd;
    mm = mm < 10 ? '0' + mm : mm;
    todaysDate = yy+mm+dd;

    if ($scope.searchParams.startDate !== undefined)
      	// startDate pass from String to Int
        var startDate = parseInt($scope.searchParams.startDate.split("/").reverse().join(""));
    if ($scope.searchParams.endDate !== undefined)
        // endDate pass from String to Int
        var endDate = parseInt($scope.searchParams.endDate.split("/").reverse().join(""));

    if( $scope.searchParams.startDate && $scope.searchParams.endDate ) {
        if (startDate > todaysDate || endDate > todaysDate)
					console.error( 'Búsqueda no realizada: Fecha Inicial y/o Fecha Final NO pueden ser posteriores a la Fecha de Hoy' );
        else if (startDate > endDate)
					console.error( 'Búsqueda no realizada: Fecha Inicial debe ser anterior a la Fecha Final' );
        else
            $scope.getTransactions($scope.searchParams.startDate, $scope.searchParams.endDate);
    } else if( $scope.searchParams.startDate === null && $scope.searchParams.endDate === null) {
			params.date_end = null;
			params.date_start = null;
			$scope.getTransactions();
		}
  };

	/**
   * Request the transactions from the middleware
   */
	$scope.getTransactions = function() {
		// Complete params
		params.date_start = $scope.searchParams.startDate;
		params.date_end = $scope.searchParams.endDate;

		$scope.transactions = null;

		accountsProviderFD.getTransactions( $scope.selectedAccountId, params ).then(
	    function(transactions) {
	      console.info( transactions );
	      $scope.transactions = transactions;
	    },
	    function(error) {
				console.error( error );
				errorHandler.setError( error.status );
	    }
	  );
	};

}]);
