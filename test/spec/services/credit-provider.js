'use strict';

describe('Service: creditProvider', function () {

  // load the service's module
  beforeEach(module('spaApp'));

  // instantiate service
  var creditProvider;
  beforeEach(inject(function (_creditProvider_) {
    creditProvider = _creditProvider_;
  }));

  it('should do something', function () {
    expect(!!creditProvider).toBe(true);
  });

});
