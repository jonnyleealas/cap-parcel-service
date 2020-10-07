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


// Events.on(delivered) calls thanks function
events.on('delivered', thanks);

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

// Sends Thank You
function thanks(payload){
  let text = console.log(`${chalk.bgGreen('Thank you for delivery of order:')}`,payload.orderId);
  events.emit('log', text);
}

module.exports = {thanks};

