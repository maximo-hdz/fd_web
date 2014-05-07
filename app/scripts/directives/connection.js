'use strict';

angular.module('spaApp')
.directive('connectionDirective', function(){
	function link(scope, element, attrs){

		$(element).css({
			'opacity': '0'
		});

		setTimeout(function(){
			$(element).animate({
				'opacity': '1'
			},300);
		},500);

		
		$( $('.'+attrs.class+' .conexion_btn').get().reverse() ).each(function( index ){
			var $this = $(this);
			setTimeout(function(){
				$this.removeClass('desactivo').addClass('activo');
				$this.find('i').removeClass('oculto').addClass('visible');
			}, ((index + 1) * 400) );
		});
	  
	}

	return {
	restrict:'A',
	link:link	
	}	
});
