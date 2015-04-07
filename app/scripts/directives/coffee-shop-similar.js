'use strict';

/**
 * @ngdoc directive
 * @name coffeeShopApp.directive:coffeeShopSimilar
 * @description
 * # coffeeShopSimilar
 */
angular.module('coffeeShopApp')
  .directive('coffeeShopSimilar', function ($templateCache) {
    return {
      templateUrl: $templateCache.get('coffee-shop-similar'),
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
