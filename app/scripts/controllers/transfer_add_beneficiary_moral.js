'use strict';

angular.module('spaApp')
  .controller('TransferAddBeneficiaryMoralCtrl', function ($scope, $location) {

		$scope.addBeneficiary=function(){
			$location.path('transfer/add/moralbeneficiary/confirm');
		};

  });
