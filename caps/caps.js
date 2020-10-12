/* eslint-disable no-undef */
'use strict';
require('dotenv').config();
const port = process.env.PORT || 8080;
const io = require('socket.io')(port);
const events = require('../events/events');
const chalk = require('chalk');
require('../vendor/vendor.js');
require('../drivers/drivers.js');


// Connect io server
io.on('connection', (socket) =>{
  console.log(`connection on ${socket.id}`);
});

// this logs things that are happening.
// events.on('delivered', payload => delivered(payload));
// events.on('transic', payload+> logger )
// events.on('order ready', orderReady);
// events.on('log', payload => logger(payload));

function orderReady(payload){
  payload.event = 'Order Ready For Pickup';
  // events.emit('log', payload);
  console.log('Order Ready For Pickup', payload);
}

function logger(payload) {
  let time = new Date();
  let results = {
    time: time,
    events: payload.event,
    payload: payload,
  };
  console.log(`${chalk.bgCyan('Events:')}`,results.events, results.time);
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
