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
        console.log(appSettings.db + '/_all_docs');
        $http.get('http://localhost:5984/_utils/database.html?coffee_shops/_design/coffeeShops/_view/getAll')
        .success(function(data) {
            // TODO: return data
            alert(data.rows);
            return data;
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
    	$http.get(appSettings.db)
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
