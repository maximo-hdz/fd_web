'use strict';

angular.module('spaApp')
.service('errorHandler', ['errorMessages', '$rootScope', function(errorMessages, $scope) {
  var error = {
    message: '',
    display: false
  };

  /**
   * According to the received error status code, get the message and broadcast the event to display the error in the view.
   * @param status
   */
  this.setError = function(status) {
    error.message = errorMessages.get(status);
    error.display = true;
    console.warn(error);
    $scope.$broadcast('displayError', error);
  };

  /**
   * Reset error every time a function is called.
   */
  this.reset = function() {
    $scope.$broadcast('clearError');
  };

}]);
