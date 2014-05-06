'use strict';


angular.module('spaApp')
.service('usersAdminDetailAccountsService', ['$http', function($http){
	 this.getUsersAdminDetailAccounts = function(){
	 	return $http.get('/json/table.json');
	 };
}]);
