'use strict';
/**
 *
 */
angular.module('spaApp')
.controller('LoanDetailCtrl', ['$scope', 'accountsProviderFD', function($scope, accountsProviderFD) {
  console.warn( $scope.selectedAccountId );

  /**
   *
   */
  accountsProviderFD.getAccountDetail( $scope.selectedAccountId ).then(
    function(detail) {
       console.info( detail );
       $scope.detail = detail;
     },
     function(error) {
       console.error(error);
     }
  );

}]);
