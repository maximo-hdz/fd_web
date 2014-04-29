'use strict';

describe('Service: CreditDetailService', function () {

  // load the service's module
  beforeEach(module('spaApp'));

  // instantiate service
  var CreditDetailService;
  beforeEach(inject(function (_CreditDetailService_) {
    CreditDetailService = _CreditDetailService_;
  }));

  it('should do something', function () {
    expect(!!CreditDetailService).toBe(true);
  });

});
