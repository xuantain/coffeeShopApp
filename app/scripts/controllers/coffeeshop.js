'use strict';

/**
 * @ngdoc function
 * @name coffeeShopApp.controller:CoffeeshopCtrl
 * @description
 * # CoffeeshopCtrl
 * Controller of the coffeeShopApp
 */
angular.module('coffeeShopApp')
  .controller('CoffeeshopCtrl', function ($scope, $http, $routeParams, $filter, 
                    localStorageService, Common, coffeeShopDB, CoffeeShopFactory) {

    $scope.fetchDataFromDB = function(returData) {
      if (returData) {
        $scope.coffeeShops = [];
        for (var i = returData.length - 1; i >= 0; i--) {
          $scope.coffeeShops.push(returData[i].value);
        }
      }
    };

  	$scope.addNewShop = function() {
      if(Common.isObjJSON($scope.shop) && !Common.isNull($scope.shop.title)) {
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

  	$scope.removeShop = function(shopID) {
      var shopRemove = $scope.findShopByID(shopID);
      if ( shopRemove === null ) {
        throw new Error('shopID: ' + shopID + ' is not exist!');
      }
      var index = $scope.coffeeShops.indexOf(shopRemove);
      if( index > -1 ) {
  		  $scope.coffeeShops.splice(index, 1);
      }
  	};

    $scope.updateShop = function() {
      var updateProps = cloneObject($scope.shop);
      if ( updateProps._id !== $scope.currentShop._id ) {
        throw new Error(updateProps + ' is not exist!');
      }
      // check update title's value
      if ( updateProps.hasOwnProperty('title') && Common.isNull(updateProps.title) ) {
        alert('title is not null');
        return;
      }
      // check update address's value
      if ( updateProps.hasOwnProperty('address') && Common.isNull(updateProps.address) ) {
        alert('address is not null');
        return;
      }
      // check for each property
      var warn = false;
      for (var property in updateProps) {
        if (!updateProps.hasOwnProperty(property)) {
          continue;
        } 
        // check for sub properties
        if ( Common.isObjJSON(updateProps[property]) ) {
          for (var subProperty in updateProps[property]) {
            if ( $scope.currentShop[property].hasOwnProperty(subProperty) && 
                    !Common.isNull($scope.currentShop[property][subProperty]) &&
                     Common.isNull(updateProps[property][subProperty]) ) {
              warn = true;
            }
          }
        } // check for properties
        else if ( $scope.currentShop.hasOwnProperty(property) && 
                    !Common.isNull($scope.currentShop[property]) &&
                     Common.isNull(updateProps[property]) ) {
          warn = true;
        }
        $scope.currentShop[property] = updateProps[property];
      }
      $scope.isChanged = false;
      $scope.isChangeLocate = false;
      if (warn) {
        alert('Update shop successfully with warning');
      }
    };

    $scope.resetUpdateShop = function() {
      $scope.shop = cloneObject($scope.currentShop);
    };

    // Return 0: success; 1: conflict; 2: failure;
    $scope.addNewMenuItem = function(name, menuItem) {
      if(Common.isNull(name) || !Common.isObjJSON(menuItem) || Common.isNull(menuItem.price)
        ) {
        return 2;
      }
      if(this.menu[name] === menuItem) {
        return 1;
      }
      this.menu[name] = menuItem;
      return 0;
    };

    $scope.syncData = function() {
      try {
        localStorageService.set('coffeeShops', '');
        $scope.coffeeShops = coffeeShopDB.getAll($scope.fetchDataFromDB);
      } catch (error) {
        alert('Occur error when updateData() ' + error);
      }
    };

    $scope.getLocation = function() {
      jQuery.ajax( { 
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

            $scope.countryCode = location.country_code.toLowerCase();

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

    $scope.isChangeLocate = false;
    $scope.getCoordinates = function(e) {
      if(!$scope.isChangeLocate) {
        $scope.isChangeLocate = true;
      }
      $scope.shop.locate.latitude = e.latLng.A;
      $scope.shop.locate.longitude = e.latLng.F;
    };

    $scope.findShopByID = function(shopID) {
      var shops = $filter('filter')($scope.coffeeShops, { _id: shopID });
      return (shops.length > 0) ? shops[0] : null;
    };

    var cloneObject = function(srcObj) {
      // return JSON.parse(JSON.stringify(srcObj));
      return jQuery.extend(true, {}, srcObj);
    };

    var loadShopDetail = function(shopID) {
      // Detail page
      $scope.currentShop = null;
      $scope.isChanged = false;
      if( $scope.coffeeShops && ($scope.coffeeShops.length > 0) && 
          !Common.isNull(shopID) && (shopID.length === 32) ) {
        $scope.currentShop = $scope.findShopByID(shopID);
        $scope.shop = cloneObject($scope.currentShop);
      }
      $scope.$watchCollection('shop', function() {
        $scope.isChanged = !angular.equals($scope.currentShop, $scope.shop);
      });
      $scope.$watchCollection('shop.locate', function() {
        $scope.isChanged = !angular.equals($scope.currentShop.locate, $scope.shop.locate);
      });
    };

    var init = function() {
      var shopsInStore = localStorageService.get('coffeeShops');
      $scope.coffeeShops = shopsInStore || coffeeShopDB.getAll($scope.fetchDataFromDB);
      $scope.$watch(function() {
        localStorageService.set('coffeeShops', $scope.coffeeShops);
      }, true);
      $scope.getLocation();

      var shopID = $routeParams.shopID;
      if(shopID) {
        loadShopDetail(shopID);
      }
    };

    init();
    
  });

