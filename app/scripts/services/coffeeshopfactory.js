'use strict';

/**
 * @ngdoc service
 * @name coffeeShopApp.CoffeeShopFactory
 * @description
 * # CoffeeShopFactory
 * Service in the coffeeShopApp.
 */
angular.module('coffeeShopApp')
  .factory('CoffeeShopFactory', function (Common) {

    var coffeeShopFunctionality = {
      save: function() {
        this.dateModified = Date.now();
      },
      // Return 0: success; 1: warning; 2: failure;
      update: function(shop) {
      }, // End of shopWithFunctionality.update()
      delete: function() {     
      }
    };

    var defaultAttributes = {
      '_id': '',
      'title': '',
      'address': '',
      'phone': '',
      'locate': {
        'country': '',
        'city': '',
        'latitude': '',
        'longitude': ''
      },
      'mainImage': null,
      'menu': {},
      'dateCreate': '',
      'isOperational': '',
      'openingTimes': '',
      'rate': ''
    };

    var createFn = function(options) {
      var property;
      var shopWithFunctionality = Object.create(coffeeShopFunctionality);
      // Add all expected attributes to the coffee shop
      for (property in defaultAttributes) {
        if (defaultAttributes.hasOwnProperty(property)) {
          shopWithFunctionality[property] = defaultAttributes[property];
        }
      }
      // Add all info which was sent by caller to the coffee shop
      for (property in options) {
        if (options.hasOwnProperty(property)) {
          shopWithFunctionality[property] = options[property];
        }
      }
      return shopWithFunctionality;
    }; // End of CreateFn

    return {
      create: createFn
    };
});
