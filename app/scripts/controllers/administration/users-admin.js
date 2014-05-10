'use strict';

angular.module('spaApp')
.controller('UsersAdministrationCtrl', ['$rootScope','$scope','$http','$location','$sce','$stateParams', function ($rootScope,$scope,$http,$location,$sce,$stateParams) {

$scope.specialist =  'David Torres Fernandez';
	$rootScope.titulo = 'Administracion';

}]);
