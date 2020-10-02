/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';
require('./events');
const faker = require('faker');
const drivers = require('./drivers');
const events = require('./events');
require('dotenv').config();
const store = process.env.STORE || 'jonnys-store';

let orderId = faker.random.uuid();
let customer = faker.name.findName();
let address = faker.address.streetAddress();

const obj = {
  store,
  orderId,
  customer,
  address,
};

events.on('order', pickupOrder);


function pickupOrder(payload){
  console.log('pickup order:',payload);
}

function newOrder(){
  events.emit('order', obj);
}

events.on('Delivered', thankYou);

function thankYou(payload){
  console.log(`Thank you for delivery of: ${payload}`)
}
setImmediate(newOrder, 5000);





/*

store name =process.env.STORE
every 5 seconds simulate a new order
- must have a fake order as an object:
{
storeName, id, customerName, address
}
- emit pickup event and attach the fake order as payload
Vender alerts dirver to pickup
{
use faker library to make phony info
}
- give a thank you for delivered item in console
vendor reads transit and says cool
vendor reads delivered and says thanks with id


*/
