'use strict';

describe('Service: privateConstants', function() {

  // load the service's module
  beforeEach(module('coffeeShopApp'));

  // instantiate service
  var privateConstants;
  beforeEach(inject(function(_privateConstants_) {
    privateConstants = _privateConstants_;
  }));

  it('should have your own private file', function() {
    expect(!!privateConstants).toBe(true);
  });

  it('should have your own private Google Maps API key', function() {
    expect(privateConstants.googleMapsAPI).toBeDefined();
    expect(privateConstants.googleMapsAPI.API_KEY).toBeDefined();
    expect(privateConstants.googleMapsAPI.API_KEY).not.toEqual('putyourprivatekeyhere_dontsharethiswithanyone');
  });

});
