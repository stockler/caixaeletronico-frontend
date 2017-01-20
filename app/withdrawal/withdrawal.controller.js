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

  reset(form) {
  	this.show = false;
  	this.result = [];
  	this.withdrawalValue = null;
    form.$setPristine();
  }

  withdrawal(isValid) {

    const self = this;
  	self.show = false;
  	self.result = [];
  	if (isValid) {
  		console.log(self.withdrawalValue);
	  	self.AtmFactory.withdrawal(self.withdrawalValue).then(function(response) {
	  		console.log(response);
	  		self.result = response;
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