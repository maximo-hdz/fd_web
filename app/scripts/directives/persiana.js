'use strict';

angular.module('spaApp')
  .directive('persiana', function () {
    return {
      templateUrl: 'views/directives/persiana.html',
      restrict: 'E',
      scope: {},
      transclude: true,
      link: function postLink(scope, elem, attrs) {

      		scope.tituloPersiana = attrs.titulo;
      		scope.clase = attrs.clase;

			elem.bind('click', function() {
				if($("#"+scope.clase).hasClass('abierto')){
					$("#"+scope.clase).removeClass('abierto').addClass('cerrado');
				}else{
					$("#"+scope.clase).removeClass('cerrado').addClass('abierto');
				}
				$("."+scope.clase).slideToggle('slow');
			});

			$("."+scope.clase).bind('mouseover', function() {
				$("."+scope.clase).css('cursor', 'pointer');
			});

      }
    };
  });
