angular.module('connection-route', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
$stateProvider
.state('dashboard.connection', {
    url: 'connection',
    templateUrl: 'views/partials/connection/connection.html',
    controller: 'ConnectionCtrl',
    breadcrumb: {
      title: 'connection'
    }
  })
}]);



