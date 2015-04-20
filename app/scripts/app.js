'use strict';

/**
 * @ngdoc overview
 * @name coffeeShopApp
 * @description
 * # coffeeShopApp
 *
 * Main module of the application.
 */
angular
  .module('coffeeShopApp', [
    // 'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .constant('appSettings', {
    'appName': 'coffeeShop',
    'hostPath': 'http://localhost',
    'port': '9000',
    'db': 'https://coffeeshop.iriscouch.com/coffee_shops'
    // 'db': 'http://localhost:5984/coffee_shops'
  })
  .run(function($templateCache){
    $templateCache.put('coffee-shop', 'views/coffee-shop.html');
    $templateCache.put('coffee-shop-similar', 'views/coffee-shop-similar.html');
  })
  .config(['$httpProvider', function ($httpProvider) {
      // $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('coffeeShopApp');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CoffeeshopCtrl'
      })
      .when('/coffee-shop', {
        templateUrl: 'views/main.html',
        controller: 'CoffeeshopCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function($sceDelegateProvider){
     $sceDelegateProvider.resourceUrlWhitelist(['self','http://localhost:5984/**']);
  });
