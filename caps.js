/* eslint-disable no-undef */
'use strict';
const events = require('./events');
const chalk = require('chalk');
require('./vendor.js');
require('./drivers.js');

// this logs things that are happening.
events.on('delivered', payload => delivered(payload));
// events.on('transic', payload+> logger )
events.on('order ready', orderReady);
events.on('log', payload => logger(payload));

function orderReady(payload){
  payload.event = 'Order Ready For Pickup';
  events.emit('log', payload);
  console.log('Order Ready For Pickup', payload);
}

function logger(payload) {
  let time = new Date();
  let results = {
    time: time,
    events: payload.event,
    payload: payload,
  };
  console.log(`${chalk.bgYellow('EVENTS:', results)}`,{
    time,
  }, payload);
}

function delivered(payload) {
  console.log(`${chalk.bgBlue('Package Delivered:')}`, payload.orderId);
}


// function logger(events, payload){
//   console.log('fuck', payload);
//   let time = new Date();
//   let obj = {
//     time: time,
//     events: events,
//     payload: payload,
//   };
//   console.log('Event:', obj);
// }
