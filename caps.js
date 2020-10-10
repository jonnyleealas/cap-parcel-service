/* eslint-disable no-undef */
'use strict';
const events = require('./events');
const chalk = require('chalk');
require('./vendor.js');
require('./drivers.js');

// this logs things that are happening.
events.on('order ready', payload => log('pickup', payload));
// events.on('in-transit', payload => log('in-transit', payload));
events.on('delivered', payload => delivered(payload));
events.on('order ready', orderReady);

events.on('log', payload => log(payload));
function orderReady(payload){
  console.log('Order Ready For Pickup', payload);
}

function log(stuff, payload) {
  let time = new Date();
  let results = {
    time: time,
    events: events,
    payload: payload,
  };
  console.log(`${chalk.bgYellow('EVENTS:', results)}`,{
    time,
  }, payload);
}

function delivered(payload) {
  console.log(`${chalk.bgBlue('Package Delivered:')}`, payload.orderId);
}

// logger
// function logger('event', payload){
//     let time = new Date();
//     let obj = {
//         time: time,
//         events: events,
//         payload: payload,
//     }
//     console.log('Event:', obj)
// }
