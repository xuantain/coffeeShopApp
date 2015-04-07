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
  .constant('appInfo', {
    'hostPath': 'http://localhost',
    'port': '9000',
    'appName': 'coffeeShops',
    'servicePath': 'http://localhost:5984',
    'dbName': 'coffee_shops'
  })
  .run(function($templateCache){
    $templateCache.put('coffee-shop', 'views/coffee-shop.html');
    $templateCache.put('coffee-shop-similar', 'views/coffee-shop-similar.html');
  })
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('shopApp');
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
  });
