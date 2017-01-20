'use strict';

export default class WithdrawalController {  
  /*@ngInject*/
  constructor(AtmFactory, $mdToast) {

    this.AtmFactory = AtmFactory;
    this.$mdToast = $mdToast;

    this.show = false;
    this.result = [];
    this.withdrawalValue = null;
  }

  setForm(form) {
    this.form = form;
  }

  reset() {
  	this.show = false;
  	this.result = [];
  	this.withdrawalValue = null;
    this.form.$setPristine();
  }

  withdrawal(isValid) {

    const self = this;
  	self.show = false;
  	self.result = [];
  	if (isValid) {
  		console.log(self.withdrawalValue);
	  	self.AtmFactory.withdrawal(self.withdrawalValue).then(function(response) {
	  		console.log(response);
	  		self.result = response.data;
	  		self.show = true;
	  		
	  	})
	  	.catch((err) => {
	  		self.show = false;
	  		self.result = [];
	  		self.$mdToast.showSimple(err);
	  	})
  	}
  	
  }

}