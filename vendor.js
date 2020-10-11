/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';
require('./events');
const faker = require('faker');
const chalk = require('chalk');
const drivers = require('./drivers');
const events = require('./events');
require('dotenv').config();
const store = process.env.STORE || 'jonnys-store';

// Creates Faker Obj
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

// Events.on(delivered) calls thanks function
events.on('delivered', thanks);

function thanks(payload){
  let text = console.log(`${chalk.bgGreen('Thank you  delivery of order:')}`,payload.orderId);
  payload.event = 'Delivered';
  events.emit('log', payload);
}

module.exports = {thanks};

