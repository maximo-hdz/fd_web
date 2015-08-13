'use strict';

angular.module('spaApp').directive('fddatepicker', function() {

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModelCtrl) {
      $(function() {
        element.datepicker({
          dateFormat:'dd/mm/yy',
          showOn: "both",
          buttonText: "<i></i>",
          onSelect:function (date) {
            scope.$apply(function () {
              ngModelCtrl.$setViewValue(date);
            });
          }
        },
          $.datepicker.regional['es']
        );
      });
    }
  };

});
