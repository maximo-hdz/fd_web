'use strict';

describe('Service: CreditValueService', function () {

  // load the service's module
  beforeEach(module('spaApp'));

  // instantiate service
  var CreditValueService;
  beforeEach(inject(function (_CreditValueService_) {
    CreditValueService = _CreditValueService_;
  }));

  it('should do something', function () {
    expect(!!CreditValueService).toBe(true);
  });

});
