import { Socket } from "socket.io";

module.exports = function(server: any){

    var io = require("socket.io").listen(server);

    io.sockets.on('connection', function(socket: Socket) {


        socket.on('joinTournament', function(data) {
            
        })

        socket.on('startTournament', function(data) {
            
        })

        socket.on('actionPlayer', function(data) {
            
        })

    });

    return io;
};

/*
    EMIT :

    io.emit('onUpdateListTournament', tournaments)
    
    io.in("room1").emit('onUpdateTournament')
    io.in("room1").emit('onStartTournament')
    io.in("room1").emit('onUpdateGame')
    io.in("room1").emit('onUpdateRound')
    io.in("room1").emit('onEndTournament')

*/