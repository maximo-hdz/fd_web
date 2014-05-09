'use strict';

angular.module('spaApp')
  .controller('AddBeneficiaryMoralConfirmCtrl', ['$scope','$location', function ($scope,$location) {

	$scope.confirm=function(){
		$location.path('transfer/add/moralbeneficiary/result');
	};

  }]);
