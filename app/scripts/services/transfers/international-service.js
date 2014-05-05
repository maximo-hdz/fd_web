'use strict';

angular.module('spaApp')
  .service('InternationalServices', ['$http','$q','$rootScope', function ($http,$q, $rootScope){
   
	this.getTransferInternational=function(){
		return $http.get('json/transferInternational.json');
	}

}]);
