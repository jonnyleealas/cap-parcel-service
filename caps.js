'use strict';

const port = process.env.PORT || 8080;
const io = require('socket.io')(port);
const chalk = require('chalk');

io.on('connection', (socket)=>{
  console.log('io connected', socket.id);
});

io.of('/caps').on('connection', (socket)=>{
  // socket.on('join', (room)=>{
  //   socket.join(room);
  // });

  socket.emit('welcome', 'hello welcome to the games area');
  socket.on('order ready', (payload)=>{
    logger('Order Ready',payload);
    // socket.broadcast.emit('order ready');
  });
  socket.on('in transit', (payload)=>{
    logger('In Transit', payload);
    // socket.broadcast.emit('in transit');
  });
  socket.on('delivered', (payload)=>{
    logger('Delivered', payload);
    // socket.broadcast.emit('delivered');
  });
});

function logger(event, payload) {
  let time = new Date();
  let results = {
    time: time,
    payload: payload,
  };
  console.log(`${chalk.bgCyan('Events:')}`, event, results.time, results.payload);
  io.of('/caps').emit(event, payload);
}


