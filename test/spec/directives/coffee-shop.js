'use strict';

describe('Directive: coffee-shop', function () {

  // load the controller's module
  beforeEach(module('coffeeShopApp'));
  beforeEach(module('views/coffee-shop.html'));

  var elm, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($compile, $rootScope, $injector) {
      // $httpBackend = $injector.get('$httpBackend');
      // $httpBackend.whenGET('coffee-shop').respond('<div>{{shop.title}}</div>');
      scope = $rootScope.$new();
      scope.coffeeShops = [
        {
          'title': 'HighLand',
          'address': 'Bach Dang',
          'phone': '1234567890'
        }
      ];
      elm = angular.element('<div><coffee-shop ng-repeat="shop in coffeeShops"></coffee-shop></div>');
      elm = $compile(elm)(scope);
      scope.$digest();
  }));

  it('Tag h3 should return title not null', function () {
      expect(elm.find('h3').eq(0)).not.toBeNull();
      expect(elm.find('h3').eq(0).text()).toBe(scope.coffeeShops[0].title);
  });

  // Update this testcase for testing event was triggered by element
  xit('should be deleted when click btn delete', function () {
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
