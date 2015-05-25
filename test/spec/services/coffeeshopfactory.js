'use strict';

describe('Service: CoffeeShopFactory', function() {

  // load the service's module
  beforeEach(module('coffeeShopApp'));

  // instantiate service
  var CoffeeShopFactory, MenuItemFactory;
  beforeEach(inject(function(_CoffeeShopFactory_, _MenuItemFactory_) {
    CoffeeShopFactory = _CoffeeShopFactory_;
    MenuItemFactory = _MenuItemFactory_;
  }));

  it('should be accept a json object', function() {
    var shop1 = CoffeeShopFactory.create({
      'title': 'Highland',
      'address': 'Bach Dang',
      'phone': '0905xxxyyy',
      'locate': {
        'country': 'vn',
        'city': 'Da Nang',
        'latitude': '',
        'longitude': ''
      },
      'mainImage': 0,
      '_attachments': {},
      'menu': {
        'cafe sua': {
          "price": "10000", 
          "currency": "VND"
        },
        'bac xiu': {
          "price": "15000", 
          "currency": "VND"
        }
      },
      'dateCreate': '2015-04-01',
      'isOperational': 'true',
      'openingTimes': '07:00-22:00',
      'rate': '3'
    });

    expect(shop1).toBeDefined();
    expect(shop1.address).toEqual('Bach Dang');
  });

  it('should be create complete coffee shops', function() {
    var shop1 = CoffeeShopFactory.create({
      'openingTimes': '07:00-22:00',
      'title': 'Highland'
    });

    expect(shop1).toBeDefined();
    expect(shop1.title).toEqual('Highland');
    expect(shop1.address).toEqual('');
    expect(shop1.phone).toEqual('');
    expect(shop1.locate.country).toEqual('');
    expect(shop1.locate.city).toEqual('');
    expect(shop1.mainImage).toBeNull();
    expect(shop1.menu).toEqual(Object({}));
    expect(shop1.dateCreate).toEqual('');
    expect(shop1.isOperational).toEqual('');
    expect(shop1.openingTimes).toEqual('07:00-22:00');
    expect(shop1.rate).toEqual('');
  });

  it('should be able to save', function() {
    var shop1 = CoffeeShopFactory.create({
      'title': 'Highland',
      'address': 'Bach Dang',
      'phone': '0905xxxyyy',
      'locate': {
        'country': 'vn',
        'city': 'Da Nang', 
        'latitude': '',
        'longitude': ''
      },
      'mainImage': 0,
      '_attachments': {},
      'menu': {
        'cafe sua': {
          "price": "10000", 
          "currency": "VND"
        },
        'bac xiu': {
          "price": "15000", 
          "currency": "VND"
        }
      },
      'dateCreate': '2015-04-01',
      'isOperational': 'true',
      'openingTimes': '07:00-22:00',
      'rate': '3'
    });

    expect(shop1.save).toBeDefined();
    shop1.save();
    expect(shop1.dateModified).toBeDefined();
  });

  describe('Test functionality addNewMenuItem(newItem)', function() {

    var shop1;

    beforeEach(function() {
      shop1 = CoffeeShopFactory.create({
        'title': 'Highland',
        'address': 'Bach Dang',
        'phone': '0905xxxyyy',
        'locate': {
          'country': 'vn',
          'city': 'Da Nang', 
          'latitude': '',
          'longitude': ''
        },
        'mainImage': 0,
        '_attachments': {},
        'menu': {
          'cafe sua': {
            "price": "15000", 
            "currency": "VND"
          }
        },
        'dateCreate': '2015-04-01',
        'isOperational': 'true',
        'openingTimes': '07:00-22:00',
        'rate': '3'
      });
    });

    it('should be able to add new menuItem', function() {
      var menuItem1 = MenuItemFactory.create({
        'title': 'Cafe Sua',
        'price': '7000VND'
      }); 

      expect(shop1.addNewMenuItem).toBeDefined();
      // return 0 if added successfully
      expect(shop1.addNewMenuItem('whiteCoffee', menuItem1)).toBe(0);

      expect(shop1.menu).toBeDefined();
      expect(shop1.menu.whiteCoffee).toBe(menuItem1);
    });

    it('should not able to add a menuItem is conflicted', function() {
      var menuItem1 = MenuItemFactory.create({
        'title': 'Cafe Sua',
        'price': '7000VND'
      });

      expect(shop1.addNewMenuItem).toBeDefined();
      // return 0 if added successfully
      expect(shop1.addNewMenuItem('whiteCoffee', menuItem1)).toBe(0);
      // return 1 if added was conflict
      expect(shop1.addNewMenuItem('whiteCoffee', menuItem1)).toBe(1);

      expect(shop1.menu).toBeDefined();
      expect(shop1.menu.whiteCoffee).toBe(menuItem1);
    });

    it('should not able to add a menuItem was not enough attributes required', function() {
      // menuItem1 losing attributes: 'id', 'price'
      var menuItem1 = MenuItemFactory.create({
        'title': 'Cafe Sua'
      });

      expect(shop1.addNewMenuItem).toBeDefined();
      // return 2 if added failure
      expect(shop1.addNewMenuItem('whiteCoffee', menuItem1)).toBe(2);
      expect(shop1.menu).toBeDefined();
      expect(shop1.menu.whiteCoffee).not.toBeDefined();
    });

  }); // End of Test for functionality addNewMenuItem(newItem)

  describe('Test functionality update()',function(){
    
  });

});
