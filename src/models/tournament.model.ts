import { model } from "mongoose";
import { Player } from "../player";

const mongoose = require('mongoose');

const tournamentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
        admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
        games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
    },
    {
        timestamps: true
    }
)

const Tournament = mongoose.model('Tournament', tournamentSchema)
export default Tournament