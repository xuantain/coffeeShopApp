'use strict';

/**
 * @ngdoc directive
 * @name coffeeShopApp.directive:coffeeShop
 * @description
 * # coffeeShop
 */
angular.module('coffeeShopApp')
  .directive('coffeeShop', function ($templateCache) {
    return {
      templateUrl: $templateCache.get('coffee-shop'),
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
