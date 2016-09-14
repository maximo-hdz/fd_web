angular.module('spaApp').service('adminService', ['$http','$rootScope', function($http, $rootScope){

  this.getUserActivity = function(params){
    return $http.get($rootScope.restAPIBaseUrl + '/useractivity?page='+params.page+'&size='+params.size);
  };

}]);
