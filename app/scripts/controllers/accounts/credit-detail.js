'use strict';

/* This controller is work flow of detail credit, obtain a .json to see on the view detailLineCredit.html */
angular.module('spaApp')
.controller('CreditDetailCtrl',
  function($scope,$http,$location,$rootScope,$log,$stateParams){

    $http({
      url:'json/biometric-detail.json',
      method: 'GET'
    }).
    success(function(data, status) {
      $scope.detail = data;
      $scope.transacction_id = $scope.detail.transacction_id;
      //TODO: depend json
      $scope.account_id = 60001;
    }).
    error(function(data, status) {
      //put an error message in the scope
      $log.error('Error: '+data, status);
      $scope.errorMessage = 'operation failed';
    });

});
