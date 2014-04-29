'use strict';

describe('Service: AuthorizeService', function () {

  // load the service's module
  beforeEach(module('spaApp'));

  // instantiate service
  var AuthorizeService;
  beforeEach(inject(function (_AuthorizeService_) {
    AuthorizeService = _AuthorizeService_;
  }));

  it('should do something', function () {
    expect(!!AuthorizeService).toBe(true);
  });

});
