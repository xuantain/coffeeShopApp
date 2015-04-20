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

    this.getAll = function(sucessFunction, failFunction) {
        $http.get(appSettings.db + '/_design/pages/_view/getAll')
        .success(function(data) {
            // Can call another function as a callback or simply write in the variable
            sucessFunction(data.rows);
            return;
        })
        .error(function(errorItem) {
            alert('an error ocurred in Get All' + errorItem);
        });
    };
    this.getAllByCountry = function(country) {};
    this.getAllByCity = function(city) {};
    this.getAllByDistrict = function(district) {};
    this.getAllByLocation = function(location) {};
    this.getByName = function(name) {
    	$http.get(appSettings.db + '/_design/pages/_view/getByLocation')
    	.success(function(data) {
            // Can call another function as a callback or simply write in the variable
            return;
    	})
    	.error(function() {
    		alert('an error ocurred in getByLocation');
    	});
    };

    this.put = function() {
        $http.put(appSettings.db + '/_design/pages/_view/getByLocation')
        .success(function(data) {
            return data.rows;
        })
        .error(function() {
            alert('an error ocurred in getByLocation 2');
        });  
    };
    this.update = function(coffeeShop) {};
    this.delete = function(coffeeShop) {};
    this.deleteById = function(id) {};
  });
