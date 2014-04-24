'use strict';

describe('Service: CreditService', function () {

  // load the service's module
  beforeEach(module('spaApp'));

  // instantiate service
  var CreditService;
  beforeEach(inject(function (_CreditService_) {
    CreditService = _CreditService_;
  }));

  it('should do something', function () {
    expect(!!CreditService).toBe(true);
  });

});
