'use strict';
const event = require('./events');
const vendor = require('./vendor');

event.on('order ready', pickThisUp);

function pickThisUp(payload){
  console.log('order ready for pickup:',payload);
}


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
Driver delivers and emits deliverd to vendor



*/
