'use strict';

angular.module('spaApp')
.controller('UsersAdministrationCtasCtrl', function ($rootScope,$scope,$http,$location,$sce,$stateParams) {

$scope.specialist =  'David Torres Fernandez';
	$rootScope.titulo = 'Administracion';
});


angular.module('spaApp')
.controller('UsersAdministrationCtasCtrlRedirect', function ($rootScope,$scope,$http,$location,$sce,$stateParams) {

$scope.redirect = function(){
	
$location.path("/administration/accounts/");	

}

$scope.redirect();

});
