'use strict';
/**
 * The connection controller
 */
angular.module('spaApp')
.controller('ConnectionCtrl', function($scope,$http,$location,$rootScope,$log) {
	$scope.specialist =  'David Torres Fernandez';

	$scope.load_conection = function () {
		$('.page_conection').css({
			'opacity': '0'
		});
		setTimeout(function(){
			$('.page_conection').animate({
				'opacity': '1'
			},300);
		},500);
		
		$( $('.conexion_btn').get().reverse() ).each(function( index ){
			var $this = $(this);
			setTimeout(function(){
				$this.removeClass('desactivo').addClass('activo');
				$this.find('i').css('display','block');
			}, ((index + 1) * 400) );
		});	

		// setTimeout(function(){
		// 	$('.conexion_btn').each(function(){
		   //  	$(this).removeClass('desactivo').addClass('activo');
		   //  	$(this).find('i').css('display','block');
		   //  });	
		// },500);
	};
});