'use strict';
/**
 *
 */
angular.module('spaApp')
.controller('SavingDetailCtrl', ['$scope', 'accountsProviderFD', function($scope, accountsProviderFD) {
  console.warn( $scope.selectedAccountId );

  /**
   *
   */
  accountsProviderFD.getAccountDetail( $scope.selectedAccountId ).then(
    function(detail) {
       //console.info( detail );
       $scope.detail = detail;
     },
     function(error) {
       console.error(error);
     }
  );

  /**
   *
   */
  accountsProviderFD.getTransactions( $scope.selectedAccountId, { date_start: '12/06/2014', date_end: '14/07/2915' } ).then(
    function(transactions) {
      console.info( transactions );
      $scope.transactions = transactions;
    },
    function(error) {
      console.error( error );
    }
  );

}]);
