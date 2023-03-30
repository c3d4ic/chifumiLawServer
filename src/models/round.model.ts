import { model } from "mongoose";

const mongoose = require('mongoose');

const roundSchema = mongoose.Schema(
    {
        player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
        actions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Action', required: true },]
    },
)

const Round = mongoose.model('Round',roundSchema)
export default Round