'use strict';

describe('Service: CoffeeShopFactory', function() {

  // load the service's module
  beforeEach(module('coffeeShopApp'));

  // instantiate service
  var CoffeeShopFactory;
  beforeEach(inject(function(_CoffeeShopFactory_) {
    CoffeeShopFactory = _CoffeeShopFactory_;
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
    expect(shop1).toEqual({
      id: 'abczyzitem1',
      title: 'Highland',
      address: '',
      phone: '',
      country: '',
      city: '',
      district: '',
      mainImage: null,
      menu: Object({}),
      dateCreate: '',
      isOperational: '',
      rate: ''
    });
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

});
