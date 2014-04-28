'use strict';

describe('Service: creditDetailProvider', function () {

  // load the service's module
  beforeEach(module('spaApp'));

  // instantiate service
  var creditDetailProvider;
  beforeEach(inject(function (_creditDetailProvider_) {
    creditDetailProvider = _creditDetailProvider_;
  }));

  it('should do something', function () {
    expect(!!creditDetailProvider).toBe(true);
  });

});
