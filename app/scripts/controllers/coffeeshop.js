'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:CoffeeshopCtrl
 * @description
 * # CoffeeshopCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
  .controller('CoffeeshopCtrl', function ($scope, localStorageService) {
    
    $scope.coffeeShops = {};
  	var shopsInStore = localStorageService.get('coffeeShops');
  	$scope.coffeeShops = shopsInStore || [];
  	$scope.$watch(function(){
  		localStorageService.set('coffeeShops', $scope.coffeeShops);
  	}, true);
  	$scope.addNewShop = function() {
  		$scope.coffeeShops.push($scope.shop);
  		$scope.shop = '';
  	};
  	$scope.removeShop = function(index) {
  		$scope.coffeeShops.splice(index, 1);
  	};

  });
