/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';
const host = 'http://localhost:8080';
const io = require('socket.io-client');
const faker = require('faker');
const chalk = require('chalk');
require('dotenv').config();
const store = process.env.STORE || 'jonnys-store';

const vendorConnection = io.connect(`${host}/caps`);
// join connection
vendorConnection.emit('join', store);
// proof of life
vendorConnection.on('welcome', (msg)=>{
  console.log('received:', msg);
});

// Creates Faker payload
setInterval(()=>{
  const payload = {
    store: store,
    time: faker.date.recent(),
    orderId: faker.random.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  vendorConnection.emit('order ready', payload);
  console.log(payload);
}, 5000);

// Events.on(delivered) calls thanks function
vendorConnection.on('delivered',(payload)=>{
  console.log(`${chalk.bgGreen('VENDER: thanks for delivery')}`);
});


