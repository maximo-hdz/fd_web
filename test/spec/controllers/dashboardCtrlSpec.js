var expect=chai.expect;

describe('dashboard test',function(){

	var dashboardCtrl, scope, http, location;
	var fakedMainResponse=[];

	beforeEach(module('spaApp'));

	beforeEach(inject(function($rootScope, $controller, $httpBackend, $location) {
		scope = $rootScope.$new();
		http = $httpBackend;
		location = $location;
		dashboardCtrl=$controller('DashboardCtrl',{$scope:scope});
	}));

	it('should foward to /login if there is no session token', function(){
		expect(location.path()).to.equal('/login');
	});

	it('should change to the desire section', function(){
		scope.changeSection('administration');
		expect(location.path()).to.equal('/administration');
	});

	it('should logout sucessfully', function(){
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('GET', scope.restAPIBaseUrl + '/logout').respond(fakedMainResponse);
		scope.logout();
		http.flush();
		expect(location.path()).to.equal('/login');
	})
	
	it('should handle unsucessful logout', function(){
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('GET', scope.restAPIBaseUrl + '/logout').respond(function(){
			return [400, ''];
		});
		scope.logout();
		http.flush();
		expect(location.path()).to.equal('/login');
	})

	it('should logout on WarningTimeout', function(){
		scope.$broadcast('WarningTimeout');
		expect(location.path()).to.equal('/login');
	})

	it('should warn of the idle time', function(){
		scope.$broadcast('IdleTimeout');
		expect(scope.warning.show).to.be.true;
		expect(scope.warning.message).to.contain('Tu sesión esta por expirar.');
	})

	it('should clear the warning for the idle time', function(){
		scope.$broadcast('IdleReset');
		expect(scope.warning.show).to.be.false;
	})

	it('should clear errors', function(){
		scope.$broadcast('clearError');
		expect(scope.danger.show).to.be.false;
		expect(scope.danger.message).to.be.empty;
	})

	it('should display errors', function(){
		scope.$broadcast('displayError',{message: 'error'});
		expect(scope.danger.show).to.be.true;
		expect(scope.danger.message).not.to.be.empty;
	})

	it('should clear errors', function(){
		scope.$broadcast('clearError');
		expect(scope.danger.show).to.be.false;
		expect(scope.danger.message).to.be.empty;
	})

});
