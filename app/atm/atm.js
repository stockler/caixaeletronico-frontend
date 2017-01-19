(function() {
  'use strict';

  angular
  .module('api.atm', [])
  .factory('AtmFactory', function($q, $http) {
    var Atm = {};

    const URL = 'https://caixaeletronicotest.herokuapp.com/rest';
    //const URL = 'http://localhost:10010/rest';

    let deferred = $q.defer();

    Atm.withdrawal = function(value) {
    	if (deferred) {
        deferred.reject("Abort");
      }

      deferred = $q.defer();

      $http.get(`${URL}/withdrawal/${value}`, {timeout: deferred.promise})
       .success(function(data) { 
          deferred.resolve(data);
       }).error(function(msg, code) {
          deferred.reject(msg);
       });
     return deferred.promise;
    };

    Atm.deposit = function(data) {
      if (deferred) {
        deferred.reject("Abort");
      }

      deferred = $q.defer();

      $http.post(`${URL}/deposit`, { body: data }, {timeout: deferred.promise})
       .success(function(data) { 
          deferred.resolve(data);
       }).error(function(msg, code) {
          deferred.reject(msg);
       });
     return deferred.promise;

    };

    return Atm;
  });

})();