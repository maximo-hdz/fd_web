'use strict';

angular.module('spaApp').service('adminService', ['$http','$rootScope', function($http, $rootScope){

  this.getUserActivity = function(page, size){
    return $http.get($rootScope.restAPIBaseUrl + '/useractivity?page='+page+'&size='+size);
  };

}]);
