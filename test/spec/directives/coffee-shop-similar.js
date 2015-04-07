'use strict';

describe('Directive: coffeeShopSimilar', function () {

  // load the directive's module
  beforeEach(module('coffeeShopApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<coffee-shop-similar></coffee-shop-similar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
  
});
