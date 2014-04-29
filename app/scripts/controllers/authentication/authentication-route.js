angular.module('authentication-route', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){

$stateProvider
.state('login', {
    url: '/login',
    templateUrl: 'views/partials/authentication/login.html',
    controller: 'LoginCtrl'
  })



}]);
