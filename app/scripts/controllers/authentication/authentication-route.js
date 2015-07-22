angular.module('authentication-route', ['ui.router'])
.config(['$stateProvider', function($stateProvider){

$stateProvider
	.state('login', {
	    url: '/login',
	    templateUrl: 'views/partials/authentication/login.html',
	    controller: 'LoginCtrl'
	  })
	.state('register', {
		url: '/register',
		templateUrl: 'views/partials/authentication/register.html',
		controller: 'RegisterCtrl'
	})
}]);
