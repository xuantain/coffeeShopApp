'use strict';

describe('Service: privateConstants', function () {

  // load the service's module
  beforeEach(module('coffeeShopApp'));

  // instantiate service
  var privateConstants;
  beforeEach(inject(function (_privateConstants_) {
    privateConstants = _privateConstants_;
  }));

  it('should do something', function () {
    expect(!!privateConstants).toBe(true);
  });

});
