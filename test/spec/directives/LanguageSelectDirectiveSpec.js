var expect=chai.expect;

describe('test for directive',function(){

	var compile, rootScope, http;

	beforeEach(module('spaApp'));

	beforeEach(inject(function($compile, $rootScope, $http){
		compile = $compile;
		rootScope = $rootScope;
		http = $http;
	}));

	it('should do something', function(){
		http.when('GET', 'resources/locale-es_MX.json').respond([]);
		http.when('GET', 'resources/locale-en_US.json').respond([]);
		var element = compile("<div ngTranslateLanguageSelect></div>")(rootScope);
		rootScope.$digest();
	})

});
