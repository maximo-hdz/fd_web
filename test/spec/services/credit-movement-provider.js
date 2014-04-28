'use strict';

describe('Service: creditMovementProvider', function () {

  // load the service's module
  beforeEach(module('spaApp'));

  // instantiate service
  var creditMovementProvider;
  beforeEach(inject(function (_creditMovementProvider_) {
    creditMovementProvider = _creditMovementProvider_;
  }));

  it('should do something', function () {
    expect(!!creditMovementProvider).toBe(true);
  });

});
