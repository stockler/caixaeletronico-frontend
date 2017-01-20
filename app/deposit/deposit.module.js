import configDeposit from './deposit.config';
import DepositController from './deposit.controller';

angular
  .module('deposit.widget', ['api.atm'])
  .config(configDeposit)
  .controller('DepositController', DepositController);