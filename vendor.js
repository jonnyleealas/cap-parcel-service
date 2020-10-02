/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';
require('./events');
const chalk = require('chalk');
const faker = require('faker');
const drivers = require('./drivers');
const events = require('./events');
require('dotenv').config();
const store = process.env.STORE || 'jonnys-store';


const obj = {
  store: store,
  orderId: faker.random.uuid(),
  customer: faker.name.findName(),
  address: faker.address.streetAddress(),
};

// events on order runs pickup order console.log

events.on('Delivered', thankYou);
events.on('in transit', echoTransit);


setInterval(newOrder, 5000);


//event.emit: newOrder emits the new orders for driver to deliver
function newOrder(){

  events.emit('order ready', obj);
}


// set a time out of 1 second
// thankYou sends a thank you to driver once driver has delivered order
function thankYou(payload){
  console.log(`Thank you for delivery of: ${payload}`);
}
// echo of transit confirmation sent to driver
function echoTransit(payload){
  console.log(`${chalk.bgMagenta('Transit confirmation order:', payload)}`);
}
module.exports = {newOrder, echoTransit, thankYou};


/*
- store name =process.env.STORE*
- every 5 seconds simulate a new order*
- must have a fake order as an object: create object with order info*
- event.emit: function emit an alert of pickup for driver*
- event.on: function give a thank you for delivered item in console*
- event.on: vendor reads transit and says cool*
- event.on: vendor reads delivered and says thanks with id*
*/
