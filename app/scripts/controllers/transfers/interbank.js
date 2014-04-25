'use strict';

angular.module('spaApp')
.controller('InterbankCtrl', function($scope, $log) {

$scope.withdrawlAccount="706 58535476";
$scope.alias="Alias Cuenta";
$scope.coin="MXN";
$scope.amount="????";
$scope.paymentConcept="????";
$scope.depositAccount="706 58535476";
$scope.date="14/04/2014";
$scope.applianceDate="14/04/2014";
$scope.mainName="????";
$scope.codes="????";
$scope.bank="????";
$scope.address="????";
$scope.country="????";
$scope.recipientName="????";
$scope.recipientAddress="????";
$scope.recipientCity="????";
$scope.recipientCountry="????";
$scope.number="+5281 777 0022";
$scope.numericReference="????";
$scope.transferType="TEF (Día Siguiente hábil)";
$scope.destinationBank="????";

$scope.x=true;

$scope.switch = function(){
	$scope.x = false;
	console.log($scope.x);
}


});