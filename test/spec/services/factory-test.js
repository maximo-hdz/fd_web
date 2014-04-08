'use strict';

describe('Service: factoryTest', function () {

  // load the service's module
  beforeEach(module('mfmFrontSpaApp'));

  // instantiate service
  var factoryTest;
  beforeEach(inject(function (_factoryTest_) {
    factoryTest = _factoryTest_;
  }));

  it('should do something', function () {
    expect(!!factoryTest).toBe(true);
  });

});
