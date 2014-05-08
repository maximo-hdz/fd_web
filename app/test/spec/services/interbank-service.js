'use strict';

describe('Service: InterbankService', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var InterbankService;
  beforeEach(inject(function (_InterbankService_) {
    InterbankService = _InterbankService_;
  }));

  it('should do something', function () {
    expect(!!InterbankService).toBe(true);
  });

});
