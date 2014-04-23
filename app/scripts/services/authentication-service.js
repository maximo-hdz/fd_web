'use strict';

angular.module('spaApp')
  .service('AuthenticationService', function ($http, $q, $rootScope) {

	return {
		login: function(username,password) {
        	var deferred = $q.defer();
			$http({
				url: $rootScope.restAPIBaseUrl + 'users/login',
					method: 'POST',
					data: JSON.stringify({'username':username, 'password':password}),
					headers: {'Content-Type': 'application/json','X-BANK-TOKEN': '1'}
			}).success(function(data, status, headers) {
			 	deferred.resolve(data);
			}).error(function(data, status) {
				$q.reject(data)
			});
			return deferred.promise;
		}
	};
});
