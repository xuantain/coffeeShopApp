'use strict';

describe('Service: Common', function () {

  // load the service's module
  beforeEach(module('coffeeShopApp'));

  // instantiate service
  var common;
  beforeEach(inject(function (_Common_) {
    common = _Common_;
  }));

  describe('Test isObjJSON()', function() {

    it('should return false when param is undefined', function () {
      var isUndefined = undefined;
      expect(common.isObjJSON(isUndefined)).toBe(false);
    });

    it('should return false when param is null', function () {
      var isNull = null;
      expect(common.isObjJSON(isNull)).toBe(false);
    });

    it('should return false when param is a function', function () {
      var iFn = function() { return 'demo';};
      expect(common.isObjJSON(iFn)).toBe(false);
    });

    it('should return false when param is a string', function () {
      var iString = 'This is a string';
      expect(common.isObjJSON(iString)).toBe(false);
    });

    it('should return false when param is a array', function () {
      var iArr = ['abc', 'xyz'];
      expect(common.isObjJSON(iArr)).toBe(false);
    });

    it('should return true when param is a object JSON', function () {
      var iJSON = {'title':'my demo'};
      expect(common.isObjJSON(iJSON)).toBe(true);
    });

    it('should return true when param is a object JSON empty', function () {
      var iJSON = {};
      expect(common.isObjJSON(iJSON)).toBe(true);
    });

  });

});
