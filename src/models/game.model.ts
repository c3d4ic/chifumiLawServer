import { Round } from "../round";

const mongoose = require('mongoose');

const gameSchema = mongoose.Schema(
    {
        "winner":  { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
        "player1": { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
        "player2": { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
        "rounds": [Round],
    },
    {
        timestamps: true
    }
)

const Game = mongoose.model('Game', gameSchema)
export default Game