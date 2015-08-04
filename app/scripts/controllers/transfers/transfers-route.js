'use strict';
/**
 * Router configuration for the transfers section
 */
angular.module('transfers-route', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {

  $stateProvider

    // Main view for the transfers section
    .state('dashboard.transfers', {
      url: 'transfers',
      views: {
        'transfersContent': {
          templateUrl: 'views/partials/transfers/transfers.html',
          controller: 'TransfersCtrl',
          breadcrumb: {
            title: 'Transfers'
          }
        }
      }
    })

    // This is the section example
    .state('dashboard.transfers.example', {
      url: '/example',
      views: {
        'example': {
          templateUrl: 'views/partials/transfers/example.html',
          controller: '',
          breadcrumb: {
            title: 'Example'
          }
        }
      }
    })

}]);
