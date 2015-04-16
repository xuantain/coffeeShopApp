'use strict';

describe('Service: MenuItemFactory', function () {

  // load the service's module
  beforeEach(module('coffeeShopApp'));

  // instantiate service
  var MenuItemFactory;
  beforeEach(inject(function (_MenuItemFactory_) {
    MenuItemFactory = _MenuItemFactory_;
  }));

  it('should be create complete menuItem', function () {
    var item1 = MenuItemFactory.create({
      'id': 'abcxyzmenuitem1',
      'title': 'cafe Sua'
    });

    expect(item1).toBeDefined();
    expect(item1).toEqual({
      'id': 'abcxyzmenuitem1',
      'title': 'cafe Sua',
      'category': '',
      'price': '',
      'description': ''
    });
  });

});
