'use strict';

angular.module('spaApp').factory('httpInterceptor', ['$q', '$location', '$rootScope', 'timerService',
  function httpInterceptor ($q, $location, $rootScope, timerService) {

    return {
      request: function( request) {
        return request;
      },
      response: function( response ) {
        if($rootScope.session_token) {
          timerService.reset();
        }

        return response;
      },

      responseError: function( response ) {
        if (!response.status) {
          console.warn("Response undefined");
          timerService.stop();
          $location.url('/login');
        }

        if (response.status === 503) {
          $rootScope.session_token = null;
          console.warn("Status 503");
          timerService.stop();
          $location.url('/login');
        }

        return $q.reject(response);
      }
    };

}]);
