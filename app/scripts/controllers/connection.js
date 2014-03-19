'use strict';


/**
 * The connection controller
 */
angular.module('spaApp')
.controller('ConnectionCtrl', function ($scope,$http,$location,$sce) {
	$scope.specialist =  'David Torres Fernandez';


	$scope.load_conection = function () {
	    setTimeout(function(){
	    	$('.conexion_btn').each(function(){
		    	$(this).removeClass('desactivo').addClass('activo');
		    	$(this).find('i').css('display','block');
		    });	
	    },500);
	};
});

