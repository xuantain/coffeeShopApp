'use strict';

/**
 * @ngdoc service
 * @name angularProjectApp.common
 * @description
 * # common
 * Service in the angularProjectApp.
 */
angular.module('angularProjectApp')
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
	}
});
