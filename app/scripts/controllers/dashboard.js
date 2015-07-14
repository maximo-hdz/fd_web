'use strict';

/**
Navigation-bar  controller  for dashboard
**/
angular.module('spaApp')
.controller('DashboardCtrl', ['$scope', '$rootScope', '$location', 'authorizeProviderFD', '$idle', '$keepalive', '$modal', 'accountsProviderFD', function($scope, $rootScope, $location, authorizeProviderFD, $idle, $keepalive, $modal, accountsProviderFD) {
	$scope.client = 'Ricardo Montemayor Morales';
	$scope.started = true;

	/**
	 * Get accounts.
	 */
	accountsProviderFD.getAccounts().then(
		function(data) {
			$scope.accounts = data;
			console.info( data );
			// Let's call the accountDetial service
			accountsProviderFD.getAccountDetail( $scope.accounts[0]._account_id ).then(
				function(detail) {
					console.info( detail );
				},
				function(error) {
					console.error(error);
				}
			);
			accountsProviderFD.getTransactions( $scope.accounts[0]._account_id, { date_start: '12/06/2014', date_end: '14/07/2915' } ).then(
				function(transactions) {
					console.info( transactions );
				},
				function(error) {
					console.error( error );
				}
			)
		},
		function(error) {
			// TODO: handle error
			console.error( error );
		}
	);

      function closeModals() {
        if ($scope.warning) {
          $scope.warning.close();
          $scope.warning = null;
        }

        if ($scope.timedout) {
          $scope.timedout.close();
          $scope.timedout = null;
        }
      }

      $scope.$on('$idleStart', function() {
        closeModals();

        $scope.warning = $modal.open({
          templateUrl: 'warning-dialog.html',
          windowClass: 'modal-danger'
        });
      });

      $scope.$on('$idleEnd', function() {
        closeModals();
      });

      $scope.$on('$idleTimeout', function() {
		authorizeProviderFD.logout()
        closeModals();
        $location.path('/login');
      });

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


	$scope.logout=function(){
		authorizeProviderFD.logout().then(
			function(data){
				$location.path('/logout');
			},
			function(error){
				$scope.status = error;
			}
		);
	}

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
	/*Detail investment view */
	$scope.detailInvestment=function(account_id){
		$location.path(account_id + '#/detailInvestment')
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
}]);
