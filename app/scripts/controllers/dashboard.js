/**
 *
 */
angular.module('spaApp')
.controller('DashboardCtrl', ['$scope', '$rootScope', '$location', 'authorizeProviderFD', 'accountsProviderFD', 'timerService',
function($scope, $rootScope, $location, authorizeProviderFD, accountsProviderFD, timerService) {

	// If there is no session, take the user to the login view
	if ( !$rootScope.session_token ) {
		$location.path('login');
	}

	// Set first section
	$scope.currentSection = 'accounts';

	$scope.warning = {};
	$scope.danger = {};

	/**
	 * Change current section according to the received value.
	 */
	$scope.changeSection = function( section ) {
		$scope.currentSection = section;
		$location.path( section );
	};

	/**
	 * Call the service to close the session.
	 */
	$scope.logout = function() {
		$rootScope.showBGLoader = true;
		authorizeProviderFD.logout().then(
			function() {
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
	$scope.$on('clearError', function() {
		$scope.danger.show = false;
		$scope.danger.message = '';
	});

}]);
