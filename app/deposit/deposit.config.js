'use strict';

export default function configDeposit($stateProvider) {
    'ngInject';

    $stateProvider
    .state('deposit', {
      url: '/deposit',
      views: {
        '@': {
          templateUrl: '/app/deposit/views/deposit.html',
          controller: 'DepositController',
          controllerAs: 'vm'
        }
      }
    })
    ;
  
}


