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
    
    var demoCoffeeShops = [
      {
        'title': 'HighLand',
        'address': 'Bach Dang',
        'phone': '1234567890'
      },
      {
        'title': 'Billiard 34',
        'address': 'Thai Phien',
        'phone': '1230987456'
      },
      {
        'title': 'Cherry',
        'address': 'Nguyen Chi Thanh',
        'phone': '0123654789'
      },
      {
        'title': 'Coc',
        'address': 'Quang Trung',
        'phone': '0123654789'
      }
    ];
    $scope.coffeeShops = {};
  	var shopsInStore = localStorageService.get('coffeeShops');
  	$scope.coffeeShops = shopsInStore || demoCoffeeShops;//[];
  	$scope.$watch(function(){
  		localStorageService.set('coffeeShops', $scope.coffeeShops);
  	}, true);
  	$scope.addNewShop = function() {
      if(Common.isObjJSON($scope.shop) && (undefined !== $scope.shop.title) && 
        ($scope.shop.title.trim().length !== 0)) {
        $scope.theSameShops = [];
        var title = $scope.shop.title.toLowerCase();
        angular.forEach($scope.coffeeShops, function(coffeeShop) {
          if(coffeeShop.title.toLowerCase().search(title) > -1) {
            $scope.theSameShops.push(coffeeShop);
          }
        });
        if($scope.theSameShops.length > 0) {
      		
        } else {
          $scope.coffeeShops.push($scope.shop);
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
        shop.title = $scope.shop.title;
        shop.address = $scope.shop.address;
        shop.phone = $scope.shop.phone;
        $scope.coffeeShops[index] = shop;
        //reset all: scope.theSameShops + scope.shop
        $scope.theSameShops = [];
        $scope.shop = '';
      }
    };

  });
