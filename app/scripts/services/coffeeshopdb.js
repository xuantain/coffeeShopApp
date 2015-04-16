'use strict';

/**
 * @ngdoc service
 * @name coffeeShopApp.coffeeShopDB
 * @description
 * # coffeeShopDB
 * Service in the coffeeShopApp.
 */
angular.module('coffeeShopApp')
  .service('coffeeShopDB', function coffeeShopDB($q, $http, appSettings) {

    this.getAll = function() {
        $http.get(appSettings.db + '/_design/coffeeShops/_view/getAll')
        .success(function(data) {
            return data.rows;
        })
        .error(function() {
            alert('an error ocurred');
        });
    };
    this.getAllByCountry = function(country) {};
    this.getAllByCity = function(city) {};
    this.getAllByDistrict = function(district) {};
    this.getAllByLocation = function(location) {};
    this.getByName = function(name) {
    	$http.get(appSettings.db + '/_design/coffeeShops/_view/getByLocation')
    	.success(function(data) {
            return data.rows;
    	})
    	.error(function() {
    		alert('an error ocurred');
    	});
    };

    this.put = function() {
        $http.put(appSettings.db + '/_design/coffeeShops/_view/getByLocation')
        .success(function(data) {
            return data.rows;
        })
        .error(function() {
            alert('an error ocurred');
        });  
    };
    this.update = function(coffeeShop) {};
    this.delete = function(coffeeShop) {};
    this.deleteById = function(id) {};
  });
