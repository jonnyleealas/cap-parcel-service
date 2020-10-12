/* eslint-disable no-undef */
'use strict';

const port = process.env.PORT || 8080;
const io = require('socket.io')(port);
const chalk = require('chalk');



// Connect io server
io.on('connection',(socket) =>{
  console.log(`connection on ${socket.id}`);
});

const capsIo = io.of('/caps');

capsIo.on('connection', (socket)=>{
  socket.on('join', (room)=>{
    socket.join(room);
  });
  socket.on('delivered', payload => delivered(payload));
  socket.on('order ready', orderReady);
  socket.on('log', payload => logger(payload));
});


function orderReady(payload){
  payload.event = 'Order Ready For Pickup';
  io.emit('log', payload);
  console.log('Order Ready For Pickup', payload);
}

function logger(payload) {
  let time = new Date();
  let results = {
    time: time,
    events: payload.event,
    payload: payload,
  };
  console.log(`${chalk.bgCyan('Events:')}`,results.events, results.time);
}

function delivered(payload) {
  console.log(`${chalk.bgBlue('Package Delivered:')}`, payload.orderId);
}

