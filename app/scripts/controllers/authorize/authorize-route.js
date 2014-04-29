angular.module('authorize-route', ['ui.router'])
.config(['$urlRouterProvider', '$locationProvider', '$httpProvider', '$stateProvider' , function($urlRouterProvider, $locationProvider, $httpProvider, $stateProvider){

$stateProvider

.state('dashboard.authorize', {
    url: 'authorize',
    templateUrl: 'views/partials/authorize/pending-operations.html',
    controller: 'AuthorizeOperationsCtrl',
    breadcrumb: {
      title: 'authorize'
    }
  })
  .state('dashboard.authorizeMod', {
    url: 'authorizeMod',
    templateUrl: 'views/partials/authorize/pending-modifications.html',
    controller: 'AuthorizeModCtrl',
    breadcrumb: {
      title: 'Modify'
    }
  })
  .state('dashboard.authorizeChanges', {
    url: 'authorizeChanges',
    templateUrl: 'views/partials/authorize/authorizeAdminChange.html',
    breadcrumb: {
      title: 'Authorize'
    }
  })







}]);
