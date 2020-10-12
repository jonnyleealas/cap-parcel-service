'use strict';
const port = process.env.PORT || 4000;
const io = require('socket.io')(port);
const chalk = require('chalk');

io.on('connection', (socket)=>{
  console.log('io connected', socket.id);
});

io.of('/caps').on('connection', (socket)=>{
  socket.on('join', (room)=>{
    socket.join(room);
  });

  socket.emit('welcome', 'hello welcome to the games area');
  socket.on('delivered', payload => delivered(payload));
  socket.on('order ready', orderReady);
  socket.on('log', payload => logger(payload));

});



function orderReady(payload){
  console.log('Order Ready', payload)
  payload.event = 'Order Ready For Pickup';
  io.emit('log', payload);
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

