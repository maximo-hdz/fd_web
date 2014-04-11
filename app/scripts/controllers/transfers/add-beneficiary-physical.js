'use strict';

angular.module('spaApp')
  .controller('AddBeneficiaryPhysicalCtrl', function ($scope, $location) {

		$scope.addBeneficiary=function(){
			$location.path('transfer/add/beneficiary/confirm');
		};

  });
