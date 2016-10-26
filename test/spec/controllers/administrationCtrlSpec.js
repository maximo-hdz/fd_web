var expect=chai.expect;

describe('administration test',function(){

	var administrationCtrl, scope, http, location;
	var fakedMainResponse=[];

	beforeEach(module('spaApp'));

	beforeEach(inject(function($rootScope, $controller, $httpBackend, $location) {
		scope = $rootScope.$new();
		http = $httpBackend;
		location = $location;
		administrationCtrl=$controller('AdministrationCtrl',{$scope:scope});
	}));

	it('should fetch the account activity', function(){
		scope.disableSig = false;
		scope.disableAnt = false;
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('GET', scope.restAPIBaseUrl + '/useractivity?page=1&size=10').respond(fakedMainResponse);
		http.when('GET', scope.restAPIBaseUrl + '/useractivity?page=0&size=10').respond(fakedMainResponse);
		scope.activity('sig');
		http.flush();
		expect(scope.page).to.equal(1);
	});

	it('should handle unsucessful activity', function(){
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);

		http.when('GET', scope.restAPIBaseUrl + '/useractivity?page=-1&size=10').respond(function(){
			return [400, ''];
		});
		http.when('GET', scope.restAPIBaseUrl + '/useractivity?page=0&size=10').respond(function(){
			return [400, ''];
		});
		scope.activity('ant');
		scope.page = 1;
		http.flush();
		expect(scope.disableAnt).to.be.true;
		expect(scope.disableSig).to.be.true;
	});

	it('should check mapUserActivity', function(){
		var result = scope.mapUserActivity('checkLogin');
		expect(result).to.contain('Pre Login');
	});

	it('should check mapActivityStatus', function(){
		var result = scope.mapActivityStatus(true);
		expect(result).to.contain('exitoso');
	});

});
