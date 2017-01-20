'use strict';

export default function configAtm($stateProvider) {
    'ngInject';
    
    $stateProvider
    .state('atm', {
      url: '/',
      views: {
        '': {
          templateUrl: '/app/atm/views/atm.html',
          controller: 'AtmController',
          controllerAs: 'vm'
        }
      }
    })
    ;
  
}