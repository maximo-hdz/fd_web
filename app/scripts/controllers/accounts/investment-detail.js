'use strict';

angular.module('spaApp')
.controller('InvestmentDetailCtrl',	['$scope','$http','$location','$rootScope','investmentProvider', function($scope,$http,$location,$rootScope,investmentProvider) {

		$scope.mail = [
		    {name:'client@anze.com.mx'},
		    {name:'otrherMail@mfm.com'}    
	  	];
	  	$scope.enviar = $scope.mail[1]; 

		investmentProvider.getInvestmentDetail().then(function(){
	  		console.log('Entrada de json detail');
	  		$scope.detail = $rootScope.investmentDetail;  	
		});

		investmentProvider.getInvestmentGrid().then(function(){
	  		console.log('Entrada de json grid');
	  		$scope.myData = $rootScope.investmentGrid;  	
		});

		$scope.gridOptions = {
			data: 'myData',
			multiSelect: false,
			selectedItems: $scope.mySelections,
			columnDefs: [
				{field:'_account_id', displayName:'Fecha'},
				{field:'account_type', displayName:'Interés mensual'},
				{field:'name', displayName:'Retención 0.60%'},
				{field:'alias', displayName:'Interés neto'},
				{field:'currency', displayName:'Retiro de intereses'}],
			
		};

	
	}]);

