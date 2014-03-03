'use strict';

/**
Navigation-bar  controller  for dashboard
**/
angular.module('spaApp')
.controller('Dashboard', function ($scope,$location) {
	$scope.client = 'Ricardo Montemayor Morales';

	/**
	Add class active for item selected
	**/
	$scope.getClass = function(path) {
		if ($location.path().substr(0, path.length) == path) {
			return "active"
		} else {
			return ""
		}
	}

	/**
	Logout operation
	**/
	$scope.logout = function(){
		$location.path( 'login' );
	}

	/** Biometrics  **/
	$scope.biometrics=function(account_id){
		$location.path( account_id + '#/biometrics');
	}

	/** Biometrics Detail  **/
	$scope.detail=function(account_id){
		$location.path( account_id + '#/detail');
	}	

	/*Controller for module invertions   */
	$scope.investment=function(account_id){
		$location.path(account_id + '#/investment' );  
	}

	/* Credit Account */
	$scope.credit=function(account_id){
		$location.path( account_id + '/credit/transactions');
	}

	/* Credit Transaction */
	$scope.creditTransaction=function(account_id){
		$location.path( account_id + '/credit/transactions');
		$( "#transaction" ).addClass( "active" );
 		$( "#valueDate" ).removeClass( "active" );
		$( "#dueDate" ).removeClass( "active" );		
	}	

	/* Credit Due Date */
	$scope.dueDate=function(account_id){
		$location.path( account_id + '/credit/dueDate');
		$( "#dueDate" ).addClass( "active" );
		$( "#valueDate" ).removeClass( "active" );
		$( "#transaction" ).removeClass( "active" );
	}	

	/* Credit value Date */
	$scope.valueDate=function(account_id){
		$location.path( account_id + '/credit/valueDate');
		$( "#valueDate" ).addClass( "active" );
		$( "#dueDate" ).removeClass( "active" );
		$( "#transaction" ).removeClass( "active" );
	}	

});
