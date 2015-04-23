'use strict';

describe('Directive: coffee-shop', function() {

  // load the controller's module
  beforeEach(module('coffeeShopApp'));
  beforeEach(module('views/coffee-shop.html'));

  var elm, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($compile, $rootScope, $injector) {
    // $httpBackend = $injector.get('$httpBackend');
    // $httpBackend.whenGET('coffee-shop').respond('<div>{{shop.title}}</div>');
    scope = $rootScope.$new();
    scope.coffeeShops = [{
      '_id': '9j30aiwjja39ij9a3928jozs3',
      'title': 'HighLand',
      'address': 'Bach Dang',
      'phone': '1234567890'
    }, {
      'title': 'Work in progress',
    }];
    elm = angular.element('<div><coffee-shop ng-repeat="shop in coffeeShops"></coffee-shop></div>');
    elm = $compile(elm)(scope);
    scope.$digest();
  }));

  it('Tag h3 should return title not null', function() {
    expect(elm.find('h3').eq(0)).not.toBeNull();
    expect(elm.find('h3').eq(0).text()).toBe(scope.coffeeShops[0].title);
  });

  describe('images', function() {

    it('should have a button to add pictures', function() {
      expect(elm.find('coffee-shop').length).toEqual(2);
      var firstShopDirective = angular.element(elm.find('coffee-shop')[0]);
      expect(firstShopDirective).toBeDefined();
      expect(firstShopDirective.find('button').length).toEqual(2);
      expect(firstShopDirective.find('button').eq(0).text()).toEqual('Add Pictures');
    });

    it('should be able to add pictures', function() {
      var firstCoffeeShopDirective = angular.element(elm.find('coffee-shop')[0]);
      expect(firstCoffeeShopDirective.scope().shop).toBeDefined();
      expect(firstCoffeeShopDirective.scope().shop._id).toBeDefined();
      expect(firstCoffeeShopDirective.scope().addPictures()).toEqual('Not supported');
    });

    it('should refuse to add pictures if it hasnt been saved', function() {
      var secondCoffeeShopDirective = angular.element(elm.find('coffee-shop')[1]);
      expect(secondCoffeeShopDirective.scope()).toBeDefined();
      expect(secondCoffeeShopDirective.scope().shop).toBeDefined();
      expect(secondCoffeeShopDirective.scope()._id).toBeFalsy();
      expect(secondCoffeeShopDirective.scope().addPictures()).toEqual('Must save');
    });

  });

  // Update this testcase for testing event was triggered by element
  xit('should be deleted when click btn delete', function() {
    expect(elm.find('button')).toBeTruthy();
    // var e = window.document.createEvent('UIEvents');
    // e.initEvent('click', true, true);
    // elm.find('button').dispatchEvent(e);
    elm.find('button').eq(0).triggerHandler('click');
    console.log(elm);
    expect(scope.coffeeShops.length).toBe(0);
    // expect(elm).toBeNull();
  });

});