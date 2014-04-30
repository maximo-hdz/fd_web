'use strict';

describe('Directive: persiana', function () {

  // load the directive's module
  beforeEach(module('spaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<persiana></persiana>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the persiana directive');
  }));
});
