/* eslint-disable no-undef */
'use strict';
const chalk = require('chalk');
const host = 'http://localhost:8080';
const io = require('socket.io-client');



const driverConnection = io.connect(`${host}/caps`);
driverConnection.on('welcome', (msg)=>{
  console.log('revieved:', msg);
});

driverConnection.on('order ready', pickThisUp);
driverConnection.on('order ready', deliverMessage);

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

//
  */
