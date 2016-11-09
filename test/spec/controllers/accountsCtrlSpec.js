var expect=chai.expect;

describe('describe de pruebas',function(){

	var accountCtrl, scope, location, http;
	var fakedMainResponse=[];

	beforeEach(module('spaApp'));

	beforeEach(inject(function($controller,$rootScope,$location,$httpBackend){
		scope= $rootScope.$new();
		location=$location;
		http=$httpBackend;
		accountCtrl=$controller('AccountsCtrl',{
			$scope:scope
		});
	}));

	it('should hide notifications on enter',function(){
		expect(scope.hideNotifications).to.be.false;
	});

	it('should bring accounts on enter',function(){
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('GET', scope.restAPIBaseUrl + '/accounts').respond({"balance":"test lo que tengo","accounts":[{"_account_id":"1669758-P","payment_date":1438318800000,"product_id":"02","account_number":"1669758","min_payment":"778.12","account_type":"LOAN_ACCOUNT","account_name":"Prestamo de credito"},{"_account_id":"14565-T","payment_date":1440910800000,"product_id":"04","account_number":"14565","min_payment":"7857.4","account_type":"CREDIT_ACCOUNT","account_name":"Tarjeta Credito"},{"_account_id":"150984860015-C","product_id":"09","account_number":"150984860015","cut_date":1435640400000,"available_balance":"0.0000","account_type":"SAVINGS_ACCOUNT","account_name":"CUENTA BÁSICA PARA EL PÚBLICO EN GENERAL"},{"_account_id":"1669458-C","product_id":"01","account_number":"1669458","cut_date":1435640400000,"available_balance":"98748.17","account_type":"SAVINGS_ACCOUNT","account_name":"Cuenta de ahorro"},{"amount_invested":"554","_account_id":"7564-I","product_id":"03","account_number":"7564","performance":"4.5","cut_date":1435640400000,"account_type":"INVESTMENT_ACCOUNT","account_name":"Cuenta inversion"}],"debit_balance":"test lo que debo"});
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.flush();
	});


	it('should manage error',function(){
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('GET', scope.restAPIBaseUrl + '/accounts')
			.respond(function(){
				return [400, ''];
			});
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.flush();
	});

	it('should redirect to accounts ',function(){
		scope.account = {'_account_id': "12", 'account_type': "SAVINGS_ACCOUNT"};
		var account=scope.account;
		scope.selectAccount(account);
		expect(scope.hideNotifications).to.be.true;
		expect(location.path()).to.equal('/accounts/12/saving');
	});

	it('should redirect to investment ',function(){
		scope.account = {'_account_id': "12", 'account_type': "INVESTMENT_ACCOUNT"};
		var account=scope.account;
		scope.selectAccount(account);
		expect(scope.hideNotifications).to.be.true;
		expect(location.path()).to.equal('/accounts/12/investment');
	});

	it('should redirect to loans ',function(){
		scope.account = {'_account_id': "12", 'account_type': "LOAN_ACCOUNT"};
		var account=scope.account;
		scope.selectAccount(account);
		expect(scope.hideNotifications).to.be.true;
		expect(location.path()).to.equal('/accounts/12/loan');
	});

	it('should redirect to credits ',function(){
		scope.account = {'_account_id': "12", 'account_type': "CREDIT_ACCOUNT"};
		var account=scope.account;
		scope.selectAccount(account);
		expect(scope.hideNotifications).to.be.true;
		expect(location.path()).to.equal('/accounts/12/credit');
	});

	it('should search the transactions', function(){
		scope.searchParams = {};
		scope.searchParams.startDate = '10/02/2013'
		scope.searchParams.endDate = '11/02/2013'
		scope.searchTransactions();
	});

	/*it('should get transactions ',function(){
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('GET', scope.restAPIBaseUrl + '/accounts').respond(fakedMainResponse);
		http.when('GET', scope.restAPIBaseUrl + '/accounts/12/transactions?search=date_start%3D11%2F11%2F11%26date_end%3D12%2F12%2F12').respond(fakedMainResponse);
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		scope.searchParams = {};
		scope.searchParams.startDate = '11/11/11';
		scope.searchParams.endDate = '12/12/12';
		scope.selectedAccountId = '12';
		scope.getTransactions();
		http.flush();
	});*/

});
