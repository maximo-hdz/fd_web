var expect=chai.expect;

describe('describe de pruebas',function(){

	var accountCtrl, scope;

	beforeEach(module('spaApp'));

	beforeEach(inject(function($controller,$rootScope){
		scope= $rootScope.$new();
		accountCtrl=$controller('AccountsCtrl',{
			$scope:scope
		});

		scope.account = {
                          '_account_id': "12",
                          'account_type': "SAVINGS_ACCOUNT"                  
                         };

	}));

	it('it de pruebas',function(){
		expect(scope.hideNotifications).to.be.false;
	});
	it('',function(){
		var account=scope.account;
		scope.selectAccount(account);
		expect(scope.hideNotifications).to.be.true;
	});	
});