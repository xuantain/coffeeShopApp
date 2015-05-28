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

      // Return 0: success; 1: conflict; 2: failure;
      addNewMenuItem: function(name, menuItem) {
        if(Common.isNull(name) || !Common.isObjJSON(menuItem) || Common.isNull(menuItem.price)
          ) {
          return 2;
        }
        if(this.menu[name] === menuItem) {
          return 1;
        }
        this.menu[name] = menuItem;
        return 0;
      }, // End of shopWithFunctionality.addNewMenuItem()

      // Return 0: success; 1: warning; 2: failure;
      update: function(_updateProps_) {
        // Fix for -> ReferenceError: Strict mode forbids implicit creation of global property 'property' 
        //   in /media/xuantain/DATA/www/coffeeShopApp/app/scripts/services/coffeeshopfactory.js (line 43)
        var updateProps = _updateProps_;

        // check update title's value
        if ( updateProps.hasOwnProperty('title') && Common.isNull(updateProps['title']) ) {
          return 2;
        }
        // check for each property
        var returnCode = 0;
        for (var property in updateProps) {
          if (updateProps.hasOwnProperty(property)) {
            // check for sub properties
            if ( Common.isObjJSON(updateProps[property]) ) {
              for (var subProperty in updateProps[property]) {
                if ( this[property].hasOwnProperty(subProperty) && !Common.isNull(this[property][subProperty]) 
                          && Common.isNull(updateProps[property][subProperty]) ) {
                  returnCode = 1;
                }
              }
            } 
            // check for properties
            else if ( this.hasOwnProperty(property) && !Common.isNull(this[property]) 
                          && Common.isNull(updateProps[property]) ) {
              returnCode = 1;
            }
            this[property] = updateProps[property];
          }
        }
        return returnCode;
      } // End of shopWithFunctionality.update()
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
      return shopWithFunctionality;
    }; // End of CreateFn

    return {
      create: createFn
    };
});
