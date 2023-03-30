import { model } from "mongoose";

const mongoose = require('mongoose');

const gameSchema = mongoose.Schema(
    {
        "player1": { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
        "player2": { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
        "rounds": [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true }],
    },
    {
        timestamps: true
    }
)

const Game = mongoose.model('Game', gameSchema)
export default Game