'use strict';

angular.module('spaApp')
  .controller('SomeAddBeneficiaryCtrl', function ($scope) {
    $scope.mail ="correo@anzen.com.mx";
    $scope.limitPayMonthly="40,00.00",
    $scope.limitPayDaily="500";
    $scope.accountBeneficiary="12700896544";
    $scope.accountAlias="Account Alias";
  });

