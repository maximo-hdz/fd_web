var expect=chai.expect;

describe('Test for the maps',function(){

	var mapCtrl, scope, location, http;
	var fakedMainResponse=[];
	var mapResponse = '{"geolocations":[{"id":"300","description":{"category":1.0,"address":{"street":"Test direccion 1","street2":"Test direccion 2","zipCode":"01234","city":"Distrito Federal"},"openingHours":{"SEM":"9:00 am a 17:00 pm","SAB":"Sin Servicio"}},"name":"test FD","coordinates":{"lng":-99.2582161,"lat":19.3690477}}]}';

	beforeEach(module('spaApp'));

	beforeEach(inject(function($controller,$rootScope,$location,$httpBackend){
		scope= $rootScope.$new();
		location=$location;
		http=$httpBackend;
		mapCtrl=$controller('MapCtrl',{
			$scope:scope
		});
	}));

	it('should open new window',function(){
		scope.selectedBranch({coordinates:{lat:1,lng:2}});
	});

	it('should search braches near to me', function(){
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', scope.restAPIBaseUrl + '/bankInformation/geolocation?').respond(mapResponse);
		scope.searchNearMe();
		http.flush();
	})

	it('should search braches', function(){
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', scope.restAPIBaseUrl + '/bankInformation/geolocation?lng=2&lat=1').respond(mapResponse);
		http.when('GET', scope.restAPIBaseUrl + '/bankInformation/geolocation?').respond(mapResponse);
		scope.details = {};
		scope.estado = {};
		scope.estado.lat = 1;
		scope.estado.lon = 2;
		scope.search();
		http.flush();
	})

	it('should search braches 2', function(){
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', scope.restAPIBaseUrl + '/bankInformation/geolocation?lng=2&lat=2').respond(mapResponse);
		http.when('GET', scope.restAPIBaseUrl + '/bankInformation/geolocation?').respond(mapResponse);
		scope.details = {geometry:{location:{k:2,D:2}}};
		scope.estado = {};
		scope.estado.lat = 2;
		scope.estado.lon = 2;
		scope.search();
		http.flush();
	})	

	it('should manage errors in search braches', function(){
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', scope.restAPIBaseUrl + '/bankInformation/geolocation?lng=2&lat=1').respond(function(){return [400, ''];});
		http.when('GET', scope.restAPIBaseUrl + '/bankInformation/geolocation?').respond(function(){return [400, ''];});
		scope.details = {};
		scope.estado = {};
		scope.estado.lat = 1;
		scope.estado.lon = 2;
		scope.search();
		http.flush();
	})

	it('should manage errors in search braches 2', function(){
		http.when('GET', 'resources/locale-es_MX.json').respond(fakedMainResponse);
		http.when('GET', 'resources/locale-en_US.json').respond(fakedMainResponse);
		http.when('GET', 'views/partials/authentication/login.html').respond(fakedMainResponse);
		http.when('GET', scope.restAPIBaseUrl + '/bankInformation/geolocation?lng=2&lat=2').respond(function(){return [400, ''];});
		http.when('GET', scope.restAPIBaseUrl + '/bankInformation/geolocation?').respond(function(){return [400, ''];});
		scope.details = {geometry:{location:{k:2,D:2}}};
		scope.estado = {};
		scope.estado.lat = 2;
		scope.estado.lon = 2;
		scope.search();
		http.flush();
	})	

});
