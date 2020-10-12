/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';
const host = 'http://localhost:4000';
const io = require('socket.io-client');
const faker = require('faker');
const chalk = require('chalk');
require('dotenv').config();
const store = process.env.STORE || 'jonnys-store';


const vendorConnection = io.connect(`${host}/caps`);
vendorConnection.emit('join', store);
vendorConnection.on('welcome', (msg)=>{
  console.log('received:', msg);
});

// Creates Faker Obj
setInterval(()=>{
  const obj = {
    store: store,
    time: faker.date.recent(),
    orderId: faker.random.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  vendorConnection.emit('order ready', obj);
  console.log(obj);
}, 5000);

// Events.on(delivered) calls thanks function
vendorConnection.on('delivered', thanks);

function thanks(payload){
  console.log(`${chalk.bgGreen('Thank you for delivery of order:')}`,payload.orderId);
  payload.event = 'Delivered';
  vendorConnection.emit('log', payload);
}

module.exports = {thanks};

