const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require("path");
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
});

app.use(express.static(path.join(__dirname, './public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

io.on('connection', (socket) => {
    console.log('an user connected');

    socket.on('message', (message) => {
        // console.log(message);
        io.emit('message', `${message}`);
    });

});

httpServer.listen(process.env.PORT || 8080, () => console.log('listing on http://localhost:8080'))