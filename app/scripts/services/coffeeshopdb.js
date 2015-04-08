'use strict';

/**
 * @ngdoc service
 * @name coffeeShopApp.coffeeShopDB
 * @description
 * # coffeeShopDB
 * Service in the coffeeShopApp.
 */
angular.module('coffeeShopApp')
  .service('coffeeShopDB', function coffeeShopDB($q, $http, appInfo) {

    this.getAll = function() {};
    this.getAllByCountry = function(country) {};
    this.getAllByCity = function(city) {};
    this.getAllByDistrict = function(district) {};
    this.getAllByLocation = function(location) {};
    this.getByName = function(name) {
    	$http.get(appInfo.servicePath + '/' + appInfo.dbName)
    	.success(function(data) {
    		// TODO: return data
            return data;
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
