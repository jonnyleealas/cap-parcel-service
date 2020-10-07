/* eslint-disable no-undef */
'use strict';
const events = require('./events');
require('./vendor.js');
require('./drivers.js');

const chalk = require('chalk');


//this logs things that are happening.
events.on('log', payload => log(payload));
events.on('order ready', orderReady);

function orderReady(payload){
  console.log('Order Ready For Pickup', payload);
}

function log(payload) {
  let time = new Date();
  console.log(`${chalk.bgYellow('EVENTS:')}`, {
    time,
  }, payload);
}

