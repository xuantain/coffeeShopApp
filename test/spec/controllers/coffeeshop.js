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
        '_id': '9524be45788fe0930689fb8ef900d4f1',
        'title': 'HighLand',
        'address': 'Bach Dang',
        'phone': '1234567890'
      },
      {
        '_id': '1654be45788fe0930689fb8ef900d4f1',
        'title': 'Billiard 34',
        'address': 'Thai Phien',
        'phone': '1230987456'
      },
      {
        '_id': '7644be45788fe0930689fb8ef900d4f1',
        'title': 'Cherry',
        'address': 'Nguyen Chi Thanh',
        'phone': '0123654789'
      },
      {
        '_id': '9804be45788fe0930689fb8ef900d4f1',
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
      var numOfShop = scope.coffeeShops.length;
      scope.removeShop(scope.coffeeShops[0]._id);
      expect(scope.coffeeShops.length).toBe(numOfShop - 1);
    });
    
    it('no shop removed from coffeeShops when param: shop is not exist in coffeeShops', function () {
      var numOfShop = scope.coffeeShops.length;
      var shop = {
        '_id': 'abcxyzjdjkasdkla'
      };
      try {
        scope.removeShop(shop._id);
        expect(true).toBe(false);
      } catch (e) {
        expect(e).toEqual(new Error('shopID: ' + shop._id + ' is not exist!'));
      }
      expect(scope.coffeeShops.length).toBe(numOfShop);
    });
  });

  describe('Test method updateShop()', function() {

    it('no shop updated if the parameter passed is empty address', function() {
      scope.currentShop = scope.coffeeShops[3];
      scope.shop = JSON.parse(JSON.stringify(scope.currentShop));
      scope.shop.address = '';
      scope.updateShop();
      expect(scope.coffeeShops[3].address).not.toEqual('');
      expect(scope.coffeeShops[3].address).toBe(scope.currentShop.address);
    });
    
    it('no shop updated if the parameter passed is blank address', function() {
      scope.currentShop = scope.coffeeShops[3];
      scope.shop = JSON.parse(JSON.stringify(scope.currentShop));
      scope.shop.address = '   ';
      scope.updateShop();
      expect(scope.coffeeShops[3].address).not.toEqual('   ');
      expect(scope.coffeeShops[3].address).toBe(scope.currentShop.address);
    });
    
    it('no shop updated if the parameter passed is undefined address', function() {
      scope.currentShop = scope.coffeeShops[3];
      scope.shop = JSON.parse(JSON.stringify(scope.currentShop));
      scope.shop.address = undefined;
      scope.updateShop();
      expect(scope.coffeeShops[3].address).not.toBeUndefined();
      expect(scope.coffeeShops[3].address).toBe(scope.currentShop.address);
    });
    
    it('should throw Error if the parameter passed is a shop not exist)', function() {
      scope.currentShop = scope.coffeeShops[3];
      scope.shop = {
        'title': 'Coc',
        'address': 'undefined',
        'phone': '0123654789'
      };
      try {
        scope.updateShop();
        expect(true).toBe(false);
      } catch(e) {
        expect(e).toEqual(new Error(scope.shop + ' is not exist!'));
      }
    });

  });

});
