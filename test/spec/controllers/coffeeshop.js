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
        'title': 'HighLand',
        'address': 'Bach Dang',
        'phone': '1234567890'
      },
      {
        'title': 'Billiard 34',
        'address': 'Thai Phien',
        'phone': '1230987456'
      },
      {
        'title': 'Cherry',
        'address': 'Nguyen Chi Thanh',
        'phone': '0123654789'
      },
      {
        'title': 'Coc',
        'address': 'Quang Trung',
        'phone': '0123654789'
      }
    ];
  }));

  it('should attach a list of coffeeShop to the scope', function () {
    expect(scope.coffeeShops).not.toBeNull();
    expect(scope.coffeeShops.length).toBeGreaterThan(0);
  });

  it('should add a new shop to coffeeShops', function () {
    var before = scope.coffeeShops.length;
    scope.shop = {
        'title': 'Molly Coffee',
        'address': 'Street',
        'phone': '0905xxxyyy'
    };
    scope.addNewShop();
    expect(scope.coffeeShops.length).toBe(before + 1);
  });

  it('no new shop added to coffeeShops when scope.shop = {}', function () {
    var before = scope.coffeeShops.length;
    scope.shop = {};
    scope.addNewShop();
    expect(scope.coffeeShops.length).toBe(before);
  });

  it('no new shop added to coffeeShops when scope.shop is empty', function () {
    var before = scope.coffeeShops.length;
    scope.shop = '';
    scope.addNewShop();
    expect(scope.coffeeShops.length).toBe(before);
  });

  it('no new shop added to coffeeShops when scope.shop.title is empty or blank', function () {
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

  it('no new shop added to coffeeShops when scope.shop had existed', function () {
    var before = scope.coffeeShops.length;
    scope.shop = {
        'title': 'HighLand',
        'address': 'DEF Street',
        'phone': '0905xxxyyy'
    };
    scope.addNewShop();
    expect(scope.coffeeShops.length).toBe(before);
  });

  it('should remove a shop from coffeeShops', function () {
    var before = scope.coffeeShops.length;
    scope.removeShop(scope.coffeeShops[0]);
    expect(scope.coffeeShops.length).toBe(before - 1);
  });
  
  it('no shop removed from coffeeShops when param: shop is not existed in coffeeShops', function () {
    var before = scope.coffeeShops.length;
    var shop = {
        'title': 'demo coffeeShop',
        'address': 'Street',
        'phone': '0905xxxyyy'
    };
    scope.removeShop(shop);
    expect(scope.coffeeShops.length).toBe(before);
  });
    
});
