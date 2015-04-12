'use strict';

/**
 * @ngdoc service
 * @name coffeeShopApp.privateConstants
 * @description
 * # privateConstants
 * Service in the coffeeShopApp.
 */
angular.module('coffeeShopApp')
  .service('privateConstants', function () {
    return {
      googleMapsAPI : {
        API_KEY: 'putyourprivatekeyhere_dontsharethiswithanyone'
      }
    };
  });
