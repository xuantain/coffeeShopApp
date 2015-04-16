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
      'id': 'abczyzitem1',
      'title': 'Highland',
      'address': 'Bach Dang',
      'phone': '0905xxxyyy',
      'country': 'vn',
      'city': 'Da Nang',
      'district': 'Hai Chau',
      'mainImage': 0,
      '_attachments': {},
      'menu': {
        'cafe sua': {},
        'tra da': {}
      },
      'dateCreate': '2015-04-01',
      'isOperational': 'true',
      'rate': '3'
    });

    expect(shop1).toBeDefined();
    expect(shop1.address).toEqual('Bach Dang');
  });

  it('should be create complete coffee shops', function() {
    var shop1 = CoffeeShopFactory.create({
      'id': 'abczyzitem1',
      'title': 'Highland'
    });

    expect(shop1).toBeDefined();
    expect(shop1.id).toEqual('abczyzitem1');
    expect(shop1.title).toEqual('Highland');
    expect(shop1.address).toEqual('');
    expect(shop1.phone).toEqual('');
    expect(shop1.country).toEqual('');
    expect(shop1.city).toEqual('');
    expect(shop1.district).toEqual('');
    expect(shop1.mainImage).toBeNull();
    expect(shop1.menu).toEqual(Object({}));
    expect(shop1.dateCreate).toEqual('');
    expect(shop1.isOperational).toEqual('');
    expect(shop1.rate).toEqual('');
  });

  it('should be able to save', function() {
    var shop1 = CoffeeShopFactory.create({
      'id': 'abczyzitem1',
      'title': 'Highland',
      'address': 'Bach Dang',
      'phone': '0905xxxyyy',
      'country': 'vn',
      'city': 'Da Nang',
      'district': 'Hai Chau',
      'mainImage': 0,
      '_attachments': {},
      'menu': {
        'cafe sua': {},
        'tra da': {}
      },
      'dateCreate': '2015-04-01',
      'isOperational': 'true',
      'rate': '3'
    });

    expect(shop1.save).toBeDefined();
    shop1.save();
    expect(shop1.dateModified).toBeDefined();
  });

  it('should be able to add new menuItem', function() {
    var shop1 = CoffeeShopFactory.create({
      'id': 'abczyzitem1',
      'title': 'Highland',
      'address': 'Bach Dang',
      'phone': '0905xxxyyy',
      'country': 'vn',
      'city': 'Da Nang',
      'district': 'Hai Chau',
      'mainImage': 0,
      '_attachments': {},
      'menu': {
        'tra da': {}
      },
      'dateCreate': '2015-04-01',
      'isOperational': 'true',
      'rate': '3'
    });
    var menuItem1 = MenuItemFactory.create({
      'id': 'abcxyzmenuitem1',
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
    var shop1 = CoffeeShopFactory.create({
      'id': 'abczyzitem1',
      'title': 'Highland',
      'address': 'Bach Dang',
      'phone': '0905xxxyyy',
      'country': 'vn',
      'city': 'Da Nang',
      'district': 'Hai Chau',
      'mainImage': 0,
      '_attachments': {},
      'menu': {
        'tra da': {}
      },
      'dateCreate': '2015-04-01',
      'isOperational': 'true',
      'rate': '3'
    });
    var menuItem1 = MenuItemFactory.create({
      'id': 'abcxyzmenuitem1',
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
    var shop1 = CoffeeShopFactory.create({
      'id': 'abczyzitem1',
      'title': 'Highland',
      'address': 'Bach Dang',
      'phone': '0905xxxyyy',
      'country': 'vn',
      'city': 'Da Nang',
      'district': 'Hai Chau',
      'mainImage': 0,
      '_attachments': {},
      'menu': {
        'cafe sua': {},
        'tra da': {}
      },
      'dateCreate': '2015-04-01',
      'isOperational': 'true',
      'rate': '3'
    });
    // menuItem1 losing attributes: 'id', 'price'
    var menuItem1 = MenuItemFactory.create({
      'id': null,
      'title': 'Cafe Sua'
    });

    expect(shop1.addNewMenuItem).toBeDefined();
    // return 2 if added failure
    expect(shop1.addNewMenuItem('whiteCoffee', menuItem1)).toBe(2);
    expect(shop1.menu).toBeDefined();
    expect(shop1.menu.whiteCoffee).not.toBeDefined();
  });


});
