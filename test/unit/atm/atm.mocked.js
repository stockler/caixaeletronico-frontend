(function() {

	'use strict'
	angular
	.module('mockedAtmJSON',[])
	.value('defaultJSON',{
    	fakeDataWithdrawal:[
		  {
		    name: '100',
		    qtd: 1		    
		  }
		],
		fakeDataDeposit:[
		  {
		    name: '100',
		    qtd: 1		    
		  }
		]
	});

})();