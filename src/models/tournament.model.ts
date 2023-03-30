import Game from "../game";

const mongoose = require('mongoose');

const tournamentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
        admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
        games: [Game],
    },
    {
        timestamps: true
    }
)

const Tournament = mongoose.model('Tournament', tournamentSchema)
export default Tournament