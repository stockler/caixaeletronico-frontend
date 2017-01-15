(function() {
  'use strict';

angular
  .module('deposit.widget', ['api.atm'])
  .config(configDeposit);

configDeposit.$inject = [
  "$stateProvider"
];

function configDeposit($stateProvider) {
  $stateProvider
    .state('deposit', {
      url: '/deposit',
      views: {
        '@': {
          templateUrl: '/app/deposit/views/deposit.html',
          controller: 'DepositController',
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
