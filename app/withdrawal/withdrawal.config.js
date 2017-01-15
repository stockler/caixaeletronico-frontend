(function() {
  'use strict';

angular
  .module('withdrawal.widget', ['api.atm'])
  .config(configWithdrawal);

configWithdrawal.$inject = [
  "$stateProvider"
];

function configWithdrawal($stateProvider) {
  $stateProvider
    .state('withdrawal', {
      url: '/withdrawal',
      views: {
        '@': {
          templateUrl: '/app/withdrawal/views/withdrawal.html',
          controller: 'WithdrawalController',
          controllerAs: 'vm',
          /*resolve: {
            shots: ["Atm", function(Atm) { 
                return Atm
                  .popular()
                  .then(function (shots) {
                    return shots.data.data;
                }, function (error) {
                  console.log("erro :: ", error);
                  return [];
                });             
            }]            
          }*/
        }
      }
    })
    ;
}

})();
