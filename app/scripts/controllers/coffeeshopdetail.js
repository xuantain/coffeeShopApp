'use strict';

/**
 * @ngdoc function
 * @name coffeeShopAppApp.controller:CoffeeshopdetailCtrl
 * @description
 * # CoffeeshopdetailCtrl
 * Controller of the coffeeShopApp
 */
angular.module('coffeeShopApp')
  .controller('CoffeeshopDetailCtrl', function ($scope, $http, $routeParams, localStorageService) {
  	
    $scope.coffeeShops = localStorageService.get('coffeeShops');

  	$scope.whichShop = $routeParams.shopID;
  	if($scope.whichShop) {
  		$scope.shop = $scope.coffeeShops[$scope.whichShop];
  	}
  	console.log($scope.whichShop);

    $scope.$watch(function(){
      localStorageService.set('coffeeShops', $scope.coffeeShops);
    }, true);

  });
