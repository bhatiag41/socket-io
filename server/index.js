const express = require('express')
const http = require('http');
const cors = require('cors');
const socketio =require('socket.io')
const app = express();
app.use(cors());
const server = http.createServer(app)
const io = socketio(server)
io.on('connection',socket=>{
    console.log("ws connected")

socket.on('message', (message) => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
app.get("/", (req, res) => {
    res.send("Backend API is working");
  });
const PORT = 5000 || process.env.PORT;

server.listen(PORT,()=> console.log(`server running on ${PORT}`))