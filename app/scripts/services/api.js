'use strict';

/**
 * api initializer factory
 */

angular.module('spaApp').factory('api', ['$http', '$rootScope', function ($http, $rootScope) {
  var hasBeenConfigured = false;
  return {
    init: function (token) {
      $rootScope.isAuthenticated = false;
      // this is the token of the bank
      $http.defaults.headers.common['X-BANK-TOKEN'] = 3;
      $http.defaults.headers.common['X-AUTH-TOKEN'] = token || $rootScope.session_token;

      console.log("Executes init & token = " + $rootScope.session_token);
    },
    config: function(){
      $rootScope.restAPIBaseUrl = 'http://projects.anzen.com.mx:8081/mfm/api/v1/';
    }
  };
}]);
