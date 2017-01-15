(function() {
  'use strict';

angular
  .module('deposit.widget')
  .controller('DepositController', DepositController);

DepositController.$inject = [ 'AtmFactory', '$mdToast' ];

function DepositController( AtmFactory, $mdToast ) {

  var vm = this;

  vm.deposit = function(isValid) {
  	if(isValid) {
  		console.log(vm.depositValue);
	  	AtmFactory.deposit(vm.depositValue).then(function(msg) {
	  		console.log(msg);
	  		$mdToast.showSimple(msg);
	  	});
  	}  	
  }

}

})();