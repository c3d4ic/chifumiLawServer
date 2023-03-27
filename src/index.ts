import { Socket } from "socket.io";

require('dotenv').config();

var express = require('express')
var app = express()
var http = require('http').createServer(app);

const io = require('socket.io')(http, {
    cors: {
        origin: "*",
    }
})

const PORT = process.env.PORT;

    app.use(function (req: Request, res: any, next: any) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use((req: any, res: any, next: any) => {
    const error = new Error('Not found');
    // error.status = 404;
    next(error);
})

app.use((err: any, req: any, res: any, next: any) => {
    res.status(err.status || 500);
    res.json({
        message: err.message
    })
});


http.listen(PORT, function () {
    console.log(`App listening at http://localhost:${PORT}`);
});

io.on('connection', function (socket: Socket) {


    console.log('Client connected to the WebSocket : ', socket.conn["id"]);

    socket.on('initTournament', (data) => {
        console.log('title : ', data);
    });


    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

})