'use strict';

/* Controllers */

/* This controller is for work flow of inventions, obtain a .json to see on the view invertion.html */

angular.module('spaApp')
.controller('inversiones', ['$scope', '$http','$log',
  function($scope, $http,$log) {
     
    $http.get('accounts/invertions.json').success(function(data) {    
      $scope.invertions = data;
    });

    $http.get('accounts/interes.json').success(function(data) {    
      $scope.mxn = data;    
    });

   
  }]);
