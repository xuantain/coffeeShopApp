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
		if(jsonToCheck.constructor === objectConstructor){
		    var outPutValue = JSON.stringify(jsonToCheck);
		    try {
		        JSON.parse(outPutValue);
		        return true;
		    } catch(err) {
	            return false;
		    }
		}
		return false;
	};
});
