'use strict';

describe('Directive: coffee-shop', function () {

  // load the controller's module
  beforeEach(module('angularProjectApp'));
  beforeEach(angular.module('ngTemplates'));

  var elm, scope, template;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    scope.shop = {
        'title': 'HighLand',
        'address': 'Bach Dang',
        'phone': '1234567890'
    };
    elm = angular.element('<coffee-shop></coffee-shop>');
      elm = $compile(elm)(scope);
      scope.$digest();
      // linkFn = $compile(elm);
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
