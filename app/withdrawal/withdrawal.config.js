'use strict';

export default function configWithdrawal($stateProvider) {
    'ngInject';

    $stateProvider
    .state('withdrawal', {
      url: '/withdrawal',
      views: {
        '@': {
          templateUrl: '/app/withdrawal/views/withdrawal.html',
          controller: 'WithdrawalController',
          controllerAs: 'vm'
        }
      }
    })
    ;
  
}
