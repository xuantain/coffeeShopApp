'use strict';

describe('Service: CoffeeShopFactory', function () {

  // load the service's module
  beforeEach(module('coffeeShopApp'));

  // instantiate service
  var CoffeeShopFactory;
  beforeEach(inject(function (_CoffeeShopFactory_) {
    CoffeeShopFactory = _CoffeeShopFactory_;
  }));

  it('should do something', function () {
    expect(!!CoffeeShopFactory).toBe(true);
  });

});
