

describe('Atm', function() {
  it('should send value to server', function() {
    browser.get('http://localhost:8080/withdrawal');

    element(by.model('vm.withdrawalValue')).sendKeys('200');

    // Find the first (and only) button on the page and click it
    element(by.id("withdrawal")).click();

    function eventual(expectedCondition) {
	  return browser.wait(expectedCondition, 2000).then(function() {
	    return true;
	  }, function() {
	    return false;
	  });
	}

    var EC = protractor.ExpectedConditions;

	var e = element(by.id('msg'));
	expect(eventual(EC.presenceOf(e))).toBe(true);

	expect(e.isPresent()).toBeTruthy();

    
  });

  it('should have msg', function() {
    
  	function eventual(expectedCondition) {
	  return browser.wait(expectedCondition, 2000).then(function() {
	    return true;
	  }, function() {
	    return false;
	  });
	}
	var EC = protractor.ExpectedConditions;
	var e = element(by.id('msg'));
	
	expect(eventual(EC.presenceOf(e))).toBe(true);

    expect(e.getText()).toEqual("Você sacou 200 reais!");
  });
});