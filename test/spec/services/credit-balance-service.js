'use strict';

describe('Service: CreditBalanceService', function () {

  // load the service's module
  beforeEach(module('spaApp'));

  // instantiate service
  var CreditBalanceService;
  beforeEach(inject(function (_CreditBalanceService_) {
    CreditBalanceService = _CreditBalanceService_;
  }));

  it('should do something', function () {
    expect(!!CreditBalanceService).toBe(true);
  });

});
