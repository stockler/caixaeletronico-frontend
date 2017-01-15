(function() {
  'use strict';

  angular.module('atm', [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngSanitize',
    'ngMessages',
    'atm.widget',
    'withdrawal.widget',
    'deposit.widget'
  ])
  .config(function($urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('blue-grey');
  });
})();