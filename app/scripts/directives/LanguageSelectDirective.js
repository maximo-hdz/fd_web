angular.module('spaApp') .directive('ngTranslateLanguageSelect', function (LocaleService) {
  'use strict';

  return {
    restrict: 'A',
    replace: true,
    template: ''+
      '<div ng-if="visible">'+
      '{{"directives.language-select.Language" | translate}}&nbsp;'+
      '<select class="form-control" style="width: 100px; height: 20px; margin: 0; padding: 0; display: inline;" ng-model="currentLocaleDisplayName"'+
        'ng-init="localesDisplayName = options[0]"'+
        'ng-change="changeLanguage(currentLocaleDisplayName)"'+
        'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames">'+
      '</select>'+
      '</div>'+
    '',
    controller: function ($scope) {
      $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
      $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
      $scope.visible = $scope.localesDisplayNames &&
      $scope.localesDisplayNames.length > 1;

      $scope.changeLanguage = function (locale) {
        LocaleService.setLocaleByDisplayName(locale);
      };
    }
  };
});
