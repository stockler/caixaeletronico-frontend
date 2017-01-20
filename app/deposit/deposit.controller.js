'use strict';

let notes = {
	100: 0,
	50: 0,
	20: 0,
	10: 0,
	5: 0,
	2: 0
};

export default class DepositController {	
	/*@ngInject*/
	constructor(AtmFactory, $mdToast) {

		this.AtmFactory = AtmFactory;
		this.$mdToast = $mdToast;

		this.depositValue = null;
		this.note100 = null;
		this.note50 = null;
		this.note20 = null;
		this.note10 = null;
		this.note5 = null;
		this.note2 = null;
	}

  	deposit(form, isValid) {
	  	if(isValid) {
		  	this.AtmFactory
		  		.deposit(notes)
		  		.then((msg) => {
			  		this.$mdToast.showSimple(msg.data);
			  		notes = {
						100: 0,
					  	50: 0,
					  	20: 0,
					  	10: 0,
					  	5: 0,
					  	2: 0
					};
					this.reset(form);
			  	})
			  	.catch((err) => {
			  		this.reset(form);
			  		this.$mdToast.showSimple(err.data);
			  	});
	  	}  	
  	}

  	calculate($event, value, note) {
	  	notes[note] = value;

	  	this.depositValue = 0;
	  	for (let prop in notes) {
	  		this.depositValue += parseInt(prop) * notes[prop];
	  	}
  	}

  	reset(form) {
  		this.depositValue = null;
		this.note100 = null;
		this.note50 = null;
		this.note20 = null;
		this.note10 = null;
		this.note5 = null;
		this.note2 = null;
		form.$setPristine();
  	}
}



