'use strict';

/**
 * @ngdoc directive
 * @name angularProjectApp.directive:coffeeShopSimilar
 * @description
 * # coffeeShopSimilar
 */
angular.module('angularProjectApp')
  .directive('coffeeShopSimilar', function ($templateCache) {
    return {
      templateUrl: $templateCache.get('coffee-shop-similar'),
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
