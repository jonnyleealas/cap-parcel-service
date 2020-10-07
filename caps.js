/* eslint-disable no-undef */
'use strict';
const events = require('./events');
require('./vendor.js');
require('./drivers');
const chalk = require('chalk');


//this logs things that are happening.
events.on('log', payload => log(payload));

function log(payload) {
  let time = new Date();
  console.log('Events', {
    time,
  }, payload);
}

