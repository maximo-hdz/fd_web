'use strict';

angular.module('spaApp')
  .service('InterBankService', ['$http', '$q', '$rootScope', function($http,$q,$rootScope) {
    

  	this.getTransferInterBank=function(){
  		return $http.get('json/interBank.json');
  	}

}]);
