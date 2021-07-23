const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const server = app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});

const io = require('socket.io')(server, {
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket) => {
    console.log("User connects");

    socket.on('message', (message) => {
        socket.broadcast.emit('message', message);
    });
});