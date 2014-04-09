'use strict';

describe('Controller: TransferAddBeneficiaryMoralCtrl', function () {

  // load the controller's module
  beforeEach(module('mfmFrontSpaApp'));

  var TransferAddBeneficiaryMoralCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransferAddBeneficiaryMoralCtrl = $controller('TransferAddBeneficiaryMoralCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
