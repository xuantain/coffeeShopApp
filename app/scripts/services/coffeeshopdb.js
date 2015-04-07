'use strict';

/**
 * @ngdoc service
 * @name angularProjectApp.coffeeShopDB
 * @description
 * # coffeeShopDB
 * Service in the angularProjectApp.
 */
angular.module('angularProjectApp')
  .service('Coffeeshopdb', function Coffeeshopdb($q, $http, appInfo) {

    this.getAll = function() {};
    this.getAllByCountry = function(country) {};
    this.getAllByCity = function(city) {};
    this.getAllByDistrict = function(district) {};
    this.getAllByLocation = function(location) {};
    this.getByName = function(name) {
    	$http.get(appInfo.servicePath + '/' + appInfo.dbName)
    	.success(function(data) {
    		// TODO: return data
    	})
    	.error(function() {
    		alert('an error ocurred');
    	});
    };

    this.put = function() {};
    this.update = function(coffeeShop) {};
    this.delete = function(coffeeShop) {};
    this.deleteById = function(id) {};
  });
