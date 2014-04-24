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

	//behavior stack accounts group
	$scope.show_hide_table=function(elemento, titulo ){
		if( $(elemento).css('display') == 'block' ){
			$(elemento).slideToggle('slow');
			$(titulo).removeClass('abierto').addClass('cerrado');
		}else{
			$(elemento).slideToggle('slow');
			$(titulo).removeClass('cerrado').addClass('abierto');
		}
	};

	$scope.load_accounts = function () {
		$('.page_accounts').css({
			'opacity': '0'
		});
		$('.table-responsive').hide();
		setTimeout(function(){
			$('.page_accounts').animate({
				'opacity': '1'
			},300);
		},500);

		$( $('.table-responsive').get().reverse() ).each(function( index ){
			var $this = $(this);
			setTimeout(function(){
				$this.slideToggle('slow');
			}, ((index + 1) * 500) );
		});
	};

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
