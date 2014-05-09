'use strict';

angular.module('spaApp')
.factory('usersAdminUsersAutProvider', ['$rootScope', '$q', 'usersAdminUsersAutService', function ($rootScope, $q, usersAdminUsersAutService){
	
return {

	getUsersAdminUsersAut : function(){
	var deferrer = $q.defer();
	if(!$rootScope.usersAdminUsersAut){

		usersAdminUsersAutService.getUsersAdminUsersAut().success(function(data){

		$rootScope.usersAdminUsersAut = data.accounts;
		deferrer.resolve();

		}).error(function(data){

		deferrer.reject('Error obteniendo datos');
		console.log("error "+data);
		alert('Error http() de UsersAdministrationCtrlAut');

		});

	} else{

	deferrer.resolve();

	}
	return deferrer.promise;

	} 

	}

}]);
