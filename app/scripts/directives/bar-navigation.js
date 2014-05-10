'use strict';

angular.module('spaApp').directive('navigationBar', ['$location',function($location) {
  return {
    restrict: 'E',
    replace: true,
    priority: 100,
    scope: {},
    controller: function($scope, $element) {
        $scope.getClass = function(path) {
			if ($location.path().substr(0, path.length) == path) {
				return 'active'
			} else {
				return ""
			}
		}
    },
    templateUrl: 'views/directives/bar-navigation.html'
  };
}]);
