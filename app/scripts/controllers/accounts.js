'use strict';


/**
 * The accounts controller. Gets accounts passing auth parameters
 */
angular.module('spaApp')
.controller('AccountsCtrl', function ($scope,$http,$location,ctsBiometricas) {
	$scope.client = 'Ricardo Montemayor Morales';

	 // Get Biometric Accounts
	 $http({
		url: 'http://projects.anzen.com.mx:3000/api/accounts/1',
	 	method: 'GET'
	 }).
	 success(function(data, status, headers) {
	 	$scope.biometricAccounts = data;
	 	ctsBiometricas.accounts = data;
	 }).
	 error(function(data, status) {
			//put an error message in the scope
			$scope.errorMessage = 'operation failed';

	});

	// Get Credit Accounts
	$http({
		url: 'http://projects.anzen.com.mx:3000/api/accounts/2',
		method: 'GET'
	}).
	success(function(data, status, headers) {
		$scope.creditAccounts = data;
	}).
	error(function(data, status) {
			//put an error message in the scope
			$scope.errorMessage = 'operation failed';

		});

	// Get Investment Accounts

	$http({
	url: 'http://projects.anzen.com.mx:3000/api/accounts/3',
		method: 'GET'
	}).
	success(function(data, status, headers) {
		$scope.investmentAccounts = data;
	}).
	error(function(data, status) {
		//put an error message in the scope
		$scope.errorMessage = 'operation failed';
	});

	$scope.logout=function(){
		$location.path( '/login' );
	}

	//behavior stack accounts group
	$scope.show_hide_table=function(elemento, titulo ){
		if( $(elemento).css('display') == 'block' ){
			$(elemento).slideToggle('fast');
			$(titulo).removeClass('abierto').addClass('cerrado');
		}else{
			$(elemento).slideToggle('fast');
			$(titulo).removeClass('cerrado').addClass('abierto');
		}
	};

	$scope.load_accounts = function () {
		$('.page_accounts').hide();
	    setTimeout(function(){
	    	$('.page_accounts').fadeIn('slow');	
	    },600);
	};

	/*Controller for module invertions   */
	$scope.inversiones=function(){
		$location.path('#investment' );  

	}


});