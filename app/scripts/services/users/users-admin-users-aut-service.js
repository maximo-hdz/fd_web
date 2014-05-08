'use strict';

angular.module('spaApp')
.service('usersAdminUsersAutService', ['$http', function($http){
	this.getUsersAdminUsersAut = function(){
		return $http.get('/json/aut_mod.json');
	};
}]);
