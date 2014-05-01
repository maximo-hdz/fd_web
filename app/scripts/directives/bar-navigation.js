'use strict';

angular.module('spaApp').directive('navigationBar', function() {
  return {
    restrict: 'E',
    replace: true,
    priority: 100,
    templateUrl: 'views/directives/bar-navigation.html',
    link: function($scope) {
      $scope.$on('$stateChangeSuccess', function(){
      });
    }
  };
});
