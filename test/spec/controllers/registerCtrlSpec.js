var expect=chai.expect;

describe('register test',function(){

	var registerCtrl, scope, http, location;
	var fakedMainResponse=[];

	beforeEach(module('spaApp'));

	beforeEach(inject(function($rootScope, $controller, $httpBackend, $location) {
		scope = $rootScope.$new();
		http = $httpBackend;
		location = $location;
		registerCtrl=$controller('RegisterCtrl',{$scope:scope});
	}))

	it('should logout', function(){
		scope.logout();
		expect(location.path()).to.equal('/logout');
	})

	it('should select an image', function(){
		scope.selectImage('id');
		expect(scope.dataRegister.image_id).to.equal('id');
	})

	it('should do nothing if it is the current section', function(){
		scope.selection = 1;
		scope.saltar(1);
	})

	it('should show a warning message on step 0', function(){
		scope.selection = 0;
		scope.register1 = {};
		scope.register1.$invalid = true;
		scope.saltar(1);
		expect(scope.warning.message).to.equal('001');
	})

	it('should show a warning message on step 1', function(){
		scope.selection = 1;
		scope.register2 = {};
		scope.register2.$invalid = true;
		scope.saltar(2);
		expect(scope.warning.message).to.equal('001');
	})

	it('should validate a minimun length of the password', function(){
		scope.dataRegister.new_password = '123';
		scope.register1 = {};
		scope.register1.$invalid = false;
		scope.saltar(1);
		expect(scope.warning.message).to.equal('002');
	});

	it('should validate that both passwords are equal', function(){
		scope.dataRegister.new_password = '12345678';
		scope.dataRegister.confirm_password = "87654321"
		scope.register1 = {};
		scope.register1.$invalid = false;
		scope.saltar(1);
		expect(scope.warning.message).to.equal('003');
	});

	it('should change to next section', function(){
		scope.dataRegister.new_password = '12345678';
		scope.dataRegister.confirm_password = "12345678"
		scope.register1 = {};
		scope.register1.$invalid = false;
		scope.saltar(1);
		expect(scope.selection).to.equal(1);
	});

	it('should go to the last section', function(){
		scope.register1 = {};
		scope.register1.$invalid = false;
		scope.dataRegister.new_password = '12345678';
		scope.selection = 2;
		scope.saltar(3)
		expect(scope.selection).to.equal(3);
	})

	it('should verify that there is an image', function(){
		scope.register2 = {};
		scope.register2.$invalid = false;
		scope.dataRegister.new_password = '12345678';
		scope.selection = 1;
		scope.saltar(2);
		expect(scope.warning.message).to.equal('004');
	})

	it('should change to next section', function(){
		scope.register2 = {};
		scope.register2.$invalid = false;
		scope.dataRegister.new_password = '12345678';
		scope.dataRegister.image_id = 'id';
		scope.selection = 1;
		scope.saltar(2);
		expect(scope.selection).to.equal(2);
	});

	it('should have different questions', function(){
		/*http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);*/
		scope.dataRegister.question2 = "1";
		scope.dataRegister.question1 = "1";
		scope.signup();
		expect(scope.warning.message).to.equal('005');
	})

	it('should register the user',function(){
		http.when('GET', 'views/dashboard.html').respond(fakedMainResponse);
		http.when('GET', 'views/partials/accounts/accounts.html').respond(fakedMainResponse);
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('POST', scope.restAPIBaseUrl + '/login').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		scope.dataRegister.question2 = "2";
		scope.dataRegister.question1 = "1";
		scope.signup();
		http.flush();
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
