
require('dotenv').config();

var express = require('express')
var app = express()
var http = require('http').createServer(app);

/* Connection à la BDD */
const connectDB = require('./mongodb')
connectDB();


import { Server, Socket } from "socket.io";
import { Player } from "./player";
import { Tournament } from "./tournament";

const io = new Server(http, {
    cors: {
        origin: "*",
    }
})

const { setTournament } = require('./controllers/tournament.controller')


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


io.sockets.on('connection', function (socket: Socket) {

    console.log("Nouveau socket connection : ", socket.conn['id']);
    
    socket.on('test', setTournament)
    
    socket.on('createTournament', function (data) {

        
        const player = newPlayer(data.playerName, socket)
        const tournament = new Tournament(0, data.tournamentName, [player], [], player)

    })

    socket.on('joinTournament', function (data) {

    })

    socket.on('startTournament', function (data) {

    })

    socket.on('actionPlayer', function (data) {

    })

});





function joinTournament(tournament: Tournament, player: Player) {
    tournament.players.push(player)
}

function newPlayer(name: String, socket: Socket) {
    return new Player(name, socket, 0)
}

/*
    EMIT :

    io.emit('onUpdateListTournament', tournaments)
    
    io.in("room1").emit('onUpdateTournament')
    io.in("room1").emit('onStartTournament')
    io.in("room1").emit('onUpdateGame')
    io.in("room1").emit('onUpdateRound')
    io.in("room1").emit('onEndTournament')

*/