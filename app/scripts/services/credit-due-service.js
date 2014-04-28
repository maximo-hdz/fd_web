'use strict';

angular.module('spaApp')
  .service('CreditDueService',['$http','$rootScope', function($http, $rootScope) {

    this.getCreditDue= function () {
console.log('toy en el service B)');
		return $http({
				//url: $rootScope.restAPIBaseUrl + 'accounts/credit/duedate',
				url:'json/credit-due.json',
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
