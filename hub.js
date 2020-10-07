'use strict';

const events = require('./events');
const vender = require('./vendor');

events.on('order ready', orderReady);

function orderReady(payload){
  console.log('Order Ready For Pickup', payload);
}
