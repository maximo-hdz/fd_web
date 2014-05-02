'use strict';



angular.module('spaApp').factory('investmentProvider', ['$q', '$rootScope', 'investmentService', function($q,$rootScope, investmentService){
	
	 
	return { 
	 getInvestmentAccounts: function(){ 
	 	  var deferred = $q.defer();
	 
	if(!$rootScope.investAccounts){ 

		investmentService.getInvestmentAccounts().success(function(data,headers){
			console.log('oks_var');
		$rootScope.investAccounts = data.transacctions;

			deferred.resolve();

		}).error(function(){ 
			console.log('httperr');
			return deferred.reject('Error obteniendo cuentas de Inversion')
		});
		
		} else {
			console.log('true default');
			 deferred.resolve();
		}		
		return deferred.promise;
	},

	 getInvestmentDetail: function(){
		var deferred = $q.defer();

		if(!$rootScope.investmentDetail){			
			investmentService.getInvestmentDetail().success(function(data,headers){
			$rootScope.investmentDetail=data.detail;
				deferred.resolve();
			}).error(function(){
				console.error('Error in investmentDetail');
			});

		} else {
			console.log('true default');
			 deferred.resolve();
		}
			return deferred.promise;
		},

 	 getInvestmentGrid: function(){
		var deferred = $q.defer();

		if(!$rootScope.investmentGrid){			
			investmentService.getInvestmentGrid().success(function(data,headers){
			$rootScope.investmentGrid=data.accounts;
				deferred.resolve();
			}).error(function(){
				console.error('Error in getInvestmentGrid');
			});

		} else {
			console.log('true default');
			 deferred.resolve();
		}
			return deferred.promise;
		}
	};	
}]);

