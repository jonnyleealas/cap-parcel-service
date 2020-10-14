/* eslint-disable no-undef */
'use strict';
const chalk = require('chalk');
const host = 'http://localhost:8080';
const io = require('socket.io-client');

const driverConnection = io.connect(`${host}/caps`);
// proof of life
driverConnection.on('welcome', (msg)=>{
  console.log('revieved:', msg);
});

driverConnection.on('order ready', pickThisUp);
driverConnection.on('order ready', deliverMessage);

// emits in transit
function pickThisUp(payload){
  setTimeout(() => {
    console.log(`${chalk.bgMagenta('Order In Transit')}`, payload.orderId);
    driverConnection.emit('in transit', payload);
  }, 1000);
}
// Wait 3 seconds log Delivered
function deliverMessage(payload) {
  setTimeout(() => {
    console.log(`${chalk.bgGrey('Delivery Message')}`, payload.orderId);
    driverConnection.emit('delivered', payload);
  }, 3000);
}














