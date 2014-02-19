'use strict';

/**
Navigation bar event controller 
**/
angular.module('spaApp')
.controller('HomeCtrl', function ($scope,$location) {
	$scope.client = 'Ricardo Montemayor Morales';
	$scope.selectedIndex = 1;

	/** Balance  **/
	$scope.balance=function(){
		$location.path( '/accounts' );
	}

	/** Connection  **/
	$scope.connection=function(){
		$location.path( '/connection' );
	}

	/** Authorize  **/
	$scope.authorize=function(){
		

	}

	/** Transfers  **/
	$scope.transfer=function(){
		

	}

	/** Administration  **/
	$scope.administration=function(){
		

	}

		/** Administration  **/
	$scope.logout=function(){
		$location.path( '/login' );

	}


});
