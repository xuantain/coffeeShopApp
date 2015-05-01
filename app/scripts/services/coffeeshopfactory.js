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
    // AngularJS will instantiate a singleton by calling "new" on this function

    var coffeeShopFunctionality = {
      save: function() {
        this.dateModified = Date.now();
      }
    };

    var defaultAttributes = {
      '_id': '',
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
      'openingTimes': '',
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

      // Return 0: successfully; 1: conflict; 2: failure;
      shopWithFunctionality.addNewMenuItem = function(name, menuItem) {
        if(!Common.isObjJSON(menuItem) || Common.isNull(menuItem.id) || 
            Common.isNull(menuItem.title) || Common.isNull(menuItem.price)
          ) {
          return 2;
        }
        if(this.menu[name] === menuItem) {
          return 1;
        }
        this.menu[name] = menuItem;
        return 0;
      }; // End of shopWithFunctionality.addNewMenuItem

      return shopWithFunctionality;
    }; // End of CreateFn

    return {
      create: createFn
    };
});
