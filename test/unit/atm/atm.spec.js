import AtmFactory from '../../../app/atm/atm.factory';

describe('Atm factory', function() {
	let AtmFactory;
  let $httpBackend;
  let mockedAtmJSON;

  beforeEach(angular.mock.module('api.atm', 'mockedAtmJSON'));

  beforeEach(inject(function(_AtmFactory_, _$httpBackend_, defaultJSON) {
  	AtmFactory = _AtmFactory_;

    $httpBackend = _$httpBackend_;

    $httpBackend.when('GET', 'https://caixaeletronicotest.herokuapp.com/rest/withdrawal/100').respond(defaultJSON.fakeDataWithdrawal);
    $httpBackend.when('POST', 'https://caixaeletronicotest.herokuapp.com/rest/deposit').respond(defaultJSON.fakeDataDeposit);
  }));

  it('should exist', function() {
  	expect(AtmFactory).toBeDefined();
  });

  describe('.withdrawal()', function() {

  	it('should exist', function() {
    		expect(AtmFactory.withdrawal).toBeDefined();
  	});

    it('should return one result', function() {
      
      AtmFactory.withdrawal(100).then(function(response) {
        expect(response.data.length).toEqual(1);
      });
      $httpBackend.flush();
      
    });

    
  });

  describe('.deposit()', function() {

    it('should exist', function() {
        expect(AtmFactory.deposit).toBeDefined();
    });

    it('should return one result', function() {
      
      AtmFactory.deposit({ name: '100', qtd: 1 }).then(function(response) {
        expect(response.data.length).toEqual(1);
      });
      $httpBackend.flush();
      
    });

    
  });
});