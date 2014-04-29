'use strict';

describe('Service: creditBalanceProvider', function () {

  // load the service's module
  beforeEach(module('spaApp'));

  // instantiate service
  var creditBalanceProvider;
  beforeEach(inject(function (_creditBalanceProvider_) {
    creditBalanceProvider = _creditBalanceProvider_;
  }));

  it('should do something', function () {
    expect(!!creditBalanceProvider).toBe(true);
  });

});
