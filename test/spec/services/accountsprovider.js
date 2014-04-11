'use strict';

describe('Service: accountsProvider', function () {

  // load the service's module
  beforeEach(module('spaAppApp'));

  // instantiate service
  var accountsProvider;
  beforeEach(inject(function (_accountsProvider_) {
    accountsProvider = _accountsProvider_;
  }));

  it('should do something', function () {
    expect(!!accountsProvider).toBe(true);
  });

});
