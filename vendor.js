/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';
require('./events');
const faker = require('faker');
const chalk = require('chalk');
const drivers = require('./drivers');
const caps = require('./caps');
const events = require('./events');
require('dotenv').config();
const store = process.env.STORE || 'jonnys-store';


// events on order runs pickup order console.log

events.on('Delivered', thankYou);
events.on('in transit', echoTransit);


// setInterval(newOrder, 5000);
setInterval(()=>{
  const obj = {
    time: faker.date.recent(),
    store: store,
    orderId: faker.random.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  events.emit('order ready', obj);
}, 5000);



// echo of transit confirmation sent to driver
function echoTransit(payload){
  // let text = `${chalk.bgMagenta('Transit confirmation order:')}` + JSON.stringify(payload);
  let text = console.log(`${chalk.bgMagenta('Transit Confirmation Order:')}`, payload);
  events.emit('log', text);
}

// set a time out of 1 second
// thankYou sends a thank you to driver once driver has delivered order
function thankYou(payload){
  
  let text = console.log(`${chalk.bgGreen('Thank you for delivery of order:')}`,payload.orderId);
  events.emit('log', text);
}
module.exports = {echoTransit, thankYou};


/*
- store name =process.env.STORE*
- every 5 seconds simulate a new order*
- must have a fake order as an object: create object with order info*
- event.emit: function emit an alert of pickup for driver*
- event.on: function give a thank you for delivered item in console*
- event.on: vendor reads transit and says cool*
- event.on: vendor reads delivered and says thanks with id*
*/
