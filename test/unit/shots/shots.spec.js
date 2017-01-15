describe('Shots factory', function() {
	var Shots;
  var $httpBackend;
  var mockedShotsJSON;

  beforeEach(angular.mock.module('api.dribble.shots', 'mockedShotsJSON'));

  beforeEach(inject(function(_Shots_, _$httpBackend_, defaultJSON) {
  	Shots = _Shots_;

    $httpBackend = _$httpBackend_;

    $httpBackend.when('JSONP', '//api.dribbble.com/v1/shots?access_token=137ef56c6219971a9e471892ca3ba330467298294886bf2519bc4d602c3b4a98&callback=JSON_CALLBACK').respond(defaultJSON.fakeData);
  }));

  it('should exist', function() {
  	expect(Shots).toBeDefined();
  });

  describe('.popular()', function() {

  	it('should exist', function() {
    		expect(Shots.popular).toBeDefined();
  	});

    it('should return one shot', function() {
      
      Shots.popular().then(function(response) {
        expect(response.data.length).toEqual(1);
      });
      $httpBackend.flush();
      
    });

    it('should return one shot with title Sasquatch', function() {
      
      Shots.popular().then(function(response) {
        expect(response.data[0].title).toEqual('Sasquatch');
      });
      $httpBackend.flush();
      
    });
  });
});