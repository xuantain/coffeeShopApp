'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:CoffeeshopCtrl
 * @description
 * # CoffeeshopCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
  .controller('CoffeeshopCtrl', function ($scope, localStorageService, Common) {
    
    $scope.coffeeShops = {};
  	var shopsInStore = localStorageService.get('coffeeShops');
  	$scope.coffeeShops = shopsInStore || [];
  	$scope.$watch(function(){
  		localStorageService.set('coffeeShops', $scope.coffeeShops);
  	}, true);
  	$scope.addNewShop = function() {
      if(Common.isObjJSON($scope.shop) && (undefined !== $scope.shop.title) && 
        ($scope.shop.title.trim().length !== 0)) {
        var theSameObjs = [];
        var title = $scope.shop.title.toLowerCase();
        if(title.indexOf('coffee') > -1) {
          title.replace('coffee', '');
        }
        angular.forEach($scope.coffeeShops, function(coffeeShop) {
          if(coffeeShop.title.search(title)) {
            theSameObjs.push(coffeeShop);
          }
        });
        if(theSameObjs.length > 0) {
      		
        } else {
          $scope.coffeeShops.push($scope.shop);
          $scope.shop = '';
        }
  	}};
  	$scope.removeShop = function(index) {
      if((-1 < index) && (index < $scope.coffeeShops.length)) {
  		  $scope.coffeeShops.splice(index, 1);
      }
  	};

  });
