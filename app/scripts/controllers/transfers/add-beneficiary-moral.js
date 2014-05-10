'use strict';

angular.module('spaApp')
  .controller('AddBeneficiaryMoralCtrl', ['$scope','$location', function ($scope, $location) {

		$scope.addBeneficiary=function(){
			$location.path('transfer/add/moralbeneficiary/confirm');
		};

  }]);
