'use strict';

angular.module('spaApp').factory('httpInterceptor', ['$q', '$location', '$rootScope', 'timerService',
  function httpInterceptor ($q, $location, $rootScope, timerService) {

    return {
      request: function( request) {
        $rootScope.requestStack.push(1);
        return request;
      },
      response: function( response ) {
        if($rootScope.session_token) {
          timerService.reset();
        }
        $rootScope.requestStack.pop();

        return response;
      },

      responseError: function( response ) {
        $rootScope.requestStack.pop();
        
        if (!response.status) {
          console.warn("Response undefined");
          timerService.stop();
          $location.url('/login');
        }

        if ( response.status === 401 ) {
          $rootScope.session_token = null;
          console.warn("Status 401");
          timerService.stop();
          $location.url('/login');
        }

        return $q.reject(response);
      }
    };

}]);
