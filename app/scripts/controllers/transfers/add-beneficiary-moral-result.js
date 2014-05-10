'use strict';

angular.module('spaApp')
  .controller('AddBeneficiaryMoralResultCtrl', ['$scope','$location', function ($scope,$location) {

	$scope.send=function(){
		$location.path('transfer/add/moralbeneficiary/send');
	};

	$scope.print=function(){
		$location.path('transfer/add/moralbeneficiary/print');
	};

  }]);
