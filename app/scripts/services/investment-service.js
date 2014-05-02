'use strict';


angular.module('spaApp').service('investmentService', ['$http', function($http){
	
	this.getInvestmentAccounts = function(){
		console.log('flow investment');
		return $http.get('json/data-investment.json');
	}


	this.getInvestmentDetail=function(){
		console.log('flow detail investment');
		return $http.get('json/investment-detail.json');
	}

	this.getInvestmentGrid=function(){
		return $http.get('json/account.json');
	}
			
}]);
