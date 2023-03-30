import Action from "./action.model";

const mongoose = require('mongoose');

const roundSchema = mongoose.Schema(
    {
        "winner": { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
        "actions": [ Action ]
    },
)

const Round = mongoose.model('Round',roundSchema)
export default Round