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
          templateUrl: 'views/partials/administration/admin_front.html',
          controller: 'UsersAdministrationCtrl',
          breadcrumb: {
            title: 'Administration'
          }
        }
      }
    })

    // This is the section example
    .state('dashboard.administration.example', {
      url: '/example',
      views: {
        'example': {
          templateUrl: 'views/partials/administration/example.html',
          controller: '',
          breadcrumb: {
            title: 'Example'
          }
        }
      }
    })

}]);
