'use strict';

export default class WithdrawalController {  
  /*@ngInject*/
  constructor(AtmFactory, $mdToast) {

    this.AtmFactory = AtmFactory;
    this.$mdToast = $mdToast;

    this.show = false;
    this.result = [];
    this.withdrawalValue = null;
    this.form = null;
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
    
  	this.show = false;
  	this.result = [];
  	if (isValid) {
	  	this.AtmFactory
        .withdrawal(this.withdrawalValue)
        .then((response) => {
  	  		this.result = response.data;
  	  		this.show = true;  	  		
  	  	})
  	  	.catch((err) => {
  	  		this.show = false;
  	  		this.result = [];
  	  		this.$mdToast.showSimple(err.data);
  	  	});
  	}
  	
  }

}