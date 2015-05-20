'use strict';

/**
 * @ngdoc function
 * @name coffeeShopApp.controller:CoffeeshopCtrl
 * @description
 * # CoffeeshopCtrl
 * Controller of the coffeeShopApp
 */
angular.module('coffeeShopApp')
  .controller('CoffeeshopCtrl', function ($scope, $http, $routeParams, localStorageService, Common, coffeeShopDB) {

    $scope.fetchDataFromDB = function(returData) {
      if (returData) {
        $scope.coffeeShops = [];
        for (var i = returData.length - 1; i >= 0; i--) {
          $scope.coffeeShops.push(returData[i].value);
        }
      }
    };

  	$scope.addNewShop = function() {
      if(Common.isObjJSON($scope.shop) && (undefined !== $scope.shop.title) && 
        ($scope.shop.title.trim().length !== 0)) {
        var isAddNew = false;
        $scope.theSameShops = $scope.theSameShops || [];
        if($scope.theSameShops.length > 0) {
          isAddNew = true;
        } else {
          var title = $scope.shop.title.toLowerCase();
          angular.forEach($scope.coffeeShops, function(coffeeShop) {
            if((coffeeShop.title.toLowerCase().search(title) > -1) || 
              (title.search(coffeeShop.title.toLowerCase()) > -1)) {
              $scope.theSameShops.push(coffeeShop);
            }
          });
          if($scope.theSameShops.length === 0) {
            isAddNew = true;
          }
        }
        if(isAddNew) {
          $scope.coffeeShops.push($scope.shop);
          $scope.theSameShops = [];
          $scope.shop = '';
        }
  	}};

  	$scope.removeShop = function(shop) {
      var index = -1;
      if((index = $scope.coffeeShops.indexOf(shop)) > -1) {
  		  $scope.coffeeShops.splice(index, 1);
      }
  	};

    $scope.updateShop = function(shop) {
      var index = -1;
      if((index = $scope.coffeeShops.indexOf(shop)) > -1) {
        if((undefined !== $scope.shop.address) && ($scope.shop.address.trim().length !== 0)) {
          shop.address = $scope.shop.address;
          shop.phone = $scope.shop.phone;
          $scope.coffeeShops[index] = shop;
          //reset all: scope.theSameShops + scope.shop
          $scope.theSameShops = [];
          $scope.shop = '';
        } else {

        }
        return;
      }
      throw new Error(shop + ' is not exist!');
    };

    $scope.updateData = function() {
      try {
        localStorageService.set('coffeeShops', '');
        $scope.coffeeShops = coffeeShopDB.getAll($scope.fetchDataFromDB);
      } catch (error) {
        alert('Occur error when updateData() ' + error);
      }
    };

    $scope.getLocation = function() {
      $.ajax( { 
        url: '//freegeoip.net/json/', 
        type: 'POST', 
        dataType: 'jsonp',
        success: function(location) {
          $scope.$apply(function() {
            // example where I update content on the page.
            // $('#city').html(location.city);
            // $('#region-code').html(location.region_code);
            // $('#region-name').html(location.region_name);
            // $('#areacode').html(location.areacode);
            // $('#ip').html(location.ip);
            // $('#zipcode').html(location.zipcode);
            // $('#longitude').html(location.longitude);
            // $('#latitude').html(location.latitude);
            // $('#country-name').html(location.country_name);
            // $('#country-code').html(location.country_code);

            $scope.country_code = location.country_code.toLowerCase();

            // console.log(location.city);
            // console.log(location.region_name);
            // console.log(location.region_code);
            // console.log(location.areacode);
            // console.log(location.ip);
            // console.log(location.zipcode);
            // console.log(location.longitude);
            // console.log(location.latitude);
            // console.log(location.country_name);
            // console.log(location.country_code);

          }, true);
        } // end of success
      });
    };


    $scope.mapclick = function(e) {
      $scope.latitude = e.latLng.A;
      $scope.longitude = e.latLng.F;
      console.log(e.latLng.A);
      console.log(e.latLng.F);
    };    

    $scope.$watch(function() {
      localStorageService.set('coffeeShops', $scope.coffeeShops);
    }, true);

    var shopsInStore = localStorageService.get('coffeeShops');
    $scope.coffeeShops = shopsInStore || coffeeShopDB.getAll($scope.fetchDataFromDB);

    $scope.getLocation();

    $scope.whichShop = $routeParams.shopID;
    if( $scope.coffeeShops && ($scope.coffeeShops.length > 0) && $scope.whichShop ) {
      $scope.shop = $scope.coffeeShops[$scope.whichShop];
    }
    
  });

