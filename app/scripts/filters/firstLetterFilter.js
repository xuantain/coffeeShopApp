'use strict';

/**
 * @ngdoc filter
 * @name coffeeShopApp.filter:firstLetterFilter
 * @function
 * @description
 * # reverseFilter
 * Filter in the coffeeShopApp.
 */
angular.module('coffeeShopApp')
  .filter('firstLetterFilter', ['Common', function (Common) {
    return function (items, letter) {
    	if((undefined === items) || (undefined === letter) || (letter.trim().length === 0)) {
    		return items;
    	}
    	var filtered = [];
    	for (var i = items.length - 1; i >= 0; i--) {
    		var item = items[i];
    		var strCompare = '';
    		if(Common.isObjJSON(item)) {
    			var firstKey = Object.keys(item)[0];
    			strCompare = item[firstKey];
    		} else {
    			strCompare = item;
    		}
    		if (strCompare.toLowerCase().indexOf(letter.toLowerCase()) === 0) {
    			filtered.push(item);
    		}
    	}
      	return filtered;
    };
  }]);
