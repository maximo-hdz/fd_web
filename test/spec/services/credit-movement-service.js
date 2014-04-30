'use strict';

describe('Service: CreditMovementService', function () {

  // load the service's module
  beforeEach(module('spaApp'));

  // instantiate service
  var CreditMovementService;
  beforeEach(inject(function (_CreditMovementService_) {
    CreditMovementService = _CreditMovementService_;
  }));

  it('should do something', function () {
    expect(!!CreditMovementService).toBe(true);
  });

});
