'use strict';

describe('Service: InterBankService', function () {

  // load the service's module
  beforeEach(module('spaApp'));

  // instantiate service
  var InterBankService;
  beforeEach(inject(function (_InterBankService_) {
    InterBankService = _InterBankService_;
  }));

  it('should do something', function () {
    expect(!!InterBankService).toBe(true);
  });

});
