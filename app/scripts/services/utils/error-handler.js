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
    if(status !== 401 || status !== 403 || status !== 405 || status !== 406 || status !== 409 || status !== 417 ||
       status !== 423 || status !== 500 || status !== 503 || status !== 504 || status !== 601 || status !== 603)
      error.message = 'default';
    else
      error.message = status;
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
