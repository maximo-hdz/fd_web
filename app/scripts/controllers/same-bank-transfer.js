'use strict';

angular.module('spaApp')
.controller('same-bank-transfer', function($scope, $log) {

$scope.withdrawlAccount="706 58535476";
$scope.alias="Alias Cuenta";
$scope.coin="USD/EUR";
$scope.amount="????";
$scope.paymentConcept="????";
$scope.depositAccount="706 58535476";
$scope.date="14/04/2014";
$scope.mainName="????";
$scope.codes="????";
$scope.bank="????";
$scope.address="????";
$scope.number="+5281 777 0022";
$scope.numericReference="????";
$scope.dateApplied="14/04/2014"

$scope.x=true;

$scope.switch = function(){
	$scope.x = false;
	console.log($scope.x);
}



});