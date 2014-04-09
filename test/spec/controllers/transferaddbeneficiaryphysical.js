'use strict';

describe('Controller: TransferaddbeneficiaryphysicalCtrl', function () {

  // load the controller's module
  beforeEach(module('mfmFrontSpaApp'));

  var TransferaddbeneficiaryphysicalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransferaddbeneficiaryphysicalCtrl = $controller('TransferaddbeneficiaryphysicalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
