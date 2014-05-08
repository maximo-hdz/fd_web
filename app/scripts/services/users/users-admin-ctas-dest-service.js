'use strict';


angular.module('spaApp')
.service('usersAdminCtasDestService', ['$http', function($http){
	this.getUsersAdminCtasDest = function(){
	return $http.get('/json/dest_acc.json');
	}
}]);
