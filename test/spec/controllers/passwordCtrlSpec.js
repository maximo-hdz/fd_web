var expect=chai.expect;

describe('test for accounts controller',function(){

	var passCtrl, scope, location, http;
	var fakedMainResponse=[];

	beforeEach(module('spaApp'));

	beforeEach(inject(function($controller,$rootScope,$location,$httpBackend){
		scope= $rootScope.$new();
		location=$location;
		http=$httpBackend;
		passCtrl=$controller('PasswordCtrl',{
			$scope:scope
		});
	}));

	it('should manage forget password', function(){
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('POST', scope.restAPIBaseUrl + '/unlockPasswordPrerequest').respond(fakedMainResponse);
		scope.pass = {};
		scope.pass.user_login = 'user_login';
		scope.forgetPassword();
		http.flush();
	});

	it('should manage forget password error', function(){
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('POST', scope.restAPIBaseUrl + '/unlockPasswordPrerequest').respond(function(){return [400, ''];});
		scope.pass = {};
		scope.pass.user_login = 'user_login';
		scope.forgetPassword();
		http.flush();
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

	it('should display errors', function(){
		scope.$broadcast('displayError',{message: 'error'});		scope.pass = {};

		expect(scope.danger.show).to.be.true;
		expect(scope.danger.message).not.to.be.empty;
	})

	it('should clear errors', function(){
		scope.$broadcast('clearError');
		expect(scope.danger.show).to.be.false;
		expect(scope.danger.message).to.be.empty;
	})

	it('should verify that both questions are diffent', function(){
		scope.pass = {};
		scope.pass.second_question_id = 1;
		scope.pass.first_question_id = 1;
		scope.forgetPasswordConfirmation();
	})

	it('should confirm password recovery', function(){
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('POST', scope.restAPIBaseUrl + '/unlockPasswordRequest').respond(fakedMainResponse);
		scope.pass = {};
		scope.pass.second_question_id = 1;
		scope.pass.first_question_id = 2;
		scope.pass.birth_date = '01/01/01';
		scope.forgetPasswordConfirmation();
		http.flush();
	})

	it('should manage error on confirm password recovery', function(){
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('POST', scope.restAPIBaseUrl + '/unlockPasswordRequest').respond(function(){return [400, ''];});
		scope.pass = {};
		scope.pass.second_question_id = 1;
		scope.pass.first_question_id = 2;
		scope.pass.birth_date = '01/01/01';
		scope.forgetPasswordConfirmation();
		http.flush();
	})

});
