'use strict';

describe('Controller: CoffeeshopCtrl', function () {

  // load the controller's module
  beforeEach(module('coffeeShopApp'));

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

  describe('Test method addNewShop()', function() {
    
    it('should add a new shop to coffeeShops when newShop is not exist yet', function () {
      var before = scope.coffeeShops.length;
      scope.shop = {
        'title': 'Molly Coffee',
        'address': 'Street',
        'phone': '0905xxxyyy'
      };
      scope.addNewShop();
      expect(scope.coffeeShops.length).toBe(before + 1);
    });

    it('should add a new shop to coffeeShops when have some shops are similar, but still addNew', function () {
      var before = scope.coffeeShops.length;
      scope.shop = {
        'title': 'Cherry Coffee',
        'address': 'Street',
        'phone': '0905xxxyyy'
      };
      scope.addNewShop();
      scope.addNewShop();
      expect(scope.coffeeShops.length).toBe(before + 1);
    });

    it('should add a new shop to coffeeShops when have some shops are similar, but countinue change shop.titlt and addNew', function () {
      var before = scope.coffeeShops.length;
      scope.shop = {
        'title': 'Cherry Coffee',
        'address': 'Street',
        'phone': '0905xxxyyy'
      };
      scope.addNewShop();
      scope.shop.title = 'Cherry C';
      scope.addNewShop();
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

    it('no new shop added to coffeeShops when scope.shop existed', function () {
      var before = scope.coffeeShops.length;
      scope.shop = {
        'title': 'HighLand',
        'address': 'DEF Street',
        'phone': '0905xxxyyy'
      };
      scope.addNewShop();
      expect(scope.coffeeShops.length).toBe(before);
    });
  });

  describe('Test method removeShop()', function() {

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
      
    it('no shop removed from coffeeShops when param: shop is mock obj', function () {
      var before = scope.coffeeShops.length;
      var shop = {
        'title': 'Coc',
        'address': 'Quang Trung',
        'phone': '0123654789'
      };
      scope.removeShop(shop);
      expect(scope.coffeeShops.length).toBe(before);
    });
      
    it('no shop removed from coffeeShops when param: shop is mock obj', function () {
      var before = scope.coffeeShops.length;
      var shop = {
        'title': 'Coc',
        'address': 'Quang Trung',
        'phone': '0123654789'
      };
      scope.removeShop(shop);
      expect(scope.coffeeShops.length).toBe(before);
    });
  });

  describe('Test method updateShop()', function() {

    it('no shop was updated when param is a shop (address is empty)', function() {
      var shopUpdate = scope.coffeeShops[3];
      scope.shop = {
        'title': 'Coc',
        'address': '',
        'phone': '0123654789'
      };
      scope.updateShop(shopUpdate);
      expect(scope.coffeeShops[3].address).not.toEqual('');
      expect(scope.coffeeShops[3].address).toBe(shopUpdate.address);
    });
    
    it('no shop was updated when param is a shop (address is blank)', function() {
      var shopUpdate = scope.coffeeShops[3];
      scope.shop = {
        'title': 'Coc',
        'address': '   ',
        'phone': '0123654789'
      };
      scope.updateShop(shopUpdate);
      expect(scope.coffeeShops[3].address).not.toEqual('   ');
      expect(scope.coffeeShops[3].address).toBe(shopUpdate.address);
    });
    
    it('no shop was updated when param is a shop (address is undefined)', function() {
      var shopUpdate = scope.coffeeShops[3];
      scope.shop = {
        'title': 'Coc',
        'address': undefined,
        'phone': '0123654789'
      };
      scope.updateShop(shopUpdate);
      expect(scope.coffeeShops[3].address).not.toBeUndefined();
      expect(scope.coffeeShops[3].address).toBe(shopUpdate.address);
    });
    
    it('should throw Error when param is a shop is not exist)', function() {
      var shopNotExist = {
        'title': 'Blabla',
        'address': 'undefined',
        'phone': '0123654789'
      };
      scope.shop = {
        'title': 'Coc',
        'address': 'undefined',
        'phone': '0123654789'
      };
      try {
        scope.updateShop(shopNotExist);
      } catch(e) {
        expect(e).toEqual(new Error(shopNotExist + ' is not exist!'));
      }
    });


  });

});
