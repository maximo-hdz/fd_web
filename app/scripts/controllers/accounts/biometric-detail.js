'use strict';

/* This controller is work flow of detail credit, obtain a .json to see on the view detailLineCredit.html */
angular.module('spaApp')
.controller('BiometricDetailCtrl',
  function($scope,$http,$location,$rootScope,$log,$stateParams,biometricProvider){


  	$scope.account_id = $rootScope.biometricCurrentAccount;
  	$scope.detailmov = $stateParams.transaction_id;

    biometricProvider.getBiometricTransacctionDetail().then(
      function(data) {
      $scope.detail = $rootScope.biometricDetail;
      }
    );
});
