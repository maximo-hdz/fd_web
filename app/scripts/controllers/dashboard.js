'use strict';

/**
Navigation-bar  controller  for dashboard
**/
angular.module('spaApp')
.controller('DashboardCtrl', function($scope,$rootScope,$location,AuthenticationService) {
	$scope.client = 'Ricardo Montemayor Morales';

	/**
	Add class active for item selected
	**/

	$scope.getClass = function(path) {
		if ($location.path().substr(0, path.length) == path) {
			return 'active'
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
	$scope.logout=function(){
			$location.path( '/login' );
	}

	/*/TODO: verify API RESTful
	$scope.logout=function(){
	 	AuthenticationService.logout()
	 	.then(function(data){
	 		$location.path('/logout');
	 	}, function(error){
	 		$scope.errorMessage = 'Logout failed';
	 		$scope.status = error;
	 	});
	 }*/

	/** Biometrics  **/
	$scope.biometrics=function(account_id){
		if(account_id!=undefined){
		$location.path( "accounts/biometric/"+account_id+"/transactions");
		}
	}
    $scope.sameAddBeneficiary=function(account_id){
		$location.path(account_id + '#/sameAddBeneficiary');
	}
	/** Biometrics Detail  **/
	$scope.detailMovement=function(account_id){
		$location.path( account_id + '#/detailMovement');
	}

	/*Controller for module invertions   */
	$scope.investment=function(account_id){
		$location.path(account_id + '#/investment');
	}

	$scope.customize=function(){

		$location.path('/administration/accounts/customize');
		$( "#transactiont" ).removeClass( "active" );
		$( "#valueDt" ).addClass( "active" );
	}

	$scope.ctas_menu=function(){
		$location.path('/administration/accounts/');
		$( "#transactiont" ).addClass( "active" );
		$( "#valueDt" ).removeClass( "active" );
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

	$scope.userdetail=function(account_){
		alert('ad');
	$location.path(  '#/administration/detail');

	};

	/**
	Add class active for item selected
	**/

	$scope.createBreadcrumb = function() {

		var path;

		path = '/accounts';
		if ($location.path().substr(0, path.length) == path) {
			return 'Saldos';
		}
		path = '/connection';
		if ($location.path().substr(0, path.length) == path) {
			return 'Conexi\u00F3n MFM';
		}
		path = '/authorize';
		if ($location.path().substr(0, path.length) == path) {
			return 'Autorizar';
		}
		path = '/transfer';
		if ($location.path().substr(0, path.length) == path) {
			return 'Transferencias';
		}
		path = '/administration';
		if ($location.path().substr(0, path.length) == path) {
			return 'Administraci\u00F3n';
		}
	}
});
