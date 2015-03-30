'use strict';

describe('Controller: CoffeeshopCtrl', function () {

  // load the controller's module
  beforeEach(module('angularProjectApp'));

  var CoffeeshopCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CoffeeshopCtrl = $controller('CoffeeshopCtrl', {
      $scope: scope
    });
    scope.coffeeShops = [
      {
        'title': 'demo1 coffeeShop',
        'address': 'ABC Street',
        'phone': '0905xxxyyy'
      },
      {
        'title': 'demo2 coffeeShop',
        'address': 'XYZ Street',
        'phone': '0905xxxyyy'
      },
      {
        'title': 'demo3 coffeeShop',
        'address': 'DEF Street',
        'phone': '0905xxxyyy'
      }
    ];
  }));

  it('should attach a list of coffeeShop to the scope', function () {
    expect(scope.coffeeShops).not.toBeNull();
    expect(scope.coffeeShops.length).toBeGreaterThan(0);
  });

  it('should add a new shop to coffeeShop', function () {
    var before = scope.coffeeShops.length;
    scope.shop = {
        'title': 'demo coffeeShop',
        'address': 'Street',
        'phone': '0905xxxyyy'
    };
    scope.addNewShop();
    expect(scope.coffeeShops.length).toBe(before + 1);
  });

  it('no new shop added to coffeeShop when scope.shop = {}', function () {
    var before = scope.coffeeShops.length;
    scope.shop = {};
    scope.addNewShop();
    expect(scope.coffeeShops.length).toBe(before);
  });

  it('no new shop added to coffeeShop when scope.shop is empty', function () {
    var before = scope.coffeeShops.length;
    scope.shop = '';
    scope.addNewShop();
    expect(scope.coffeeShops.length).toBe(before);
  });

  it('no new shop added to coffeeShop when scope.shop.title is empty or blank', function () {
    var before = scope.coffeeShops.length;
    scope.shop = {
        'title': '',
        'address': 'Street',
        'phone': '0905xxxyyy'
    };
    scope.addNewShop();
    expect(scope.coffeeShops.length).toBe(before);
    scope.shop = {
        'title': '   ',
        'address': 'Street',
        'phone': '0905xxxyyy'
    };
    scope.addNewShop();
    expect(scope.coffeeShops.length).toBe(before);
  });

  it('no new shop added to coffeeShop when scope.shop had existed', function () {
    var before = scope.coffeeShops.length;
    scope.shop = {
        'title': 'demo3 coffeeShop',
        'address': 'DEF Street',
        'phone': '0905xxxyyy'
      }
    scope.addNewShop();
    expect(scope.coffeeShops.length).toBe(before);
  });

  it('should remove a shop from coffeeShop', function () {
    var before = scope.coffeeShops.length;
    scope.removeShop(0);
    expect(scope.coffeeShops.length).toBe(before - 1);
  });
  
  it('no shop removed from coffeeShop when param: $index = -1', function () {
    var before = scope.coffeeShops.length;
    scope.removeShop(-1);
    expect(scope.coffeeShops.length).toBe(before);
  });
  
  it('no shop removed from coffeeShop when param: $index = out of range', function () {
    var before = scope.coffeeShops.length;
    scope.removeShop(before + 1);
    expect(scope.coffeeShops.length).toBe(before);
  });
  
});
