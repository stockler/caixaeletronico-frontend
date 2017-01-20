describe('Atm', function() {
  it('should have one or more atms', function() {
    browser.get('http://localhost:8080/');

    expect(element.all(by.repeater('cash in vm.results')).count()).toBeGreaterThan(1);
  });
});