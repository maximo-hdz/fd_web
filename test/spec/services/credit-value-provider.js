'use strict';

describe('Service: creditValueProvider', function () {

  // load the service's module
  beforeEach(module('spaApp'));

  // instantiate service
  var creditValueProvider;
  beforeEach(inject(function (_creditValueProvider_) {
    creditValueProvider = _creditValueProvider_;
  }));

  it('should do something', function () {
    expect(!!creditValueProvider).toBe(true);
  });

});
