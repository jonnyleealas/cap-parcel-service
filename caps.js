/* eslint-disable no-undef */
'use strict';
const events = require('./events');
const chalk = require('chalk');
require('./vendor.js');
require('./drivers.js');

// this logs things that are happening.
events.on('order ready', orderReady);
events.on('log', payload => log(payload));
events.on('delivered', delivered);
function orderReady(payload){
  console.log('Order Ready For Pickup', payload);
}

function log(payload) {
  let time = new Date();
  console.log(`${chalk.bgYellow('EVENTS:')}`,{
    time,
  }, payload);
}

function delivered(payload) {
  console.log('Package Delivered:', payload.orderId);
}
