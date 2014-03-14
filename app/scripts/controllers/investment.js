'use strict';

/* Controllers */

/* This controller is  work flow of inventions, obtain a .json to see on the view invertion.html */

angular.module('spaApp')
.controller('InvestmentCtrl', ['$scope', '$http','$log',
  function($scope, $http,$log) {
     
    $http.get('accounts/invertions.json').success(function(data) {  
  
      $scope.invertions = data;
    });

    $http.get('accounts/investment.json').success(function(data) {    
    	
      $scope.mxn = data;    
    });

   
  }]);


