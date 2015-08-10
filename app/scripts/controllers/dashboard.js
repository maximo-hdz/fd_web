'use strict';
/**
 *
 */
angular.module('spaApp')
.controller('DashboardCtrl', ['$scope', '$rootScope', '$location', 'authorizeProviderFD', 'accountsProviderFD', '$window', 'timerService', 'errorHandler',
function($scope, $rootScope, $location, authorizeProviderFD, accountsProviderFD, $window, timerService, errorHandler) {

	// Set first section
	$scope.currentSection = 'accounts';

	$scope.warning = {};
	$scope.danger = {};

	/**
	 * Change current section accordiing to the received value.
	 */
	$scope.changeSection = function( section ) {
    if ( $scope.currentSection === section )
      return;
    else if ( section === 'map' )
      $location.path('map');
    else
      $('.main-menu .navbar-nav li a').each( function(index) {
        if ( $(this).attr('id') === section ) {
          $scope.currentSection = section;
          $location.path( section );
        }
        $(this).css('cursor', 'pointer');
      });
  };

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
	};

	/**
	 * Call the service to close the session.
	 */
	$scope.logout = function() {
		authorizeProviderFD.logout().then(
			function(data) {
				timerService.stop();
				$location.path('/logout');
			},
			function(error){
				timerService.stop();
				$scope.status = error;
			}
		);
	};

	$scope.$on('IdleTimeout', function() {
    $scope.warning.show = true;
		$scope.warning.message = 'Tu sesión esta por expirar.';
  });

  $scope.$on('WarningTimeout', function() {
    $scope.logout();
  });

	$scope.$on('IdleReset', function() {
    $scope.warning.show = false;
  });

	/**
	 * eventListener to display errors
	 * @param event
	 * @param error
	 */
	$scope.$on('displayError', function(event, error) {
		$scope.danger.show = true;
		$scope.danger.message = error.message;
  });

	/**
	 * eventListener to clear errors
	 * @param event
	 */
	$scope.$on('clearError', function(event) {
		$scope.danger.show = false;
		$scope.danger.message = '';
	});

}]);
