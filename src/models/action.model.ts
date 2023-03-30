import { model } from "mongoose";

const mongoose = require('mongoose');

const actionSchema = mongoose.Schema(
    {
        "action": {
            type: Number,
            required: true
        },
        "player": { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
        "index": {
            type: Number,
            required: true
        },
    },
)

const Action = mongoose.model('Action',actionSchema)
export default Action