const { io } = require('../index');

io.on('connection', client => {
    console.log('Cliente Socket Conectado - socket');
    client.on('disconnect', () => { 
        console.log('Socket Server desconectado - socket');
    });

    client.on('mensaje', function(payload){
        console.log('mesaje', payload);
        io.emit('mensaje', 'emit - socket');
    });
  });

  