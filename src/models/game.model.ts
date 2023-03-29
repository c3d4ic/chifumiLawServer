import { model } from "mongoose";

const mongoose = require('mongoose');

const gameSchema = mongoose.Schema(
    {
        "player1": {
            type: Number,
            required: true
        },
        "player2": {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const Game = mongoose.model('Game',gameSchema)
export default Game