var expect=chai.expect;

describe('test for directive',function(){

	var compile, rootScope, http;
	var fakedMainResponse=[];
	beforeEach(module('spaApp'));

	beforeEach(inject(function($compile, $rootScope, $http){
		compile = $compile;
		rootScope = $rootScope;
		http = $http;
	}));

});
