'use strict';

describe('Controller: TransferAddBeneficiaryMoralConfirmCtrl', function () {

  // load the controller's module
  beforeEach(module('mfmFrontSpaApp'));

  var TransferAddBeneficiaryMoralConfirmCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransferAddBeneficiaryMoralConfirmCtrl = $controller('TransferAddBeneficiaryMoralConfirmCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
