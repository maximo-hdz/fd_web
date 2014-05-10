'use strict';

angular.module('spaApp')
.controller('AddAccountCtrl', ['$scope','$http','$location','$rootScope','$log', function($scope,$http,$location,$rootScope,$log) {
	$scope.data={
		"alias":"Alias Seleccionado",
		"CLABE":"Número CLABE",
		"firstName":"Nombre(s)",
		"lastName":"Apellido(s)",
		"bank":"Banco del Beneficiario",
		"email":"beneficiario@mail.com",
	}
}]);
