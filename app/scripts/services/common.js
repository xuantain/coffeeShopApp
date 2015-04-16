'use strict';

/**
 * @ngdoc service
 * @name coffeeShopApp.common
 * @description
 * # common
 * Service in the coffeeShopApp.
 */
angular.module('coffeeShopApp')
  .service('Common', function Common() {

  this.isObjJSON = function(jsonToCheck) {
    var objectConstructor = {}.constructor;
		if(this.isNull(jsonToCheck) || (jsonToCheck.constructor !== objectConstructor)) {
      return false;
    }

    var outPutValue = JSON.stringify(jsonToCheck);
    try {
      JSON.parse(outPutValue);
      return true;
    } catch(err) {
      return false;
    }
	}; // End of isObjJSON()

	this.isNull = function(obj) {
    if((obj === undefined) || (obj === null)) {
      return true;
    }
    if((typeof obj === 'string') && (obj.trim().length === 0)) {
      return true;
    }
    return false;
	}; // End of isNull()

});
