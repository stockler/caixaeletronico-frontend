describe('Shots', function() {
  it('should have one or more shots', function() {
    browser.get('http://localhost:8080/');

    expect(element.all(by.repeater('shot in vm.shots')).count()).toBeGreaterThan(1);
  });
});