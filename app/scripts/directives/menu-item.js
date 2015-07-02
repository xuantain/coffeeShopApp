'use strict';

/**
 * @ngdoc directive
 * @name coffeeShopApp.directive:menuItem
 * @description
 * # menuItem
 */
angular.module('coffeeShopApp')
  .directive('menuItem', function ($templateCache) {
    return {
      templateUrl: $templateCache.get('menu-item'),
      restrict: 'EC',
      replace: true
    };
  });
