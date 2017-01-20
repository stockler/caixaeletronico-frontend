'use strict';

//const URL = 'https://caixaeletronicotest.herokuapp.com/rest';
const URL = 'http://localhost:10010/rest';

export default class AtmFactory {
  /*@ngInject*/
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;
  }

  withdrawal(value) {

    const deferred = this.$q.defer();

    this.$http.get(`${URL}/withdrawal/${value}`, {timeout: deferred.promise})
     .then((data) => { 
        deferred.resolve(data);
     }, (err) => {
        deferred.reject(err);
     });
    return deferred.promise;
  }

  deposit(data) {

    const deferred = this.$q.defer();

    this.$http.post(`${URL}/deposit`, { body: data }, {timeout: deferred.promise})
     .then((data) => { 
        deferred.resolve(data);
     }, (err) => {
        deferred.reject(err);
     });
    return deferred.promise;

  }
}

  