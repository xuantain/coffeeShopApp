'use strict';
/* globals alert, FileTransfer */
/**
 * @ngdoc directive
 * @name coffeeShopApp.directive:coffeeShop
 * @description
 * # coffeeShop
 */
angular.module('coffeeShopApp')
	.directive('coffeeShop', function($templateCache) {
		return {
			templateUrl: $templateCache.get('coffee-shop'),
			restrict: 'E',
      replace: true,
			link: function(scope, element, attrs) {},
			controller: function($scope) {
				$scope.addPictures = function() {
					if (!$scope.shop || !$scope.shop._id) {
						alert('Sorry, you must save the shop before adding files.');
						return 'Must save';
					}
					if (!navigator || !navigator.device || !navigator.device.capture.captureImage || typeof navigator.device.capture.captureImage !== 'function') {
						alert('Sorry, your device does not support taking a picture.');
						return 'Not supported';
					}
					// capture callback
					var captureSuccess = function(mediaFiles) {
						var i, path, len;
						for (i = 0, len = mediaFiles.length; i < len; i += 1) {
							path = mediaFiles[i].fullPath;
							// do something interesting with the file
							$scope.uploadFile(mediaFiles[i]);
						}
					};

					// capture error callback
					var captureError = function(error) {
						navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
					};

					// start image capture via cordova
					navigator.device.capture.captureImage(captureSuccess, captureError, {
						limit: 2
					});
					return true;
				}; // End of method addPictures()

				$scope.uploadFile = function(mediaFile) {
					if (!$scope.shop || !$scope.shop._id) {
						alert('Sorry, you must save the shop before adding files.');
						return false;
					}
					var ft = new FileTransfer(),
						path = mediaFile.fullPath,
						name = mediaFile.name;

					ft.upload(path,
						'https://coffeeshop.iriscouch.com/coffee_shops/' + $scope.coffeeShop._id,
						function(result) {
							console.log('Upload success: ' + result.responseCode);
							console.log(result.bytesSent + ' bytes sent');
							$scope.shop.images = $scope.shop.images || [];
							$scope.shop.images.push(mediaFile);
						},
						function(error) {
							console.log('Error uploading file ' + path + ': ' + error.code);
						}, {
							fileName: name
						});
					return true;
				}; // End of method uploadFile()
				
				$scope.isOpenDetail = function() {
					if($scope.isShowContent) {
						return 'glyphicon glyphicon-chevron-up';
					}
					return 'glyphicon glyphicon-chevron-down';
				};

			}
		};
	});