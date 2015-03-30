'use strict';

/**
 * @ngdoc directive
 * @name angularProjectApp.directive:coffeeShop
 * @description
 * # coffeeShop
 */
angular.module('angularProjectApp')
  .directive('coffeeShop', function ($templateCache) {
    return {
      templateUrl: $templateCache.get('coffee-shop'),
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
