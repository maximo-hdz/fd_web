'use strict';

describe('Controller: TransferAddBeneficiaryPhysicalCtrl', function () {

  // load the controller's module
  beforeEach(module('mfmFrontSpaApp'));

  var TransferAddBeneficiaryPhysicalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransferAddBeneficiaryPhysicalCtrl = $controller('TransferAddBeneficiaryPhysicalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
