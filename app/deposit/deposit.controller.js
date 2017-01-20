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
	  		console.log(this.depositValue);

	  		let self = this;
		  	this.AtmFactory.deposit(notes).then(function(msg) {
		  		console.log(msg.data);
		  		self.$mdToast.showSimple(msg.data);
		  		notes = {
					100: 0,
				  	50: 0,
				  	20: 0,
				  	10: 0,
				  	5: 0,
				  	2: 0
				};
				self.depositValue = null;
				self.note100 = null;
				self.note50 = null;
				self.note20 = null;
				self.note10 = null;
				self.note5 = null;
				self.note2 = null;
				form.$setPristine();
		  	});
	  	}  	
  	}

  	calculate($event, value, note) {
	  	console.log(value, note);

	  	notes[note] = value;

	  	this.depositValue = 0;
	  	for (let prop in notes) {
	  		this.depositValue += parseInt(prop) * notes[prop];
	  	}
  	}
}



