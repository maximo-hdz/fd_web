'use strict';

describe('Service: authorizeProvider', function () {

  // load the service's module
  beforeEach(module('spaApp'));

  // instantiate service
  var authorizeProvider;
  beforeEach(inject(function (_authorizeProvider_) {
    authorizeProvider = _authorizeProvider_;
  }));

  it('should do something', function () {
    expect(!!authorizeProvider).toBe(true);
  });

});
