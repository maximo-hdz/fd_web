var expect=chai.expect;

describe('test for filter',function(){

	var filter;

	beforeEach(module('spaApp'));

	beforeEach(inject(function($filter){
		filter = $filter('checkmark');
	}));

	it('should return the correct unicode character', function(){
		expect(filter(true)).to.contain('\u2713');
		expect(filter(false)).to.contain('\u2718');
	})

});
