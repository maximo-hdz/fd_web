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
});
