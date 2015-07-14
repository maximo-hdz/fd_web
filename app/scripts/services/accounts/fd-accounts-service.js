'use strict';

/**
 * Accounts service.
 */
angular.module('spaApp')
.service('accountsServiceFD',['$http', '$rootScope', function ($http, $rootScope) {

	this.getAccounts = function () {
		return $http.get( $rootScope.restAPIBaseUrl+'/accounts' );
	};

	this.getAccountsDetail = function (accountId) {
		return $http.get($rootScope.restAPIBaseUrl+'/accounts/'+accountId);
	};

	this.getTransactions = function(accountId, params) {
		var options = '';
		var optionsParams = [];
		var search = '';
		var searchParams = [];
		var startDate = validateDate(params.date_start);
		var endDate = validateDate(params.date_end);

		if(startDate && endDate) {
			startDate ? searchParams.push('date_start=' + startDate) : '';
			endDate ? searchParams.push('date_end=' + endDate) : '';
		}

		searchParams.length > 0 ? optionsParams.push('search=' + encodeURIComponent(searchParams.join('&'))) : '';

		options = optionsParams.length > 0 ? '?' + optionsParams.join('&') : '';

		return $http.get($rootScope.restAPIBaseUrl+'/accounts/'+accountId+'/transactions' + options);
	};

	function validateDate(date) {
		var newDate = null;
		try
		{
			var parsedDate = $.datepicker.parseDate('dd/mm/yy', date);
			newDate = $.datepicker.formatDate( "yy-mm-dd", parsedDate);
		}
		catch (e)
		{

		}
		return newDate;
	};

}]);
