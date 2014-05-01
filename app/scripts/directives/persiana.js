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
      		scope.open = true;

			elem.bind('click', function() {
				scope.open = !scope.open;
				console.log(scope.clase+": "+scope.open);
				$("."+scope.clase).slideToggle('slow');
			});

			$("."+scope.clase).bind('mouseover', function() {
				$("."+scope.clase).css('cursor', 'pointer');
			});

      }
    };
  });
