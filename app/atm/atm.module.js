import configAtm from './atm.config';
import AtmController from './atm.controller';

angular
  .module('atm.widget', ['api.atm'])
  .config(configAtm)
  .controller('AtmController', AtmController);