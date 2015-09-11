'use strict'

angular.module('spaApp').factory('adminProvider',['adminService', '$q', function(adminService, $q){

  return {

    getUserActivity: function(page, size) {
      var deferred = $q.defer();

      adminService.getUserActivity(page, size).success(function(data){
        deferred.resolve(data);
      }).error(function(data, status) {
        return deferred.reject('Error getting user activity');
      });

      return deferred.promise;
    }

  };//end return

}]);
