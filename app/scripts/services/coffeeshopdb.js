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

    this.getAll = function(successFunction, failFunction) {
      $http.get(appSettings.db + '/_design/pages/_view/getAll')
      .success(function(data) {
        // Can call another function as a callback or simply write in the variable
        successFunction(data.rows);
        return;
      })
      .error(function(errorItem) {
        // failFunction(errorItem);
        alert('an error ocurred in Get All' + errorItem);
      });
    };

    this.getAllByCountry = function(country, successFunction, failFunction) {};
    this.getAllByCity = function(city, successFunction, failFunction) {};
    this.getAllByDistrict = function(district, successFunction, failFunction) {};
    
    this.getAllByLocation = function(location, successFunction, failFunction) {
      $http.get(appSettings.db + '/_design/pages/_view/getByLocation?location=' + location)
      .success(function(data) {
        // Can call another function as a callback or simply write in the variable
        successFunction(data.rows);
        return;
      })
      .error(function(errorItem) {
        // failFunction(errorItem);
        alert('an error ocurred in getByLocation');
      });
    };

    this.getByName = function(name, successFunction, failFunction) {
    	$http.get(appSettings.db + '/_design/pages/_view/getByLocation')
    	.success(function(data) {
        // Can call another function as a callback or simply write in the variable
        successFunction(data.rows);
        return;
    	})
      .error(function(errorItem) {
        // failFunction(errorItem);
    		alert('an error ocurred in getByLocation');
    	});
    };

    this.put = function(successFunction, failFunction) {
      $http.put(appSettings.db)
      .success(function(data) {
        successFunction(data.rows);
        return;
      })
      .error(function(errorItem) {
        // failFunction(errorItem);
        alert('an error ocurred in getByLocation 2');
      });  
    };

    this.update = function(coffeeShop) {};
    this.delete = function(coffeeShop) {};
    this.deleteById = function(id) {};
  });
