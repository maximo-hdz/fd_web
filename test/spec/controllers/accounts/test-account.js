'use strict';

describe('Controller: AccountsCtrl', function () {

  // load the controller's module
  beforeEach(module('spaApp'));

  var AccountsTestAccountCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountsTestAccountCtrl = $controller('AccountsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
