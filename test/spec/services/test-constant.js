'use strict';

describe('Service: testConstant', function () {

  // load the service's module
  beforeEach(module('mfmFrontSpaApp'));

  // instantiate service
  var testConstant;
  beforeEach(inject(function (_testConstant_) {
    testConstant = _testConstant_;
  }));

  it('should do something', function () {
    expect(!!testConstant).toBe(true);
  });

});
