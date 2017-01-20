exports.config = {
  baseUrl: 'http://127.0.0.1:8080/',
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  framework: 'jasmine',
  suites: {
    app: 'test/e2e/app.spec.js',
    atm: 'test/e2e/atm/atm.spec.js'
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['show-fps-counter=true']
    }
  },
  onPrepare: function() {
    browser.ignoreSynchronization = true;
  },
  useAllAngular2AppRoots: true
};