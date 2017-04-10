"use strict";

var BigNumber = require("bignumber.js");

module.exports = {

  // Number of required confirmations for transact sequence
  REQUIRED_CONFIRMATIONS: 0,

  // Maximum number of retry attempts for dropped transactions
  TX_RETRY_MAX: 5,

  // Maximum number of transaction verification attempts
  TX_POLL_MAX: 1000,

  // Transaction polling interval
  TX_POLL_INTERVAL: 10000,

  // how frequently to poll when waiting for blocks
  BLOCK_POLL_INTERVAL: 30000,

  DEFAULT_GAS: "0x2fd618",

  ETHER: new BigNumber(10, 10).toPower(18)

};