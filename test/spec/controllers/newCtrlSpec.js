var expect=chai.expect;

describe('test for accounts controller',function(){

	var newCtrl, scope, location, http;
	var fakedMainResponse=[];

	beforeEach(module('spaApp'));

	beforeEach(inject(function($controller,$rootScope,$location,$httpBackend){
		scope= $rootScope.$new();
		location=$location;
		http=$httpBackend;
		newCtrl=$controller('NewCtrl',{
			$scope:scope
		});
	}));

	it('should logout sucessfully', function(){
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('GET', scope.restAPIBaseUrl + '/logout').respond(fakedMainResponse);
		scope.logout();
		http.flush();
		expect(location.path()).to.equal('/login');
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

	it('should validate both passwords are equal', function(){
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		scope.pass = {};
		scope.pass.password = 'pass';
		scope.pass.confirm = 'pass2'
		scope.change_password();
		http.flush();
		expect(scope.warning.message).to.contain('003');
	})

	it('should validate password length', function(){
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		scope.pass = {};
		scope.pass.password = 'pass';
		scope.pass.confirm = 'pass'
		scope.change_password();
		http.flush();
		expect(scope.warning.message).to.contain('002');
	})

	it('should change password', function(){
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('POST', scope.restAPIBaseUrl + '/userInformation/password').respond(fakedMainResponse);
		scope.pass = {};
		scope.pass.password = 'pass123456';
		scope.pass.confirm = 'pass123456'
		scope.change_password();
		http.flush();
		expect(location.path()).to.equal('/login');
	})

	it('should change password', function(){
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('POST', scope.restAPIBaseUrl + '/userInformation/password').respond(function(){return [400, ''];});
		scope.pass = {};
		scope.pass.password = 'pass123456';
		scope.pass.confirm = 'pass123456'
		scope.change_password();
		http.flush();
		expect(scope.changing_pass).to.be.false;
	})

});
