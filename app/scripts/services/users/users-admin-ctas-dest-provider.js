'use strict';


angular.module('spaApp')
.factory('usersAdminCtasDestProvider', ['$rootScope','$q','usersAdminCtasDestService', function($rootScope,$q,usersAdminCtasDestService){

return {
	
	getUsersAdminCtasDest: function(){
		var deferrer = $q.defer();
	if(!$rootScope.UsersAdminCtasDest){

	usersAdminCtasDestService.getUsersAdminCtasDest().success(function(data){

		$rootScope.UsersAdminCtasDest = data.accounts;
		deferrer.resolve();

	}).error(function(data){

		deferrer.reject('Error obteniendo las cuentas');
		console.log("error "+data);
		alert('Error http() de UsersAdministrationCtrl');
	});

	
	} else {

	deferrer.resolve();
	}
	return deferrer.promise;
	}
	}
	

}]);
