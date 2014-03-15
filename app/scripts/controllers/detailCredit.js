'use strict';

/* This controller is work flow of detail credit, obtain a .json to see on the view detailLineCredit.html */
angular.module('spaApp')
.controller('detailCreditCtrl',
  function($scope,$http,$location,$rootScope,$log,$stateParams){
   
    $scope.gridOptions ={data: 'myData',
      columnDefs: [{field:'name',displayName:'Nombre del beneficiario'},
      {field:'monto',displayName:'Monto'},
      {field:'acount',displayName:'Cuenta'}]
    };

    $http({
      url: $rootScope.restAPIBaseUrl + 'accounts/detailCredit.json',
      method: 'GET'
    }).
    success(function(data, status) {
        $scope.myData=data.detail;
    }).
    error(function(data, status) {
      //put an error message in the scope
      $log.error('Error: '+data, status);
      $scope.errorMessage = 'operation failed';
    });

    $scope.producto="*******";
    $scope.noOperacion="#####";
    $scope.montoEnviar="000,000.00";
    $scope.date="DD/MM/YYYY";
    $scope.tc="00.00";
    $scope.operacion=45698;

    $scope.mail = [
      {name:'jbravor@anze.com.mx'},
      {name:'amigo@gmail.com'},
      {name:'cliente@banco.com.mx'}    
    ];

});