import { Socket } from "socket.io";
import { Player } from "./player";
import { Tournament } from "./tournament";

import { Server } from "socket.io";




var socketio = require('socket.io')

module.exports.listen = function(app: any){
    const io = new Server({ /* options */ });

    io.on("connection", (socket: Socket) => {
        console.log("Socket: ", socket)
      });
      
    

    return io
}

// module.exports = function(server: any){

//     var io = require("socket.io").listen(server);

//     io.sockets.on('connection', function(socket: Socket) {


//         socket.on('createTournament', function(data) {

//                 const player = newPlayer(data.playerName, socket)
//                 const tournament = new Tournament(0, data.tournamentName, [player], [], player)

//         })

//         socket.on('joinTournament', function(data) {
            
//         })

//         socket.on('startTournament', function(data) {
            
//         })

//         socket.on('actionPlayer', function(data) {
            
//         })

//     });

//     return io;
// };



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