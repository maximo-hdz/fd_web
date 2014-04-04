'use strict';

/**
Navigation-bar  controller  for dashboard
**/
angular.module('spaApp')
.controller('Dashboard', function($scope,$location) {
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

	//behavior stack accounts group
	//TODO Do not use jQuery
	$scope.show_hide_table=function(elemento, titulo ){
		if( $(elemento).css('display') == 'block' ){
			$(elemento).hide();
			$(titulo).removeClass('abierto').addClass('cerrado');
		}else{
			$(elemento).show();
			$(titulo).removeClass('cerrado').addClass('abierto');
		}
	};

	/**
	Logout operation
	**/
	$scope.logout = function(){
		$location.path( '/login' );
	}

	/** Biometrics  **/
	$scope.biometrics=function(account_id){
		$location.path( account_id + '#/biometrics');
	}

	/** Biometrics Detail  **/
	$scope.detailMovement=function(account_id){
		$location.path( account_id + '#/detailMovement');
	}	

	/*Controller for module invertions   */
	$scope.investment=function(account_id){
		$location.path(account_id + '#/investment');  
	}

	/* Credit Account */
	$scope.credit=function(account_id){
		$location.path( account_id + '/credit/transactions');
	}

	/* Credit Transaction */
	//TODO Do not use JQuery
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

	//behavior stack help
	$scope.show_hide_help=function(elemento, link){
		if( $(elemento).css('display') == 'block' ){
			$(elemento).slideToggle('fast');
			$(link).removeClass('abierto').addClass('cerrado').slideToggle('fast');
		}else{
			$(elemento).slideToggle('fast');
			$(link).removeClass('cerrado').addClass('abierto').slideToggle('fast');
		}
	};

	$scope.$on('$routeChangeSuccess', function () {
		console.log('cambio');
	});
});
