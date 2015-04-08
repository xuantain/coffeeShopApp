'use strict';

describe('Service: coffeeShopDB', function () {

  // load the service's module
  beforeEach(module('coffeeShopApp'));

  // instantiate service
  var coffeeShopDB;
  beforeEach(inject(function (_coffeeShopDB_) {
    coffeeShopDB = _coffeeShopDB_;
  }));

  describe('Method: getAll', function () {

  });

  describe('Method: getAllByCountry', function () {

  });

  describe('Method: getAllByCity', function () {

  });

  describe('Method: getAllByDistrict', function () {

  });

  describe('Method: getAllByLocation', function () {

  });

  describe('Method: getByName', function () {
    
    it('should be return not null', function() {
      var results = coffeeShopDB.getByName('Evalyn');
      expect(results).not.toBeNull();
    });

  });

  describe('Method: put', function () {

  });

  describe('Method: update', function () {

  });

  describe('Method: delete', function () {

  });

  describe('Method: deleteById', function () {

  });

});
