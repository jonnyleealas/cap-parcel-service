'use strict';
require('./events');




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