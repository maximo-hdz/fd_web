angular.module('spaApp').factory('adminProvider',['adminService', '$q', function(adminService, $q){

  return {

    getUserActivity: function(params) {
      var deferred = $q.defer();
      adminService.getUserActivity(params).success(function(data){
        deferred.resolve(data);
      }).error(function() {
        return deferred.reject('Error getting user activity');
      });
      return deferred.promise;
    }

  };

}]);
