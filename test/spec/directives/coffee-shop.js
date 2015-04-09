'use strict';

describe('Directive: coffee-shop', function () {

  // load the controller's module
  beforeEach(module('templates'));
  beforeEach(module('coffeeShopApp'));

  var elm, scope, template, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($compile, $rootScope, $injector) {
      $httpBackend = $injector.get('$httpBackend');
      // $httpBackend.whenGET('coffee-shop').respond('<div>{{shop.title}}</div>');
      // $httpBackend.whenGET('views/coffee-shop.html').passThrough();
      scope = $rootScope.$new();
      scope.shop = {
          'title': 'HighLand',
          'address': 'Bach Dang',
          'phone': '1234567890'
      };
      elm = angular.element('<coffee-shop></coffee-shop>');
      console.log(elm);
      elm = $compile(elm)(scope);
      console.log(elm);
      scope.$apply();
  }));

  it('Tag h3 should return title not null', function () {
      expect(elm.find('h3')).not.toBeNull();
      expect(elm.find('h3').text()).toBe(scope.shop.title);
  });

  it('should be deleted when click btn delete', function () {
      expect(elm.find('button')).not.toBeNull();
      elm.find('button').click();
      expect(elm).toBeNull();
  });

});
