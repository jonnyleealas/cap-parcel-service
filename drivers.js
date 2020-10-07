/* eslint-disable no-undef */
'use strict';
const events = require('./events');
const vendor = require('./vendor');
const chalk = require('chalk');

events.on('order ready', pickThisUp);

function pickThisUp(payload){
  // console.log(`${chalk.bgGray('Order Waiting For Pickup:')}`,payload);
  console.log(`${chalk.bgGray('DRIVER: picked up order:')}`,payload);
  setInterval(() => {
    isInTransit(payload);
  }, 1000);
}
// Wait 3 seconds log Delivered
function isInTransit(payload) {
  let text = console.log(`${chalk.bgCyan('In Transit:')}`, payload.orderId);
  events.emit('in transit', text);
  setInterval(() => {
    delivered(payload);
  }, 3000);
}

// Emit a delivered event with payload
function delivered(payload) {
  events.emit('delivered', payload);
}











/*
/*
monitors system
- on pickup
{
wait 1 second, log driver picked up {orderid}
emit in transit with payload
}
{
wait 3 seconds
log delivered to console
emit a delivered event with the same payload
}
Driver pickups up and send in-transit to vender
Driver delivers and emits delivered to vendor



*/

/**
 * events.js - Global Event Pool (shared by all modules) [x]
 *
caps.js - Main Hub Application 

Manages the state of every package (ready for pickup, in transit, delivered, etc)
Logs every event to the console with a timestamp and the event payload
i.e. “EVENT {}” [-]

vendor.js - Vendor Module
Declare your store name (perhaps in a .env file, so that this module is re-usable)
Every 5 seconds, simulate a new customer order
Create a fake order, as an object:
storeName, orderId, customerName, address
Emit a ‘pickup’ event and attach the fake order as payload
HINT: Have some fun by using the faker library to make up phony information
Monitor the system for events …


-- we need to handle driver pickup and delivery below --.

driver.js - Drivers Module
Monitor the system for events …
On the ‘pickup’ event …
Wait 1 second
Log “DRIVER: picked up [ORDER_ID]” to the console.
Emit an ‘in-transit’ event with the payload you received

Wait 3 seconds
Log “delivered” to the console
Emit a ‘delivered’ event with the same payload


Whenever the ‘delivered’ event occurs
Log “thank you” to the console

 */
/////////////////////////////////////////////////////////////////

/**
  *
'use strict';

// Main Hub Application

// Manages the state of every package (ready for pickup, in transit, delivered, etc)

// Logs every event to the console with a timestamp and the event payload
//     i.e. “EVENT {}”

const events = require('./lib/events.js');
require('./apps/driver.js');
require('./apps/vendor.js');

events.on('pickup', payload => log('pickup', payload));
events.on('in-transit', payload => log('in-transit', payload));
events.on('delivered', payload => log('delivered', payload));

function log(event, payload){}

  let time = new Date();
  console.log('EVENT', {
    event,
    time,
    payload,
  });

//
  */
