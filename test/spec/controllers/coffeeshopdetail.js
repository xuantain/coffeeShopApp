'use strict';

describe('Controller: CoffeeshopdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('coffeeShopAppApp'));

  var CoffeeshopdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CoffeeshopdetailCtrl = $controller('CoffeeshopdetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
