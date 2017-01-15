(function() {
  'use strict';

angular
  .module('atm.widget', ['api.atm'])
  .config(configAtm);

configAtm.$inject = [
  "$stateProvider"
];

function configAtm($stateProvider) {
  $stateProvider
    .state('atm', {
      url: '/',
      views: {
        '': {
          templateUrl: '/app/atm/views/atm.html',
          controller: 'AtmController',
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
