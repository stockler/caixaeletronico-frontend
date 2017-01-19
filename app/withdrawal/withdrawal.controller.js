(function() {
  'use strict';

angular
  .module('withdrawal.widget')
  .controller('WithdrawalController', WithdrawalController);

WithdrawalController.$inject = [ 'AtmFactory', '$mdToast' ];

function WithdrawalController( AtmFactory, $mdToast ) {

  var vm = this;

  vm.show = false;

  vm.reset = function() {
  	vm.show = false;
  	vm.result = [];
  	vm.withdrawalValue = null;
  }

  vm.withdrawal = function(isValid) {
  	vm.show = false;
  	vm.result = [];
  	if (isValid) {
  		console.log(vm.withdrawalValue);
	  	AtmFactory.withdrawal(vm.withdrawalValue).then(function(response) {
	  		console.log(response);
	  		vm.result = response;
	  		vm.show = true;
	  		
	  	})
	  	.catch((err) => {
	  		vm.show = false;
	  		vm.result = [];
	  		$mdToast.showSimple(err);
	  	})
  	}
  	
  }

}

})();