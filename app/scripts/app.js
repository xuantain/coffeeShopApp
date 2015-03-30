'use strict';

/**
 * @ngdoc overview
 * @name angularProjectApp
 * @description
 * # angularProjectApp
 *
 * Main module of the application.
 */
angular
  .module('angularProjectApp', [
    // 'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .run(function($templateCache){
    $templateCache.put('coffee-shop', 'views/coffee-shop.html');
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
