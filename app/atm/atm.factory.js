'use strict';

const URL = 'https://caixaeletronicotest.herokuapp.com/rest';
//const URL = 'http://localhost:10010/rest';

export default class AtmFactory {
  /*@ngInject*/
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;

    this.deferred = this.$q.defer();
  }

  withdrawal(value) {
    let self = this;
    // if (self.deferred) {
    //   self.deferred.reject("Abort");
    // }

    self.deferred = self.$q.defer();

    self.$http.get(`${URL}/withdrawal/${value}`, {timeout: self.deferred.promise})
     .then((data) => { 
        self.deferred.resolve(data);
     }, (err) => {
        self.deferred.reject(err);
     });
    return self.deferred.promise;
  }

  deposit(data) {
    let self = this;
    // if (self.deferred) {
    //   self.deferred.reject("Abort");
    // }

    self.deferred = self.$q.defer();

    self.$http.post(`${URL}/deposit`, { body: data }, {timeout: self.deferred.promise})
     .then((data) => { 
        self.deferred.resolve(data);
     }, (err) => {
        self.deferred.reject(err);
     });
    return self.deferred.promise;

  }
}

  