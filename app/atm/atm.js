(function() {
  'use strict';

  angular
  .module('api.atm', [])
  .factory('AtmFactory', function($q, $http) {
    var Atm = {};

    const URL = 'https://caixaeletronicotest.herokuapp.com/rest';

    Atm.withdrawal = function(value) {
    	let deferred = $q.defer();
      $http.get(`${URL}/withdrawal/${value}`, {timeout: deferred.promise})
       .success(function(data) { 
          deferred.resolve(data);
       }).error(function(msg, code) {
          deferred.reject(msg);
          $log.error(msg, code);
       });
     return deferred.promise;
    };

    Atm.deposit = function(value) {
      let deferred = $q.defer();
      $http.post(`${URL}/deposit/${value}`, {timeout: deferred.promise})
       .success(function(data) { 
          deferred.resolve(data);
       }).error(function(msg, code) {
          deferred.reject(msg);
          $log.error(msg, code);
       });
     return deferred.promise;

    };

    return Atm;
  });

})();