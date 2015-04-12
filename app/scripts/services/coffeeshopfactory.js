'use strict';

/**
 * @ngdoc service
 * @name coffeeShopApp.CoffeeShopFactory
 * @description
 * # CoffeeShopFactory
 * Service in the coffeeShopApp.
 */
angular.module('coffeeShopApp')
  .service('CoffeeShopFactory', function() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var coffeeShopFunctionality = {
      save: function() {
        this.dateModified = Date.now();
      }
    };

    var defualtAttributes = {
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

    return {
      create: function(options) {
        var property;

        var shopWithFunctionality = Object.create(coffeeShopFunctionality);

        // Add all info which was sent by caller to the coffee shop
        for (property in options) {
          if (options.hasOwnProperty(property)) {
            shopWithFunctionality[property] = options[property];
          }
        }

        // Add all expected attributes to the coffee shop
        for (property in defualtAttributes) {
          if (defualtAttributes.hasOwnProperty(property)) {
            shopWithFunctionality[property] = shopWithFunctionality[property] || defualtAttributes[property];
          }
        }

        return shopWithFunctionality;
      }
    };
  });
