'use strict';

angular.module('spaApp').service('adminService', ['$http','$rootScope', function($http, $rootScope){

  this.getUserActivity = function(){    
    return $http.get($rootScope.restAPIBaseUrl + '/useractivity');
  };

}]);
