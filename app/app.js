'use strict';

import AtmFactory from './atm/atm.factory';
import atmWidget from './atm/atm.module';
import despositWidget from './deposit/deposit.module';
import withdrawalWidget from './withdrawal/withdrawal.module';

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
  'ngInject';

  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(true);

  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('blue-grey');
});

angular.module('api.atm', [])
  .factory('AtmFactory', ['$q', '$http', ($q, $http) => new AtmFactory($q, $http)]);
