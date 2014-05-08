'use strict';

describe('Service: interBankProvider', function () {

  // load the service's module
  beforeEach(module('spaApp'));

  // instantiate service
  var interBankProvider;
  beforeEach(inject(function (_interBankProvider_) {
    interBankProvider = _interBankProvider_;
  }));

  it('should do something', function () {
    expect(!!interBankProvider).toBe(true);
  });

});
