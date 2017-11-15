'use strict';

// (function() {
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var alegra = angular.module('app', ['ionic']);

alegra.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      abstract: true,
      templateUrl: "app/templates/index.html",
    })
    .state('home', {
      // abstract: true,
      url: '/home',
      templateUrl: 'app/templates/home.html',
      controller: 'ListController',
      parent: "app"
    })

    .state('details', {
      url: '/details/:id',
      templateUrl: 'app/templates/details.html',
      controller: 'DetailsController',
      parent: "app"
      // views: {
      //   'menuContent': {
      //   }
      // }
    })
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
 });

 alegra.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})





// }());
