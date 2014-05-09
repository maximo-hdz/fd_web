'use strict';
/**
 * The connection controller
 */
angular.module('spaApp')
.controller('ConnectionCtrl', ['$scope','$http','$location','$rootScope','$log', function($scope,$http,$location,$rootScope,$log) {
	$scope.specialist =  'David Torres Fernandez';
	$rootScope.titulo = 'Connection';
}]);


