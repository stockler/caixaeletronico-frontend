(function() {
  'use strict';

angular
  .module('withdrawal.widget')
  .controller('WithdrawalController', WithdrawalController);

WithdrawalController.$inject = [ 'AtmFactory', '$mdToast' ];

function WithdrawalController( AtmFactory, $mdToast ) {

  var vm = this;

  vm.withdrawal = function(isValid) {

  	if (isValid) {
  		console.log(vm.withdrawalValue);
	  	AtmFactory.withdrawal(vm.withdrawalValue).then(function(msg) {
	  		console.log(msg);
	  		$mdToast.showSimple(msg);
	  	})
  	}
  	
  }

}

})();