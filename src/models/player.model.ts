const mongoose = require('mongoose');

const playerSchema = mongoose.Schema(
    {
        "name": {
            type: String,
            required: true
        },
        "socketId": {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Player = mongoose.model('Player',playerSchema)
export default Player

