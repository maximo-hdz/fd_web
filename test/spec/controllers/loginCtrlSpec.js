var expect=chai.expect;

describe('login test',function(){

	var loginCtrl, scope, http, location;
	var fakedMainResponse=[];

	beforeEach(module('spaApp'));

	beforeEach(inject(function($rootScope, $controller, $httpBackend, $location) {		
		scope = $rootScope.$new();
		http = $httpBackend;
		location = $location;
		loginCtrl=$controller('LoginCtrl',{$scope:scope});
	}));

	it('should check the initial conditions',function(){
		expect(scope.CheckLogin).to.be.true;
		expect(scope.logining).to.be.false;
	});

	it('should verify checkLogin normal', function(){
		scope.auth = {'user_login': 'AAAAAAAA'};
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('POST', scope.restAPIBaseUrl + '/checkLogin')
			.respond({
					"state":"OK",
					"anti_phishing_statement:": "hello",
					"client_name":"Juan Perez",
					"image_content": "imagen",
					"new_condition_action": "Y",
					"post_login_action": "login",
					"role_id": 0
			});
		scope.checkLogin();
		http.flush();		
		expect(scope.logining).to.be.false;
		expect(scope.auth.with_token).to.be.equal('N');
		expect(scope.auth.response.client_name).to.contain('Juan Perez');
	});

	it('should verify checkLogin register', function(){
		scope.auth = {'user_login': 'BBBBBBBB'};
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', 'views/partials/authentication/register.html').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('POST', scope.restAPIBaseUrl + '/checkLogin')
			.respond({
					"state":"OK",
					"anti_phishing_statement:": "hello",
					"client_name":"Juan Perez",
					"image_content": "imagen",
					"new_condition_action": "Y",
					"post_login_action": "register",
					"role_id": 1
			});
		scope.checkLogin();
		http.flush();		
		expect(location.path()).to.equal('/register');
		expect(scope.auth.with_token).to.be.equal('Y');
	});

	it('should verify checkLogin change password', function(){
		scope.auth = {'user_login': 'CCCCCCCC'};
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', 'views/partials/authentication/new.html').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('POST', scope.restAPIBaseUrl + '/checkLogin')
			.respond({
					"state":"OK",
					"anti_phishing_statement:": "hello",
					"client_name":"Juan Perez",
					"image_content": "imagen",
					"new_condition_action": "Y",
					"post_login_action": "change_password",
					"role_id": 0
			});
		scope.checkLogin();
		http.flush();		
		expect(location.path()).to.equal('/new');
	});

	it('should manage errors in checkLogin', function(){
		scope.auth = {'user_login': 'DDDDDDDD'};
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('POST', scope.restAPIBaseUrl + '/checkLogin')
			.respond(function(){
				return [400, ''];
			});
		scope.checkLogin();
		http.flush();		
		expect(scope.logining).to.be.false;
	})

	it('should login', function(){
		scope.auth = {'new_condition_action': 'Y'};
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', 'views/partials/accounts/accounts.html').respond(fakedMainResponse);
		http.when('GET', 'views/dashboard.html').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('POST', scope.restAPIBaseUrl + '/login')
			.respond({
					"last_access_date":1475248462283,
					"role_id":"C",
					"last_client_application_id":"SPA",
					"client_name":"Juan Perez"}
				);
		scope.login();
		http.flush();		
		expect(scope.CheckLogin).to.be.true;
		expect(location.path()).to.equal('/accounts');
		expect(scope.last_access_date).to.be.equal(1475248462283);
		expect(scope.last_access_media).to.be.equal('SPA');
		expect(scope.client_name).to.contain('Juan Perez');
	});

	it('should manage errors in login', function(){
		scope.auth = {'new_condition_action': 'N'};
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('POST', scope.restAPIBaseUrl + '/login')
			.respond(function(){
				return [400, ''];
			});
		scope.login();
		http.flush();		
		expect(scope.logining).to.be.false;
	})

	it('should foward to /password', function(){
		scope.password();
		expect(location.path()).to.equal('/password');		
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
