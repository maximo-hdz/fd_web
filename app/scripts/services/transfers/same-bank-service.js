'use strict';

angular.module('spaApp')
  .service('SameBankService', ['$http','$q','$rootScope', function($http,$q,$rootScope) {
    
    this.getTransferSameBank=function(){
    	return $http.get('json/transferSameBank.json');
    }

   	this.getTransferAddBeneficiary=function(){

   	return $http.get('json/addBeneficiary.json');
    }

    this.getConfirmationBeneficiary = function(){
    	return $http.get('json/confirmationBeneficiary.json');
    }

 }]);

