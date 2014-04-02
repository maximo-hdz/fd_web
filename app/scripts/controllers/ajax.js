'use strict';


angular.module('spaApp')
.controller('ajax', function ($scope,$http,$location) {
	/**
	 * the login function connect the Rest-API: if the response status is OK, redirect to route "homePage",
	 * else put an error message in the scope
	 */
	 $scope.ajax=function(){
	 	//$http.defaults.useXDomain = true;
	 		console.log(data);
			$location.path( '/ajax' );
	 };
  });
