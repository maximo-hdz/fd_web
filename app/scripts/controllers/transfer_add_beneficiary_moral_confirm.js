'use strict';

angular.module('spaApp')
  .controller('TransferAddBeneficiaryMoralConfirmCtrl', function ($scope,$location) {
    
	$scope.confirm=function(){
		$location.path('transfer/add/moralbeneficiary/result');
	};

  });
