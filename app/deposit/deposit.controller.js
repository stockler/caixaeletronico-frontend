(function() {
  'use strict';

angular
  .module('deposit.widget')
  .controller('DepositController', DepositController);

DepositController.$inject = [ 'AtmFactory', '$mdToast' ];

function DepositController( AtmFactory, $mdToast ) {

  var vm = this;

  let notes = {
  	100: 0,
  	50: 0,
  	20: 0,
  	10: 0,
  	5: 0,
  	2: 0
  };

  vm.deposit = function(isValid) {
  	if(isValid) {
  		console.log(vm.depositValue);
	  	AtmFactory.deposit(notes).then(function(msg) {
	  		console.log(msg);
	  		$mdToast.showSimple(msg);
	  		notes = {
				100: 0,
			  	50: 0,
			  	20: 0,
			  	10: 0,
			  	5: 0,
			  	2: 0
			};
	  	});
  	}  	
  }

  vm.calculate = function($event, value, note) {
  	console.log(value, note);

  	notes[note] = value;

  	vm.depositValue = 0;
  	for (let prop in notes) {
  		vm.depositValue += parseInt(prop) * notes[prop];
  	}
  }

}

})();