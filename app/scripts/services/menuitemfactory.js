'use strict';

/**
 * @ngdoc service
 * @name coffeeShopApp.MenuItemFactory
 * @description
 * # MenuItemFactory
 * Factory in the coffeeShopApp.
 */
angular.module('coffeeShopApp')
  .factory('MenuItemFactory', function () {
    
    var menuItemFunctionality = {
      save: function() {
        this.dateModified = Date.now();
      }
    };

    // Attributes required: 'id', 'title', 'price'
    var defaultAttributes = {
      'price': '',
      'currency': '',
      'category': '',
      'description': '',
      'image': ''
    };

    var createFn = function(options) {
      var property;
      var menuItemWithFunctionality = Object.create(menuItemFunctionality);
      for (property in options) {
        if(options.hasOwnProperty(property)) {
          menuItemWithFunctionality[property] = options[property];
        }
      }
      for (property in defaultAttributes) {
        if(defaultAttributes.hasOwnProperty) {
          menuItemWithFunctionality[property] = options[property] || defaultAttributes[property];
        }
      }
      return menuItemWithFunctionality;
    };

    return {
      create: createFn
    };
  });
