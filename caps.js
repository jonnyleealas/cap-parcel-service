/* eslint-disable no-undef */
'use strict';
const events = require('./events');
require('./vendor.js');
require('./drivers');
const chalk = require('chalk');



events.on('order ready', transit);
function transit(payload){
  console.log(chalk.bgBlue('picked up and in transit'),payload);
}


/*
ready for pickup
in transit
delivered
logs timestamp of every event in console with payload
event{
}

*/
