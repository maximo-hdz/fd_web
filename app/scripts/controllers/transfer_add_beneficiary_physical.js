'use strict';

angular.module('spaApp')
  .controller('TransferAddBeneficiaryPhysicalCtrl', function ($scope, $location) {

		$scope.addBeneficiary=function(){
			$location.path('transfer/add/beneficiary/confirm');
		};

  });
