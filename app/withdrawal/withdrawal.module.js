import configWithdrawal from './withdrawal.config';
import WithdrawalController from './withdrawal.controller';

angular
  .module('withdrawal.widget', ['api.atm'])
  .config(configWithdrawal)
  .controller('WithdrawalController', WithdrawalController);