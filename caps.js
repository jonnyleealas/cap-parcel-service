/* eslint-disable no-undef */
'use strict';
const events = require('./events');
require('./vendor.js');
require('./drivers');
const chalk = require('chalk');


//this logs things that are happening.
events.on('log', textReceived => log(textReceived));

function log(payload) {
  let time = new Date();
  console.log('Events', {
    time,
  }, payload);
}
/*
ready for pickup
in transit
delivered
logs timestamp of every event in console with payload
event{
}

*/
