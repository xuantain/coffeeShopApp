'use strict';

/**
 * @ngdoc service
 * @name coffeeShopApp.CoffeeShopFactory
 * @description
 * # CoffeeShopFactory
 * Service in the coffeeShopApp.
 */
angular.module('coffeeShopApp')
  .factory('CoffeeShopFactory', function() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var coffeeShopFunctionality = {
      save: function() {
        this.dateModified = Date.now();
      }
    };

    var defaultAttributes = {
      'id': '',
      'title': '',
      'address': '',
      'phone': '',
      'country': '',
      'city': '',
      'district': '',
      'mainImage': null,
      'menu': {},
      'dateCreate': '',
      'isOperational': '',
      'rate': ''
    };

    var createFn = function(options) {
      var property;
      var shopWithFunctionality = Object.create(coffeeShopFunctionality);
      // Add all info which was sent by caller to the coffee shop
      for (property in options) {
        if (options.hasOwnProperty(property)) {
          shopWithFunctionality[property] = options[property];
        }
      }
      // Add all expected attributes to the coffee shop
      for (property in defaultAttributes) {
        if (defaultAttributes.hasOwnProperty(property)) {
          shopWithFunctionality[property] = options[property] || defaultAttributes[property];
        }
      }

      shopWithFunctionality.addNewMenuItem = function(name, menuItem) {
        if(menuItem !== null) {
          this.menu[name] = menuItem;
          // Add new menuItem to menu
        }
      };

      return shopWithFunctionality;
    };

    return {
      create: createFn
    };
  });
