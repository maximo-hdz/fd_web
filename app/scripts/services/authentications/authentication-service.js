'use strict';

angular.module('spaApp')
  .service('AuthenticationService',[ '$http', '$q', '$rootScope','api',function ($http, $q, $rootScope,api) {

	return {
		login: function(username,password) {
        	var deferred = $q.defer();
			$http({
				url: $rootScope.restAPIBaseUrl + 'users/login',
					method: 'POST',
					data: JSON.stringify({'username':username, 'password':password}),
					headers: {'Content-Type': 'application/json','X-BANK-TOKEN': '1'}
			}).success(function(data, status, headers) {
				var token = headers('X-AUTH-TOKEN');
				$rootScope.session_token = token;
				api.init();
			 	deferred.resolve(data);
			}).error(function(data, status) {
				$q.reject(data)
			});
			return deferred.promise;
		},
		logout: function() {
        	var deferred = $q.defer();
        	//TODO: temporal var
        	var sessionID = "0001";
			$http({
				url: $rootScope.restAPIBaseUrl + 'users/logout',
					method: 'POST',
					data: JSON.stringify({'sessionID':sessionID}),
					headers: {'Content-Type': 'application/json','X-BANK-TOKEN': '1'}
			}).success(function(data, status, headers) {
			 	deferred.resolve(data);
			}).error(function(data, status) {
				$q.reject(data)
			});
			return deferred.promise;
		}
	};
}]);
