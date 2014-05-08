'use strict';

angular.module('spaApp')
.factory('usersAdminDetailProvider',['$rootScope', 'usersAdminDetailAccountsService', '$q', function($rootScope, usersAdminDetailAccountsService, $q){
	

	return {

	getUsersAdminDetailAccounts: function(){
		var deferrer = $q.defer();
		
	if(!$rootScope.usersAdminDetailAccounts){

			usersAdminDetailAccountsService.getUsersAdminDetailAccounts().success(function(data){
				$rootScope.usersAdminDetailAccounts = data.accounts;
				deferrer.resolve();
				
			}).error(function(){

				console.log('Error obteniendo datos remotos');
				console.log("error "+data);
				alert('Error http() de UsersAdministrationCtrl');
				deferrer.reject('Error obteniendo datos');
			});
	} else {
		deferrer.resolve();
	}
	return deferrer.promise;
	}

	
	}



}]);
