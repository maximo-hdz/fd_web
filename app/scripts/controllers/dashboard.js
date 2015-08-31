'use strict';
/**
 *
 */
angular.module('spaApp')
.controller('DashboardCtrl', ['$scope', '$rootScope', '$location', 'authorizeProviderFD', 'accountsProviderFD', '$window', 'timerService', 'errorHandler',
function($scope, $rootScope, $location, authorizeProviderFD, accountsProviderFD, $window, timerService, errorHandler) {

	// If there is no session, take the user to the login view
	if ( !$rootScope.session_token ) {
		$location.path('login');
	}

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

	/**
	 * Call the service to close the session.
	 */
	$scope.logout = function() {
		$rootScope.showBGLoader = true;
		authorizeProviderFD.logout().then(
			function(data) {
				timerService.stop();
				$rootScope.session_token = null;
				$location.path('/login');
			},
			function(error){
				timerService.stop();
				$rootScope.session_token = null;
				$scope.status = error;
				$location.path('/login');
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
