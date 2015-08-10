'use strict';

/**
 * api initializer factory
 */

angular.module('spaApp').factory('api', ['$http', '$rootScope', '$window', function ($http, $rootScope, $window) {
  var hasBeenConfigured = false;
  return {
    init: function (token) {
      if($window.x_session_token) {
        $rootScope.session_token = $window.x_session_token;
        $rootScope.last_access_date = $window.last_access_date
        $rootScope.last_access_media = $window.last_client_application_id;
        $rootScope.client_name = $window.client_name;
      }
      $rootScope.isAuthenticated = false;
      $http.defaults.headers.common['X-BANK-TOKEN'] = 5;
      $http.defaults.headers.common['X-AUTH-TOKEN'] = token || $rootScope.session_token;

    },
    config: function(){
      //$rootScope.restAPIBaseUrl = $("#linkApiRoot").attr("href");
      //$rootScope.restAPIBaseUrl = "http://localhost:18080/SBD";
      $rootScope.restAPIBaseUrl = 'http://192.168.0.10:80/SBD';
      $rootScope.useMocks = false;
    }
  };
}]);
