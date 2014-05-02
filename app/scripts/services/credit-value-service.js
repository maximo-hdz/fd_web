	'use strict';

angular.module('spaApp')
  .service('CreditValueService',['$http','$rootScope', function($http, $rootScope) {

    this.getCreditValue = function () {

		return $http({
				//url: $rootScope.restAPIBaseUrl + 'accounts/credit/valuedate',
				url:'json/credit-value.json',
				method: 'GET',
				data: JSON.stringify({
					'sessionId':'0001',
					'rowId':'row_id',
					'startDate':'32/32/2032',
					'endDate':'21/12/2012',
					'status':'closed',
					'page':{
						'currentPage':'currente_page',
						'registersPerPage':'registers_per_page',
						'totalPageNumber':'total_page_number',
						'totalRegisterNumber':'total_register_number'
					},
					'order':{
						'column':'column',
						'type':'type'
					}

				}),
				headers: {'Content-Type': 'application/json','X-BANK-TOKEN': '1'}
		});
    };
  }
]);
