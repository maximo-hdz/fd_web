'use strict';

angular.module('spaApp')
.controller('UsersAdministrationCtasCtrl', function ($rootScope,$scope,$http,$location,$sce,$stateParams) {






$scope.specialist =  'David Torres Fernandez';
	$rootScope.titulo = 'Administracion';


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
				$this.css({'height':'100px', 'width': '60%' });
				$this.removeClass('desactivo').addClass('activo');
				$this.find('i').removeClass('oculto').addClass('visible');
				


			}, ((index + 1) * 400) );
		});

	
	};


	

});


angular.module('spaApp')
.controller('UsersAdministrationCtasCtrlRedirect', function ($rootScope,$scope,$http,$location,$sce,$stateParams) {

$scope.redirect = function(){
	
$location.path("/administration/accounts/");	


}

$scope.redirect();

});
