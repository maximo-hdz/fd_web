'use strict';


angular.module('spaApp').service('investmentService', ['$http', function($http){
	
	this.getInvestmentAccounts = function(){
		console.log('oks');
		return $http.get('json/data-investment.json');

	}

}]);
