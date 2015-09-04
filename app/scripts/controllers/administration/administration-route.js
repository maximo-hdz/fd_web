'use strict';
/**
 * Router configuration for the administration section
 */
angular.module('administration-route', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider

    // Main view for the administration section
    .state('dashboard.administration', {
      url: 'administration',
      views: {
        'adminContent': {
          templateUrl: 'views/partials/administration/administration.html',
          controller: 'AdministrationCtrl'
        }
      },
        displayName: 'Administración',
        path: 'Administración'
    })

    .state('dashboard.administration.useractivity', {
      url: '/useractivity',
      views: {
        'userActivity': {
          templateUrl: 'views/partials/administration/user-activity.html',
          controller: ''
        }
      },
        displayName: 'Bitácora',
        path: 'Administración'
    })
}]);
