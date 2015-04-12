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
        console.log("saving")
      }
    };

    return {
      create: function(options) {
        var shopWithFunctionality = Object.create(coffeeShopFunctionality);

        for (var property in options) {
          if (options.hasOwnProperty(property)) {
            shopWithFunctionality[property] = options[property];
          }
        }

        return shopWithFunctionality;
      }
    };
  });
