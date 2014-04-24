'use strict';

angular.module('spaApp')
  .service('creditService',['$http','$rootScope', function($http, $rootScope) {

    this.getCreditDetail = function (sessionId,rowId) {

		return $http({
				url: $rootScope.restAPIBaseUrl + 'accounts/credit/detail',
				method: 'POST',
				data: JSON.stringify({'sessionId':sessionId, 'rowId':rowId}),
				headers: {'Content-Type': 'application/json','X-BANK-TOKEN': '1'}
		});

        //return $http.get('/json/credit.json');
    };

  }
]);
